import { isString } from './general.tools.js'

const parseName = dirtyName => {
    if(!isString(dirtyName)) {
        throw new Error('Invalid or missing name')
    }

    return dirtyName
}

const parseEmail = dirtyEmail => {
    const errorMessage = 'Invalid or missing email'

    if(!isString(dirtyEmail)) {
        throw new Error(errorMessage)
    }
    
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const isValid = regex.test(dirtyEmail)

    if(!isValid) {
        throw new Error(errorMessage)
    }

    return dirtyEmail
}


const parsePassword = dirtyPassword => {
    if(!isString(dirtyPassword) || String(dirtyPassword).length < 8) {
        throw new Error('Password is missing or is too short (must contain more than 8 characters)')
    }
    
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    const isValid = regex.test(dirtyPassword)

    if(!isValid) {
        throw new Error('Password must contain at least one number and one uppercase and lowercase letter')
    }

    return dirtyPassword
}


/**
 * 
 * @param { any } dirtyData
 * @param { boolean } login - If it sets in true, it doesn't validate the field 'name'
 * @returns {{ name: string, email: string, password: string }  | { email: string, password: string }} userData
 */
export const validateUserFields = (dirtyData, login = false) => {
    let data = {}

    if(login) {
        if('name' in dirtyData) throw new Error("The field 'name' is not required for login")

        data = {
            email: parseEmail(dirtyData.email),
            password: parsePassword(dirtyData.password)
        }
    } else {
        data = {
            name: parseName(dirtyData.name),
            email: parseEmail(dirtyData.email),
            password: parsePassword(dirtyData.password)
        }
    }

    return data
}