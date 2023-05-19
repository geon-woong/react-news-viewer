import { useState,useCallback } from "react";
import Categories from "../components/Categories";
import { useParams } from "react-router";
import NewsList from "../components/NewsList"

const NewsPage = () => {
    const params = useParams();
    const category = params.category || 'all'
    const onSelect = useCallback(category=>setCategory(category),[])
    return(
        <div>
            <Categories  category={category} onSelect={onSelect} />
            <NewsList category={category} /> 
        </div>
    )
}

export default NewsPage;