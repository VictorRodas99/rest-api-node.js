import { db } from '../configs/db.config.js'
import { DataTypes } from 'sequelize'
import { Task } from './Task.js'

export const User = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Task, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})

Task.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
})