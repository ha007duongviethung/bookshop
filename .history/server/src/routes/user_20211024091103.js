import {Router} from 'express'
const User = Router()

User.get('/', userController)

export default User
