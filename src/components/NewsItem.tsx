const NewsItem = ({ article }) => {
    const { title,author,url } = article;

    return(
            { article } && (
                <div className="flex border-b p-5 gap-x-5 justify-between">
                    <h2>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h2>
                    <p>
                         {author}
                    </p>  
                </div>
            )
    )
}
export default NewsItem;