import axios from "axios";
import NewsItem from "./NewsItem";
import usePromise from '../hooks/usePromise';

const NewsList = ({category}) => {

    const [loading,response,error]= usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b9c6ab758d05408da6c13dfe79f8affd
            `,);
    },[category]);

    if(!response){
        return null;
    }

    if(error){
        return (
            <div>
                <p>에러발생 !</p>
            </div>
        )
    }

    const { articles }= response.data;

    return(
            loading ? 
                <p>로딩중이에요</p>
             : (
                articles.map((article) =>
                 <NewsItem key={article.url} article={article} />
                )
            )
            
    )

}

export default NewsList;