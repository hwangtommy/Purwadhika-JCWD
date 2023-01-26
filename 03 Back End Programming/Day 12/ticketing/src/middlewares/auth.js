

const isEmail = (req, res, next) => {
    let email = req.user.email

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.value.match(mailFormat)){
        req,email = email
        next()
    }
    else{
        return res.status(401).json({
            message: "Invalid email!"
        })
    }
}

const isPhoneNumber = (req, res, next) => {
    let phoneNumber = req.user.phone_number

    if(phoneNumber.isInteger()){
        next()
    }
    else{
        return res.status(401).json({
            message: "Invalid phone number!"
        })
    }
}



module.exports = { isEmail, isPhoneNumber }