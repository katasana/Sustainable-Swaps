import http from "../http-common"

const getAll = () => {
    return http.get("/products")
};

const findByKeywords = keywords => {
    return http.get(`/products?keywords=${keywords}`)
};

export default {
    getAll,
    findByKeywords
};