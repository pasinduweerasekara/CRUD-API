const Product = require('../models/product.model')

 const  getProducts = async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
 const getSingleProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const createAProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

 const updateAProduct =async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        const updatedproduct = await Product.findById(id)
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

 const deleteAProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id,req.body)
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {
    createAProduct,
    getProducts,
    getSingleProduct,
    updateAProduct,
    deleteAProduct
}