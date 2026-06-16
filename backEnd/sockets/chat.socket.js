const jwt = require('jsonwebtoken');

const socketAuthMiddleware = (socket, next) => {
    try {
        // Look for the token in handshake headers or auth object
        const token = socket.handshake.headers.token || socket.handshake.auth?.token;
        
        if (!token) {
            return next(new Error('No token provided'));
        }
        
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = payload.id;
        socket.role = payload.role;
        next();
    } catch (error) {
        console.error("Socket Auth Error:", error.message);
        next(new Error('Authentication error'));
    }
};

const socketChatContoller = (io) => {
    // Register the authentication middleware for all incoming socket connections
    io.use(socketAuthMiddleware);

    io.on('connection', (socket) => {
        console.log(`A user connected: ${socket.userId} (Role: ${socket.role})`);

        // Handle Room Assignment based on roles
        if (socket.role === 'admin') {
            // Admins join a global admin pool room to listen to all user support requests
            socket.join('admin_room');
        } else {
            // Users join a private room named after their own unique User ID
            socket.join(socket.userId);
        }

        // Event 1 - User sends a message to the support admins
        socket.on('sendMsg', (data) => {
            // Forward the message to the admin pool, containing the user's private room ID
            io.to('admin_room').emit('receiveAdminMsg', {
                text: data.text,
                userId: socket.userId, // This functions as the chat room identifier for the admin
            });
        });

        // Event 2 - Admin sends a targeted reply back to a specific user
        socket.on('sendAdminMsg', (data) => {
            // Ensure the frontend admin app passes the target user's ID in 'data.userId'
            if (data.userId) {
                io.to(data.userId).emit('receiveUserMsg', {
                    text: data.text,
                    adminId: socket.userId,
                });
            }
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.userId}`);
        });
    });
};

// Exporting as an object as you had it structured
module.exports = { socketAuthMiddleware, socketChatContoller };