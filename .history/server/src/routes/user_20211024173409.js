import {Router} from 'express'
import userController from '../controllers/user'
const User = Router()

User.get('/', userController.fetchUsers)

export default User
