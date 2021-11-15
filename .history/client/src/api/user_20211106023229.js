const axios = require('axios')
const url = "http://localhost:305/api/user"

export default class BookAPI {
    static async login(data) {
        return await axios.post(`${url}/login`, data)
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
}