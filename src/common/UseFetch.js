import { useEffect, useState } from "react";
import axios from "axios";
export function UseFetch(){
    const [product,setProduct] = useState()
    useEffect(()=>{
        axios({
            url:`https://backoffice.nodemy.vn/api/products?populate=*`,
        })
        .then((res)=>{
            setProduct(res.data.data)
        })
    },[])
    return {
        product,
        setProduct,
    }
}
export function GetProductToSlug(slug){
    const [data,setData] = useState()
    useEffect(()=>{
        axios({
            url:`https://backoffice.nodemy.vn/api/products/${slug}?populate=*`,
        })
        .then((res)=>{
            setData(res.data.data)
        })
    },[])
    return {
        data,
        setData
    }
}