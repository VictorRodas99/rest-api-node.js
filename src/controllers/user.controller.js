import { User } from '../models/User.js'
import { findBy } from '../services/general.services.js'

export const getUserInfo = async (req, res) => {
    const { id } = req.session

    try {
        const user = await findBy(User, { id })

        if(typeof user === 'object' && 'error' in user) {
            res.status(503).json({
                error: 'Database Error'
            })
        }
    
        return res.json({
            requestedAt: new Date(),
            userId: id,
            username: user.name,
            email: user.email
        })
        
    } catch (error) {
        console.error(error)

        res.status(400).json({
            error: error.message
        })
    }
}