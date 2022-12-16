export const isString = data => {
    return typeof data === 'string' || data instanceof String
}

export const isBoolean = data => {
    return typeof data === 'boolean' || data instanceof Boolean
}


// function for sorting fields in validator.tasks
export const sortFields = (unsorted, validOrder) => {
    const sorted = [...unsorted]

    sorted.sort((a, b) => {
        const aIndex = validOrder.indexOf(a)
        const bIndex = validOrder.indexOf(b)
    
        if(aIndex < bIndex) return -1
    
        if(aIndex > bIndex) return 1
    
        return 0
    })

    return sorted
}


export const getDate = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    const fullHour = date.toTimeString().split(' ')[0]

    return `${fullDate} ${fullHour}`
}