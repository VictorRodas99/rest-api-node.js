import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller.js'
import { guard } from '../middlewares/guard.js'

const router = Router()

router
    .get('/', (_req, res) => res.send('Welcome!'))
    .post('/register', registerUser)
    .post('/login', loginUser)
    .get('/profile', guard, (_req, res) => res.send('Testing route...'))


export default router