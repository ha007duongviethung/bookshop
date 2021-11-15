const User = require('../models/users')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

module.exports = class UserAPI {
    // @router POST api/user/login
    // @desc login user
    // @access public
    static async login(req, res) {
        const {user_name, password} = req.body

        // Simple validation
        if(!user_name || !password) {
            return res.status(400)
            .json({success: false, message: 'Missing user and/or password'})
        }

        try {
            // check for existing user
            const user = await User.findOne({user_name})

            if(!user)
                return res.status(400)
                .json({success: false, message: 'Incorrect username or password'})

            // Username found
            const passwordValid = 
                await argon2.verify(user.password, password)
            if(!passwordValid)
                return res.status(400)
                .json({success: false, message: 'Incorrect username or password'})

            // return token
            const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET)
            user.remember_token = accessToken
            await user.save()

            const type = await user.type
            if(type)
                res.json({success: true, message: "Admin logged in successfully", accessToken})
            else
                res.json({success: true, message: "User logged in successfully", accessToken})
        } catch (error) {
            console.error(error)
            res.status(500).json({success: false, message: "Internal Server Error"})
        }
    }

    // @router POST /api/user/register
    // @desc register user
    // @access public
    static async register(req, res) {
        const {user_name, password} = req.body

        // Simple validation
        if(!user_name || !password) {
            return res.status(400)
            .json({success: false, message: 'Missing user_name and/or password'})
        }
        
        try {
            // chech for existing user
            const user = await User.findOne({user_name})

            if(user) 
                return res.status(400).json({success: false, message: 'User already taken'})

            // all good
            const hashedPassword = await argon2.hash(password)
            const full_name = req.body.full_name
            const newUser = new User({full_name, user_name, password: hashedPassword})
            
            // return token
            // const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
            // newUser.remember_token = accessToken
            if(req.body.img) {
                newUser.img = req.body.img
            }
            await newUser.save()

            res.json({success: true, message: "User created successfully"})
        } catch (error) {
            console.error(error)
            res.status(500).json({success: false, message: "Internal Server Error"})
        }
    }

    static async fetchUser(req, res) {
        const authorization = req.headers.authorization.split(' ')[1]
        
        try {
            // check for existing user
            const user = await User.findOne({remember_token: authorization})

            if(!user)
                return res.status(400)
                .json({success: false, message: 'Incorrect username or password'})

            const full_name = await user.full_name
            const type = await user.type
            const img = await user.img
            if(type)
                res.json({success: true, message: "Admin logged in successfully", accessToken: authorization, full_name, img})
            else
                res.json({success: true, message: "User logged in successfully", accessToken: authorization, full_name, img})
        } catch (error) {
            console.error(error)
            res.status(500).json({success: false, message: "Internal Server Error"})
        }
    }
}