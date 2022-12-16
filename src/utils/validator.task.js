import { isString, isBoolean, sortFields } from './general.tools.js'

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
        throw new Error("Completed field only accepts 'true' or 'false'")
    }

    return dirtyCompleted
}


/**
 * 
 * @param { any } dirtyData
 * @param { { allFields: boolean } } [options = { allFields: true }] - Set true if you want to validate all the defined fields
 * @returns { { title?: string, description?: string, completed?: boolean } } taskData
 */
export const validateTaskFields = (dirtyData, options = { allFields: true }) => {
    if(!dirtyData) {
        throw new Error('Invalid data!')
    }

    if(!options.allFields) {
        const data = {}
        const validFields = ['title', 'description', 'completed'] // Valid fields order
        const validators = [parseTitle, parseDescription, parseCompleted]

        const fields = Object.keys(dirtyData).filter(field => validFields.includes(field))

        if(fields.length <= 0) {
            throw new Error("Invalid fields! (Valid: 'name', 'description', 'completed'")
        }

        const sortedFields = sortFields(fields, validFields)
        const values = sortedFields.map(field => dirtyData[field])

        values.forEach((value, index) => {
            const field = sortedFields[index]

            const indexValidator = validFields.indexOf(field)
            const validator = validators[indexValidator]

            data[field] = validator(value)
        })

        return data
    }

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