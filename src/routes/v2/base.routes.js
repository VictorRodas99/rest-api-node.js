import { Router } from 'express'
import { guard } from '../../middlewares/guard.js'
import { getUserInfo } from '../../controllers/user.controller.js'
import {
    getTasks, getTaskById,
    createTasks, updateTasks,
    deleteTask
} from '../../controllers/data.controller.js'

const router = Router()

router
    .get('/profile', guard, getUserInfo)
    .get('/tasks', guard, getTasks)
    .get('/tasks/:id', guard, getTaskById)
    .post('/tasks', guard, createTasks)
    .put('/tasks/:id', guard, updateTasks)
    .delete('/tasks/:id', guard, deleteTask)


export default router