const Address = require('../models/address')
const argon2 = require('argon2')

module.exports = class AddressAPI {
    static async addAddress(req, res) {
        const infoAddress = {}
        infoAddress.user = req.userId
        infoAddress.phone_number = req.body.phone_number
        infoAddress.address = req.body.address

        try {
            await Address.create(infoAddress)
            res.status(200).json({ success: true, message: 'Information address add successfully!' })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async getAddress(req, res) {
        const user = req.userId
        try {
            const data = await Address.find({user})
            res.status(200).json({ success: true, data })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async updateAddress(req, res) {
        const id = req.params.id

        const newAddress = {}
        newAddress.user = req.userId
        newAddress.phone_number = req.body.phone_number
        newAddress.address = req.body.address

        try {
            await Address.findByIdAndUpdate(id, newAddress)
            res.status(200).json({ success: true, message: 'Address update successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }
}