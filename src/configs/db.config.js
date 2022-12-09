import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

export const db = new Sequelize(
    'todos_db',
    'root',
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)