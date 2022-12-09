import { db } from '../configs/db.config.js'
import { DataTypes } from 'sequelize'

export const Task = db.define('Tasks', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.STRING
    },

    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, { timestamps: false })