import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()


/**
 * @typedef { import('sequelize').Model } Model
 * 
 * @param { Model } user 
 * @returns { never } jsonWebToken
 */
export const createToken = user => {
    const token = jwt.sign({
        id: user.id,
        name: user.name
    }, process.env.SECRET)

    return token
}
