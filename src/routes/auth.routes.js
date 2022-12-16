import { Router } from 'express'
import { loginUser, registerUser, logoutUser } from '../controllers/auth.controller.js'
import { guard } from '../middlewares/guard.js'

const router = Router()

router
    .get('/', (_req, res) => res.send('Welcome!'))
    .post('/register', registerUser)
    .post('/login', loginUser)
    .get('/logout', guard, logoutUser)


export default router