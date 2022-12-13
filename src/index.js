import v1TasksRoutes from './routes/v1/tasks.routes.js'
import v2Routes from './routes/v2/base.routes.js'
import authRoutes from './routes/auth.routes.js'
import { logger } from './middlewares/logger.js'
import { db } from './configs/db.config.js'
import * as dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'


const app = express()
dotenv.config()

/* Settings */
const PORT = process.env.PORT || 8000


/* Middlewares */
app.use(express.json())
app.use(cookieParser())
app.use(logger)


/* Endpoints */
app.use('/api', authRoutes)
app.use('/api/v1', v1TasksRoutes)
app.use('/api/v2', v2Routes)

app.use((_req, res) => {
    res.status(404).json({
        error: 'Route not found!'
    })
})



db.sync().then(
    () => console.log('\nSuccessfully sync to the database!')
).catch(
    error => console.error('Unable to connect to the database:', error.message)
)

app.listen(PORT,
    () => console.log(`Server listening on port ${PORT}...`))