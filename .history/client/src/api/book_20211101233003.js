const axios = require('axios')
const url = "http://localhost:305/api/book/"

export default class BookAPI {
    static async getAllBooks() {
        const res = await axios.get(url);
        return res.data.books
    }

    static async getBookByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }

    static async addBook(data) {
        await axios.post(url, data)
        .then(
            res => {
                console.log(res)
                localStorage.setItem('bookshop', res.data.accessToken)
            }
        ).catch(err => {
            console.log(err)
        })
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