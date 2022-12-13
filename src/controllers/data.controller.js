export const getTasks = (req, res) => {
    console.log(req.session)

    res.json({
        status: 'OK',
        response: 'Hello, World!'
    })
}

export const getTaskById = (req, res) => {
    console.log('TODO: get task by id')
}