// const express = require('express')
// const cors = require('cors')

// const booksRouter = require('./routes/api/books')

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use('/api/books', booksRouter)

// app.use((req, res) => {
//     res.status(404).json({ message: 'not found' })
// })

// app.use((err, req, res, next) => {
//     const { status = 500, message = 'Server error' } = err
//     res.status(status).json({ message })
// })

// app.listen(3000, () => console.log('Server running'))



const express = require('express')
const cors = require('cors')
require('dotenv').config()

const routerBooks = require('./routes/api/books')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/books', routerBooks)

app.use((req, res) => {
    res.status(404).json({ message: 'not found' })
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err
    res.status(status).json({ message })
})

module.exports = app

// app.listen(3000, () => console.log('Server running'))



// roLKF2rQHH7Xlpje
// LB2TuIOyqWh7WqWJ
// UVU1Ygf82OA9LHJo