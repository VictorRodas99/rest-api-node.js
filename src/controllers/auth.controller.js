import { createUser, findUserBy } from '../services/user.services.js'
import { validateUserFields } from '../utils/validator.js'
import bcrypt from 'bcrypt'
//import jwt


export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = validateUserFields(req.body)
        const hashedPassword = await bcrypt.hash(password, 8)

        const userExists = await findUserBy({ email })

        if(userExists.error) {
            res.status(503).json({
                error: 'Database Error'
            })
        }

        if(Boolean(userExists)) {
            res.status(200).json({
                message: 'Email already registered!'
            })
        }

        const { code, message } = await createUser({
            name,
            email,
            password: hashedPassword
        })
        
        res.status(code).json({ message })


    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


export const loginUser = async (req, res) => {
    
}