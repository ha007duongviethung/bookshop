const Cart = require('../models/carts')

module.exports = class CartAPI {
    // @router GET api/book/
    // @desc GET all books
    // @access public
    static async fetchAllItem(req, res) {
        const user = req.userId
        try {
            const carts = await Cart.find({user})
            res.status(200).json({ success: true, carts })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async fetchItemById(req, res) {
        const user = req.userId
        const book = req.header('bookId')
        try {
            const cart = await Cart.findOne({book, user})
            res.status(200).json({ success: true, cart })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async addItemToCart(req, res) {
        const cart = {}
        cart.book = req.body.bookId
        cart.user = req.userId
        cart.quantity = req.body.quantity

        try {
            await Cart.create(cart)
            res.status(200).json({ success: true, message: 'Item add to cart successfully!' })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async updateItem(req, res) {
        const id = req.params.id

        const newItem = {}
        newItem.user = req.userId
        newItem.book = req.body.bookId
        newItem.quantity = req.body.quantity
        console.log(newItem)

        try {
            await Cart.findByIdAndUpdate(id, newItem)
            res.status(200).json({ success: true, message: 'Item update successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }

    static async deleteItemInCart(req, res) {
        const id = req.params.id
        try {
            const result = await Cart.findByIdAndDelete(id)
            res.status(200).json({ success: true, message: 'Item deleted successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }
}