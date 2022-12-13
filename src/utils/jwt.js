import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()


/**
 * 
 * @param {UserModel} user 
 * @returns {string} jsonWebToken
 */
export const createToken = user => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.SECRET)

    return token
}
