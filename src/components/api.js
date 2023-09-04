import axios from "axios";

const getArticles = (articlesReq) => {
    return axios.get(articlesReq)
    .then(({data})=>{
        return data.articles
    })
}

const getArticle = (articleReq) => {
return axios.get(articleReq)
.then(({data}) => {
return data.article
})
}
export {getArticles, getArticle}