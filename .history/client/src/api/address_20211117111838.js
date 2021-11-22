const axios = require('axios')
const url = "http://localhost:305/api/address/"

export default class AddressAPI {
    static async getAddress() {
        const response = await axios.get(url, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            }
        })

        return response.data
    }

    // static async addItemToCart(data) {
    //     console.log(data)
    //     await axios.post(url, {
    //         headers: { 
    //             Authorization: 'Bearer ' + localStorage.getItem('bookshop'),
    //         },
    //         bookId: data.book,
    //         quantity: data.quantity
    //     })
    //     .then(
    //         res => {
    //             console.log(res)
    //             alert("Thêm sản phẩm thành công!!!")
    //         }
    //     ).catch(err => {
    //         console.log(err)
    //     })
    // }

    // static async updateItem(id, data) {
    //     await axios.patch(`${url}${id}`, {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('bookshop')
    //         },
    //         bookId: data.book,
    //         quantity: data.quantity
    //     })
    //     .then(
    //         res => {
    //             console.log(res)
    //         }
    //     ).catch(err => {
    //         console.log(err)
    //     })
    // }
}