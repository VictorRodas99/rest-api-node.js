import { Task } from '../models/Task.js'
import { findBy } from '../services/general.services.js'
import { createTask } from '../services/tasks.services.js'
import { validateTaskFields, validateReqId } from '../utils/validator.task.js'

export const getTasks = async (req, res) => {
    const { id, name, email } = req.session
    const tasks = await findBy(Task, { user_id: id }, { all: true })
    const completedTasks = tasks.filter(task => task.completed)   

    return res.json({
        requestedAt: new Date(),
        username: `${name}`,
        email,
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

export const updateTask = async (req, res) => {
    const { id } = req.params //TODO: validate id
    res.send('TODO: update task')
}

export const deleteTask = async (req, res) => {
    res.send('TODO: delete task')
}