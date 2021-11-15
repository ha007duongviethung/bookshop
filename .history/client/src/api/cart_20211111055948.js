const axios = require('axios')
const url = "http://localhost:305/api/cart/"

export default class CartAPI {
    static async fetchAllItem() {
        const response = await axios.get(url, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            }
        })

        return response.data.carts
    }

    static async fetchItemById(bookId) {
        const response = await axios.get(`${url}${bookId}`, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop'),
                bookId
            }
        })

        return response.data.cart
    }

    static async addItemToCart(data) {
        console.log(data)
        await axios.post(url, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop'),
            },
            bookId: data.book,
            quantity: data.quantity
        })
        .then(
            res => {
                console.log(res)
                alert("Thêm sản phẩm thành công!!!")
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async updateItem(id, data) {
        await axios.patch(`${url}${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            },
            bookId: data.book,
            quantity: data.quantity
        })
        .then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async deleteItemInCart(id) {
        await axios.delete(`${url}${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            }
        })
        .then(
            res => {
                console.log(res)
                alert('Xoá sản phẩm thành công!!')
            }
        ).catch(err => {
            console.log(err)
        })
    }
}