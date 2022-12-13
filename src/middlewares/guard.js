import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const guard = (req, res, next) => {
    const response = { message: 'User not authenticatd' }

    if(req.cookies === undefined) {
        return res.status(403).json(response)
    }

    if(!('access-token' in req.cookies)) {
        return res.status(403).json(response)
    }

    //TODO: change this
    const userToken = Object.entries(req.cookies).filter(cookie => cookie[0] == 'access-token')[0][1]

    try {
       const isValid = jwt.verify(userToken, process.env.SECRET) 

       if(isValid) {
            const { payload } = jwt.decode(userToken, { complete: true })
            req.session = payload //{ id, email, name, lat }

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