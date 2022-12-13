import { User } from '../models/User.js'


/**
 * 
 * @param { { name: string, email: string, password: string } } data
 * @returns { Promise<{ code: number, message: string }> } response
 */
export const createUser = async data => {
    try {
        await User.create(data)
        
        return {
            code: 200,
            message: 'User registered!'
        }

    } catch (error) {
        console.error(error)

        return {
            code: 503,
            message: error
        }
    }
}


/**
 * 
 * @param { {condition: { data: string } } } condition
 * @returns { Promise<UserModel> | Promise<errorObject> | Promise<null> } 
 */
export const findUserBy = async condition => {
    try {
        const user = await User.findOne({
            where: condition
        })
    
        return user

    } catch (error) {
        return { error }
    }
}