const axios = require('axios')
const url = "/api/book/"

export default class BookAPI {
    static async getAllBooks() {
        const res = await axios.get(url);
        return res.data
    }

    static async getBookByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }

    static async addBook(book) {
        const res = await axios.post(url, book);
        return res.data
    }

    static async updateBook(id, book) {
        const res = await axios.patch(`${url}/${id}`, book);
        return res.data
    }

    static async deleteBook(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data
    }
}