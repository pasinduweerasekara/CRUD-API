const express = require('express')
const router = express.Router()
const { getProducts, getSingleProduct, updateAProduct, deleteAProduct, createAProduct } = require('../controllers/product.controller')

router.post('/',createAProduct)
router.get('/',getProducts)
router.get('/:id',getSingleProduct)
router.put('/:id',updateAProduct)
router.delete('/:id',deleteAProduct)

module.exports = router