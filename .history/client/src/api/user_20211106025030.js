const axios = require('axios')
const url = "http://localhost:305/api/user"

export default class BookAPI {
    static async login(data) {
        const response = await axios.post(`${url}/login`, data)
        return response.data
    }

    static async register(data) {
        await axios.post(`${url}/register`, data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async rememberUser() {
        const response = await axios.get('user', {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('bookshop')
            }
        })

        console.log(response)
    }
}