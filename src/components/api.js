import axios from "axios";

const getArticles = (articleReq) => {
    return axios.get(articleReq)
    .then(({data})=>{
        return data.articles
    })
}
export {getArticles}