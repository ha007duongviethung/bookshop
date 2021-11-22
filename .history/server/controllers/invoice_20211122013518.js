const Invoice = require('../models/invoices')

module.exports = class InvoiceAPI {
    // static async fetchAllItem(req, res) {
    //     const user = req.userId
    //     try {
    //         const carts = await Cart.find({user})
    //         res.status(200).json({ success: true, carts })
    //     } catch (err) {
    //         res.status(500).json({ success: false, message: err.message })
    //     }
    // }

    // static async fetchItemById(req, res) {
    //     const user = req.userId
    //     const book = req.header('bookId')
    //     try {
    //         const cart = await Cart.findOne({book, user})
    //         res.status(200).json({ success: true, cart })
    //     } catch (err) {
    //         res.status(500).json({ success: false, message: err.message })
    //     }
    // }

    static async createInvoice(req, res) {
        const invoice = {}
        invoice.address = req.body.addressId
        invoice.subtotal = req.body.subtotal
        invoice.ship = req.body.ship
        invoice.total = req.body.total
        invoice.status = req.body.status
        invoice.notes = req.body.notes

        try {
            await Invoice.create(invoice)
            res.status(200).json({ success: true, message: 'Create invoice successfully!' })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    // static async updateItem(req, res) {
    //     const id = req.params.id

    //     const newItem = {}
    //     newItem.user = req.userId
    //     newItem.book = req.body.bookId
    //     newItem.quantity = req.body.quantity
    //     console.log(newItem)

    //     try {
    //         await Cart.findByIdAndUpdate(id, newItem)
    //         res.status(200).json({ success: true, message: 'Item update successfully!' })
    //     } catch (err) {
    //         res.status(404).json({ success: false, message: err.message })
    //     }
    // }

    // static async deleteItemInCart(req, res) {
    //     const id = req.params.id
    //     try {
    //         const result = await Cart.findByIdAndDelete(id)
    //         res.status(200).json({ success: true, message: 'Item deleted successfully!' })
    //     } catch (err) {
    //         res.status(404).json({ success: false, message: err.message })
    //     }
    // }
}