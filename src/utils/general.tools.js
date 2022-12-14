export const isString = data => {
    return typeof data === 'string' || data instanceof String
}

export const isBoolean = data => {
    return typeof data === 'boolean' || data instanceof Boolean
}


export const getDate = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    const fullHour = date.toTimeString().split(' ')[0]

    return `${fullDate} ${fullHour}`
}