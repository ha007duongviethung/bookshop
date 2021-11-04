import {Router} from 'express'
import userController from '../controllers//user'
const User = Router()

User.get('/', userController)

export default User
