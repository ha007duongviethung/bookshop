module.exports = class API {
    static async fetchAllBooks(req, res) {
        res.send("all books")
    }

    static async fetchBookByID(req, res) {
        res.send("books id = ?")
    }

    static async addBook(req, res) {
        res.send("add book")
    }

    static async updateBook(req, res) {
        res.send("update book")
    }

    static async deleteBook(req, res) {
        res.send("delete book")
    }
}