const { nanoid } = require('nanoid')

const fs = require('fs/promises')
const path = require('path')



const bookPath = path.join(__dirname, 'books.json')

const getAll = async() => {
    const books = await fs.readFile(bookPath)
    return JSON.parse(books)
}

const getById = async (id) => {
    const bookId = String(id)
    const data = await getAll()
    const oneBook = data.find(el => el.id === bookId)
    return oneBook || null
}

const addBook = async (data) => {
    const books = await getAll()

    const newBook = {
        id: nanoid(),
        ...data
    }

    books.push(newBook)

    await fs.writeFile(bookPath, JSON.stringify(books, null, 2))

    return newBook
}

const updateById = async (id, data) => {
    const bookId = String(id)

    const books = await getAll()

    const index = books.findIndex(el => el.id === bookId)

    if (index === -1) return null
    
    books[index] = { id, ...data }

    await fs.writeFile(bookPath, JSON.stringify(books, null, 2))

    return books[index]
}

const deleteById = async (id) => {
    const bookId = String(id)

    const books = await getAll()

    const index = books.findIndex(el => el.id === bookId)

    if (index === -1) return null
    
    const [deletedBook] = books.splice(index, 1)

    await fs.writeFile(bookPath, JSON.stringify(books, null, 2))

    return deletedBook
}



module.exports = {
    getAll,
    getById,
    addBook,
    updateById,
    deleteById
}