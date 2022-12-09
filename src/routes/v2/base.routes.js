import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send("Hello, World from v2!")
})

export default router