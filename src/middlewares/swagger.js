import swaggerUI from 'swagger-ui-express'
import swaggerSpec from '../configs/swagger.config.json' assert { type: 'json' }

export const v1SwaggerDocs = app => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    app.get('/api/v1/docs.json', (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}