import { useEffect, useState } from "react"
import { getMovies } from "../API/ProductAPI";
export const useData = (func)=>{
    const [movies,setMovies] =useState(null);

useEffect((id)=>{
    const fetchMovie =async ()=>{
        let response = await func();
        setMovies(response.data)
        }
        fetchMovie()
},[]);
return [movies,setMovies]
}
