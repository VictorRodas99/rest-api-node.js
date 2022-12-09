import { getDate } from '../utils/logger.tools.js'

export function logger(req, res, next) {
    const fullDate = getDate()
    const { method, url, protocol, httpVersion, ip } = req

    res.on('finish', () => {
        const code = res.statusCode
        console.log(`${ip} - - [${fullDate}] "${method} ${url} ${protocol.toUpperCase()}/${httpVersion}" ${code} -`)
    })

    next()
}