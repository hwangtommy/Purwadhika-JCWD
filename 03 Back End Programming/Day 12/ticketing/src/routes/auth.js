const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const { isEmail, isPhoneNumber } = require("../middlewares/auth")

router.post("/register", isEmail, isPhoneNumber, authController.register)
router.post("/login", authController.login)