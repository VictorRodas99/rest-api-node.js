import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const guard = (req, res, next) => {
    const response = { message: 'User not authenticated' }

    if(!req.cookies || !('access-token' in req.cookies)) {
        return res.status(403).json(response)
    }

    const userToken = req.cookies['access-token']

    try {
       const isValid = jwt.verify(userToken, process.env.SECRET) 

       if(isValid) {
            const { payload } = jwt.decode(userToken, { complete: true })
            req.session = payload //{ id, name, lat }

            return next()
       } else {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
       }

    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
}