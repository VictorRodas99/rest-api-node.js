import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller.js'

const router = Router()

router
    .get('/', (_req, res) => res.send('Welcome!'))
    .post('/register', registerUser)
    .post('/login', loginUser)


export default router