const axios = require('axios')
const url = "http://localhost:305/api/user/"

export default class BookAPI {
    static async login(user) {
        const res = await axios.post(`${url}/login`, user);
        return res.data
    }

    static async register(user) {
        const res = await axios.post(`${url}/login`, user);
        return res.data
    }
}