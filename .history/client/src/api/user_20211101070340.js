const axios = require('axios')
const url = "http://localhost:305/api/user"

export default class BookAPI {
    static async login(data) {
        await axios.post(`${url}/login`, data)
        .then(
            res => {
                console.log(res)
                this.$router.push('/')
            }
        ).catch(err => {
            console.log(err)
        })
    }

    static async register(data) {
        const res = await axios.post(`${url}/register`, data);
        return res.data
    }
}