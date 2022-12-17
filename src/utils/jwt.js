import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()


/**
 * @typedef { import('sequelize').Model } Model
 * 
 * @param { Model } user 
 * @returns { string } jsonWebToken
 */
export const createToken = user => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.SECRET)

    return token
}
