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

    static async getBooksNewHome() {
        let booksNew = []
        const res = await axios.get(url)
        const data = res.data.books

        data.reverse().forEach(book => {
            booksNew.push(book)
        })
        
        return booksNew
    }

    static async getBooksByType(type, title) {
        const booksNew = await axios.get(`${url}${type}`, title)
        
        return booksNew.data.books
    }

    static async getBookComboHome() {
        let booksCombo = []
        const res = await axios.get(url)
        const data = res.data.books

        data.forEach(book => {
            if(book.book_name.search('Combo') != -1 && booksCombo.length < 6)
                booksCombo.push(book)
        })
        
        return booksCombo
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