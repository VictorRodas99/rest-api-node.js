import { Router } from 'express';
import { getTasks, getTaskById } from '../../controllers/data.controller.js';
import { guard } from '../../middlewares/guard.js';

const router = Router()

//TODO: make guards for every route
router
    .get('/tasks', guard, getTasks)
    .get('/tasks/:taskId', getTaskById)
    .post('/tasks')
    .put('/tasks/:taskId')
    .delete('/tasks/:taskId')


export default router