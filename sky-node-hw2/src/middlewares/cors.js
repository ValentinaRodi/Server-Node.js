const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3005')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PATCH, POST, DELETE')
    next()
}

module.exports = cors