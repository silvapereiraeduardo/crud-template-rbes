import ApiService from "./ApiService";

const BASE_URL = '/crud';

const CrudService = (url = '', options = {}) => ApiService(BASE_URL + url, options);

export default CrudService;
