import { Task } from '../models/Task.js'
import { deleteBy, findBy } from '../services/general.services.js'
import { createTask, updateTask } from '../services/tasks.services.js'
import { validateTaskFields, validateReqId } from '../utils/validator.task.js'

export const getTasks = async (req, res) => {
    const { id, name } = req.session
    const tasks = await findBy(Task, { user_id: id }, { all: true })
    const completedTasks = tasks.filter(task => task.completed)   

    return res.json({
        requestedAt: new Date(),
        username: name,
        totalTasks: tasks.length,
        totalCompleted: completedTasks.length,
        tasks
    })
}

export const getTaskById = async (req, res) => {
    try {
        const id = validateReqId(req.params.id)
        const task = await findBy(Task, { id })

        if(!task) {
            return res.status(404).json({
                message: `Task with id ${id} not found`
            })
        }

        if('error' in task) {
            return res.status(503).json({
                error: 'Database Error'
            })
        }

        return res.json({ task })
        
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export const createTasks = async (req, res) => {
    try {
        const { id } = req.session
        const { title, description, completed } = validateTaskFields(req.body)

        const { code, message } = await createTask({
            title,
            description,
            completed,
            user_id: id
        })

        return res.status(code).json({
            message,
            createdAt: new Date()
        })
        
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export const updateTasks = async (req, res) => {
    try {
        const idUser = req.session.id
        const idTask = validateReqId(req.params.id)
        const fieldsToUpdate = validateTaskFields(req.body, { allFields: false })

        const result = await updateTask(Task, fieldsToUpdate, { id: idTask, user_id: idUser })

        if(!result) {
            return res.status(404).json({
                message: `Task with id ${idTask} not found or given fields are the same that the original`,
            })
        }

        if(typeof result === 'object' && 'error' in result) {
            return res.status(503).json({
                error: 'Database Error'
            })
        }

        return res.json({
            message: 'Successfull update!',
            updatedAt: new Date(),
            updatedFields: Object.keys(fieldsToUpdate)
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const idUser = req.session.id
        const idTask = validateReqId(req.params.id)

        const result = await deleteBy(Task, { id: idTask, user_id: idUser })
        
        if(!result) {
            return res.status(404).json({
                message: `Task with id ${id} not found`
            })
        }

        if(typeof result === 'object' && 'error' in result) {
            return res.status(503).json({
                error: 'Database Error'
            })
        }

        return res.json({
            message: `Task ${idTask} deleted!`
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}