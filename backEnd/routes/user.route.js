// require express
const express = require("express");
// Router
const router = express.Router();
// Require Controller

const { getAllUsers, getUserById , createUser} = require("../controllers/user.controller");
// Init Method Request
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
// Export
module.exports = router;
