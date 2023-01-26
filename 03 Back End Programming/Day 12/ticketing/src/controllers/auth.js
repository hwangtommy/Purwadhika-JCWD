const db = require("../models")
const User = db.user 
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {Op} = require("sequelize")
const secret = process.env.secret
const suspend_user = db.suspend_user

const authController = {
    register: async(req, res) => {
        const { email, username, phone_number, password, password_confirmation, isAdmin } = req.body
        const isExist = await User.findOne({
            where:{
                [Op.or]:[
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
            return res.status(400).json({
                message: "This email is already registered"
            })
        }

        if (password != password_confirmation){
            return res.status(400).json({
                message: "Password is not the same"
            })
        }

        if (password.length <= 8){
            return res.status(400).json({
                message: "Password must be more than 8 characters"
            })
        }
        
        const hashPassword = bcrypt.hashSync(password, 10)
        const data = {
            username: username,
            email: email,
            phone_number: phone_number,
            isAdmin: isAdmin,
            password: hashPassword
        }

        const result = await User.create({...data})

        res.status(200).json({
            message: "New user created",
            result: result
        })
    },
    login: async(req, res) => {
        const { login, password } = req.body;
        const result = await User.findOne({
            where: { [Op.or] : [
                {
                    username: login 

                },
                {
                    email: login
                },
                {
                    phone_number: login
                }
            ]
            }
        })

        if (result.login_attempt >= 3){
            const blockedTime = new Date()
            blockedTime.setMinutes(blockedTime.getMinutes() + 3)

            await suspend_user.create({
                suspend_until: blockedTime,
                user_id: result.id
            })

            await User.update(
                {
                    login_attempt: 0
                },
                {
                    where: {
                        id: result.id
                    }
                }
            )

            const check_suspend = await suspend_user.findOne({
                where: {
                    user_id: result_id
                },
                order: [["id", "DESC"]]
            })

            if (check_suspend){
                
            }
        }
    },

}

module.exports = authController