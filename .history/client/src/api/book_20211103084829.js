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

    static async getBooksForMe() {
        // let booksForMe = []
        let data = this.getAllBooks()
        const sendEmail = userEmail => {
            return new Promise(async (resolve) => {
                setTimeout(() => {
                resolve(`Email Sent to ${userEmail}`)
                }, 3000)
            })
        }
        const status = await Promise.all(data.map(item => sendEmail(item)))

        console.log(status)

        // data.forEach(book => {
        //     if(book.type == 'Phát triển bản thân')
        //         booksForMe.push(book)
        // })
        // console.log(booksForMe)
    }
}