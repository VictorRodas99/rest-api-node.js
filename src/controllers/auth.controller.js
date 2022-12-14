import bcrypt from 'bcrypt'
import { User } from '../models/User.js'
import { createToken } from '../utils/jwt.js'
import { findBy } from '../services/general.services.js'
import { createUser } from '../services/user.services.js'
import { validateUserFields } from '../utils/validator.user.js'
 

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = validateUserFields(req.body)
        const hashedPassword = await bcrypt.hash(password, 8)

        const userExists = await findBy(User, { email })

        if(userExists != null && 'error' in userExists) {
            return res.status(503).json({
                error: 'Database Error'
            })
        }

        if(Boolean(userExists)) {
            return res.status(200).json({
                message: 'Email already registered!'
            })
        }

        const { code, message } = await createUser({
            name,
            email,
            password: hashedPassword
        })
        
        return res.status(code).json({ message })


    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { name, email, password } = validateUserFields(req.body)
        const user = await findBy(User, { email })

        if(user != null && 'error' in user) {
            return res.status(503).json({
                error: 'Database Error'
            })
        }

        if(!Boolean(user)) {
            return res.json({
                message: 'User not registered!'
            })
        }

        const dbPassword = user.password
        const match = await bcrypt.compare(password, dbPassword)

        if(!match) {
            return res.status(400).json({
                message: 'Wrong email and password combination!'
            })
        }

        const userToken = createToken(user)

        res.cookie('access-token', userToken, {
            maxAge: 2.592e+9,
            httpOnly: true
        })
        
        return res.json({
            message: `Welcome ${name}!`
        })

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}