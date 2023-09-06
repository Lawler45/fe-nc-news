const HomePageSortBy = ({setItemReq}) => {

    const handleClick = (sortBy) => {
        setItemReq(`https://lawler-news.onrender.com/api/articles${sortBy}`)     
    }

    return (
        <form className="filter">
            <input name="category" type="radio" defaultChecked onClick={() => {handleClick(``)}}/>All           
            <input name="category" type="radio" onClick={() => {handleClick(`?sort_by=date`)}}/>Date
            <input name="category" type="radio" onClick={() => {handleClick(`?sort_by=comment_count`)}}/>Comment count
            <input name="category" type="radio" onClick={() => {handleClick(`?sort_by=votes`)}}/>Votes
        </form>
    )
}

const TopicsSortBy = ({setItemReq, topic}) => {

    const handleClick = (sortBy) => {
        setItemReq(`https://lawler-news.onrender.com/api/articles/${topic}${sortBy}`)     
    }

    return (
        <form className="filter">
            <input name="category" type="radio" defaultChecked onClick={() => {handleClick(``)}}/>All           
            <input name="category" type="radio" onClick={() => {handleClick(`&sort_by=date`)}}/>Date
            <input name="category" type="radio" onClick={() => {handleClick(`&sort_by=comment_count`)}}/>Comment count
            <input name="category" type="radio" onClick={() => {handleClick(`&sort_by=votes`)}}/>Votes
        </form>
    )
}

export {HomePageSortBy, TopicsSortBy}