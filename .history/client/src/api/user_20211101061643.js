const axios = require('axios')
const url = "http://localhost:305/api/user/"

export default class BookAPI {
    static async login() {
        const res = await axios.get(url);
        return res.data.books
    }

    static async register(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }
}