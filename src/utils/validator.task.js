import { isString, isBoolean } from './general.tools.js'

const parseTitle = dirtyTitle => {
    if(!isString(dirtyTitle)) {
        throw new Error('Invalid or missing title')
    }

    return dirtyTitle
}

const parseDescription = dirtyDescription => {
    if(!isString(dirtyDescription)) {
        throw new Error('Invalid or missing description')
    }

    if(dirtyDescription.length < 8) {
        throw new Error('Description must have at least more than eigth characters')
    }
    
    return dirtyDescription
}

const parseCompleted = dirtyCompleted => {
    if(!isBoolean(dirtyCompleted)) {
        throw new Error('Completed field only accepts "true" or "false"')
    }

    return dirtyCompleted
}


/**
 * 
 * @param { any } dirtyData 
 * @returns { { title: string, description: string, completed: boolean } } taskData
 */
export const validateTaskFields = dirtyData => {

    const data = {
        title: parseTitle(dirtyData.title),
        description: parseDescription(dirtyData.description),
        completed: parseCompleted(dirtyData.completed)
    }

    return data
}

/**
 * 
 * @param { any } id 
 * @returns { number } parsedId
 */
export const validateReqId = id => {
    const parsedId = Number(id)

    if(isNaN(parsedId) || parsedId <= 0) {
        throw new Error('The id must be a positive number')
    }

    return parsedId
}