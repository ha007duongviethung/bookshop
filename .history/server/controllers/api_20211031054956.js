module.exports = class API {
    static async fetchAllBooks(req, res) {
        res.send("This is all books")
    }
}