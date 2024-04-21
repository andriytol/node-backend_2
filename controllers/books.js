// const Joi = require('joi')

// const books = require('../../models/books')
// const { HttpError } = require('../../helpers')

// const addSchema = Joi.object({
//     title: Joi.string().required(),
//     author: Joi.string().required()
// })

// const getAll = async (req, res, next) => {
//     try {
//         const result = await books.getAll()
//         res.json(result)
//     } catch (error) {
//         next(error)
//     }
// }

// const getById = async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const result = await books.getById(id)
//         if (!result) {
//             throw HttpError(404, 'not found')
//         }
//         res.json(result)
//     } catch (error) {
//         next(error)
//     }
// }

// const addBook = async (req, res, next) => {
//     try {
//         const { error } = addSchema.validate(req.body)
//         if (error) {
//             throw HttpError(400, error.message)
//         }
//         const result = await books.add(req.body)

//         res.status(201).json(result)
//     } catch (error) {
//         next(error)
//     }
// }

// const updateById = async (req, res, next) => {
//     try {
//         const { error } = addSchema.validate(req.body)
//         if (error) {
//             throw HttpError(400, error.message)
//         }

//         const { id } = req.params

//         const result = await books.updateById(id, req.body)

//         if (!result) {
//             throw HttpError(404, 'not found')
//         }

//         res.json(result)

//     } catch (error) {
//         next(error)
//     }
// }

// const deleteById = async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const result = await books.deleteById(id)

//         if (!result) {
//             throw HttpError(404, 'not found')
//         }

//         res.status(204).send()
//         // res.json({ message: 'delete success' })
//     } catch (error) {
//         next(error)
//     }
// }

// module.exports = {
//     getAll,
//     getById,
//     addBook,
//     updateById,
//     deleteById
// }





const books = require('../models/books')
const { HttpError, ctrlWrapper } = require('../helpers')



const getAll = async (req, res) => {
        const result = await books.getAll()
        res.json(result)
}

const getById = async (req, res) => {
        const { id } = req.params

        const result = await books.getById(id)

        if (!result) {
            throw HttpError(404, 'not found')
        }

        res.json(result)
}

const addBook = async (req, res) => {
        const result = await books.addBook(req.body)

        res.status(201).json(result)
}

const updateById = async (req, res) => {
        const { id } = req.params

        const result = await books.updateById(id, req.body)

        if (!result) {
            throw HttpError(404, 'not found')
        }

        res.json(result)
}

const deleteById = async (req, res) => {
        const { id } = req.params

        const result = await books.deleteById(id)

        if (!result) {
            throw HttpError(404, 'not found')
        }

        res.status(204).send()

}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    addBook: ctrlWrapper(addBook),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById)
}