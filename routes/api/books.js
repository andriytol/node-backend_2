// const express = require('express')
// const Joi = require('joi')

// const books = require('../../models/books')
// const { HttpError } = require('../../helpers')

// const router = express.Router()

// const addSchema = Joi.object({
//     title: Joi.string().required(),
//     author: Joi.string().required()
// })

// router.get('/', async (req, res, next) => {
//     try {
//         const result = await books.getAll()
//         res.json(result)
//     } catch (error) {
//         // res.status(500).json({ message: 'Server error' })
//         next(error)
//     }
// })

// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const result = await books.getById(id)
//         if (!result) {
//             // res.status(404).json({ message: 'Not found' })

//             // const error = new Error('Not found')
//             // error.status = 404
//             // throw error

//             throw HttpError(404, 'Not Found')
//         }
//         res.json(result)
//     } catch (error) {
//         // res.status(500).json({ message: 'Server error' })

//         // const { status = 500, message = 'Server error' } = error
//         // res.status(status).json({ message })

//         next(error)
//     }
// })

// router.post('/', async (req, res, next) => {
//     try {
//         const { error } = addSchema.validate(req.body)
//         if(error) {
//             throw HttpError(400, error.message)
//         }

//         const result = await books.add(req.body)
//         res.status(201).json(result)
//     } catch (error) {
//         next(error)
//     }
// })

// router.put('/:id', async (req, res, next) => {
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
// })

// router.delete('/:id', async (req, res, next) => {
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
// })

// module.exports = router






// const express = require('express')

// const ctrl = require('../../controllers/books')

// const router = express.Router()




// router.get('/', ctrl.getAll)

// router.get('/:id', ctrl.getById)

// router.post('/', ctrl.addBook)

// router.put('/:id', ctrl.updateById)

// router.delete('/:id', ctrl.deleteById)

// module.exports = router







const express = require('express')

const ctrl = require('../../controllers/books')
const { validateBody } = require('../../middlewares')
const schemas = require('../../schemas/books')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validateBody(schemas.addSchema), ctrl.addBook)

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateById)

router.delete('/:id', ctrl.deleteById)

module.exports = router



