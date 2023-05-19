import { useState,useEffect } from "react"

export default function usePromise(promiseCreator, deps){
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const process = async() => {
            setLoading(true);
            console.log('데이터로딩중')
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
            console.log('성공적')
        };
        process();

    },deps);

    return [loading,resolved,error];
}

