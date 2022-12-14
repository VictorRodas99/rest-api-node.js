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