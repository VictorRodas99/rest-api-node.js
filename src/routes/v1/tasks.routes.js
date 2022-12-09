import { Router } from 'express';
import { getTasks, getTaskById } from '../../controllers/data.controller.js';

const router = Router()

//TODO: make guards for every route
router
    .get('/tasks', getTasks)
    .get('/tasks/:taskId', getTaskById)
    .post('/tasks')
    .put('/tasks/:taskId')
    .delete('/tasks/:taskId')


export default router