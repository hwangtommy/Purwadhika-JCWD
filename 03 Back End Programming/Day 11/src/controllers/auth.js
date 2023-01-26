const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt")
const { Op } = require("sequelize")
const jwt = require("jsonwebtoken")
const secret = process.env.secret_key

const authController = {
    register: async(req, res) => {
        const { email, password, username, isAdmin } = req.body;
        const isExist = await User.findOne({
            where:{
                [Op.or]: [
                    {
                        username: username
                    },
                    {
                        email: email
                    }
                ]

            }
        })

        if (isExist){
            req.status(400).json({
                message: "This email is already registered"
            })
        }

        const hashPassword = bcrypt.hashSync(password, 10);
        const data = {
            username: username,
            email: email,
            isAdmin: isAdmin,
            password: hashPassword
        }

        const result = await User.create({...data})

        res.status(200).json({
            message: "New user created",
            result: result
        })
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid){
            return res.status(400).json({
                message: "Wrong password"
            })
        }
        const token = jwt.sign({...user}, secret, { expiresIn: "1h" })

        return res.status(200).json({
            message: "User login",
            result: token
        })
    },
    editPassword: async (req, res) => {
        const { password, username } = req.body;

        const hashpassword = bcrypt.hashSync(password, 10);
        const result = await User.update(
            {
            password: hashpassword
            },
            {
                where: {
                    username: username
                }
            }
        )

        res.status(200).json({
            message: "Password has been changed"
        })
    },
    editRole: async (req, res) => {


        
    }
}

module.exports = authController