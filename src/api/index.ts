import axios from 'axios';

const api = axios.create({
    baseURL:'https://shipstocksentry.onrender.com'

})

export default api
