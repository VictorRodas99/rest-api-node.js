import { Task } from '../models/Task.js'

/**
 * 
 * @param { { title: string, description: string, completed: boolean } } data
 * @returns { Promise<{ code: number, message: string }> } response
 */
export const createTask = async data => {
    try {
        const newTask = await Task.create(data)

        return {
            code: 200,
            message: `Task ${newTask.id} created`
        }
        
    } catch (error) {
        console.error(error)

        return {
            code: 503,
            message: error.message
        }
    }
}

/**
 * @typedef { import('sequelize').Model } Model
 * 
 * @param { Model } Model 
 * @param { Object } fieldsData
 * @param { { data: string } } condition 
 * @returns { Promise<number> | Promise<{ error: any }> }
 */
export const updateTask = async (Model, fieldsData, condition) => {
    try {
        const [ result ] = await Model.update(fieldsData, {
            where: condition
        })

        return result

    } catch (error) {
        return { error }
    }
}