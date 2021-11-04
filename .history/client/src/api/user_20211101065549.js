const axios = require('axios')
const url = "http://localhost:305/api/user"

export default class BookAPI {
    static async login(data) {
        const res = await axios.post(`${url}/login`, data);
        if(res) {
            console.log("Success")
        }
    }

    static async register(data) {
        const res = await axios.post(`${url}/register`, data);
        return res.data
    }
}