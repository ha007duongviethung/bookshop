const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let authHeader = req.header('Authorization')
    if(req.body.headers) {
        authHeader = req.body.headers.Authorization
    }
    const token = authHeader && authHeader.split(' ')[1]

    if(!token)
        return res.status(401).json({success: false, message: 'Access token not found'})

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.userId = decoded.userId
        next()
    } catch (error) {
        console.error(error)
        return res.status(403).json({success: false, message: 'Invalid token'})
    }
}

module.exports = verifyToken