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

    static async addItemToCart(data) {
        await axios.post(url, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop'),
            },
            phone_number: data.phone_number,
            address: data.address
        })
        .then(
            res => {
                console.log(res)
                alert("Thêm địa chỉ thành công!!!")
            }
        ).catch(err => {
            console.log(err)
            alert("Thêm địa chỉ thất bại!!!")
        })
    }

    static async updateAddress(id, data) {
        await axios.patch(`${url}${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            },
            address: data.address,
            phone_number: data.phone_number
        })
        .then(
            res => {
                console.log(res)
                alert("Sửa địa chỉ thành công!!!")
            }
        ).catch(err => {
            console.log(err)
            alert("Sửa địa chỉ thành công!!!")
        })
    }
}