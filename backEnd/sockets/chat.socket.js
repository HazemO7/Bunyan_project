const jwt = require('jsonwebtoken');


const socketAuthMiddleware = (socket, next) => {
    try {
        const token = socket.handshake.headers.token;
        if (!token) {
            return next(new Error('No token provided'));
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = payload.id;
        socket.role = payload.role;
        next();
    }
    catch (error) {
        console.error(error);
        next(new Error('Authentication error'));
    }
}


module.exports = socketAuthMiddleware;