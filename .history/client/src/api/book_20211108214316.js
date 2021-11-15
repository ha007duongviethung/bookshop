const axios = require('axios')
const url = "http://localhost:305/api/book/"

export default class BookAPI {
    static async getAllBooks() {
        const res = await axios.get(url);
        return res.data.books
    }

    static async getBookByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data.book
    }

    static async addBook(data) {
        await axios.post(url, data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async updateBook(id, data) {
        await axios.patch(`${url}${id}`, data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async deleteBook(id) {
        await axios.delete(`${url}${id}`)
        .then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async getBooksForMeHome() {
        let booksForMe = []
        const res = await axios.get(url)
        const data = res.data.books

        data.forEach(book => {
            if(book.type == 'Công nghệ - Kinh tế' && booksForMe.length < 6)
                booksForMe.push(book)
        })
        
        return booksForMe
    }

    static async getBooksTradingHome() {
        let booksTrading = []
        const res = await axios.get(url)
        const data = res.data.books

        data.forEach(book => {
            if(book.type == 'Phát triển bản thân' && booksTrading.length < 6)
                booksTrading.push(book)
        })
        
        return booksTrading
    }

    static async getBooksBySlug(slug) {
        const booksNew = await axios.get(`${url}${slug}`)
        
        return booksNew.data.books
    }

    static async getBooksCombo() {
        let booksCombo = await axios.get(`${url}combo`)
        
        return booksCombo.data.books
    }

    static async getBooksByType(type, title) {
        let booksType = []
        const res = await axios.get(url)
        const data = res.data.books

        if(type == 'type') {
            data.forEach(book => {
                if(book.type == title)
                    booksType.push(book)
            })
        }
        
        return booksType
    }
}