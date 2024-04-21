// const mongoose = require('mongoose')
// const app = require('./app')

// const { DB_HOST, PORT = 3000 } = process.env

// // mongoose.set('strictQuery', true)

// mongoose.connect(DB_HOST)
//     .then(() => app.listen(PORT))
//     .catch(error => {
//         console.log(error.message)
//         process.exit(1)
//     })



// const mongoose = require('mongoose')

// const app = require('./app')

// const DB_HOST = 'mongodb+srv://Andriy:UVU1Ygf82OA9LHJo@cluster0.ienue5y.mongodb.net/books_reader?retryWrites=true&w=majority'

// mongoose.set('strictQuery', true)

// mongoose.connect(DB_HOST)
//     .then(() => app.listen(3000))
//     .catch(error => {
//         console.log(error.message)
//         process.exit(1)
//     })




// DSjrOIhQKUpt8qAc


const mongoose = require('mongoose')

const app = require('./app')

const DB_HOST = 'mongodb+srv://andriy:bY9OhZkF4TjwO1dL@cluster0.miwmj1a.mongodb.net/books_reader?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
    .then(() => app.listen(3000))
    .catch(error => console.log(error.message))



// eTigqx8IWlUfgeR4 