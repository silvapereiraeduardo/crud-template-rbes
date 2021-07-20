const BASE_URL = 'http://localhost:3001';

const ApiService = (url = '', options = {}) => fetch(BASE_URL + url, options);

export default ApiService;
