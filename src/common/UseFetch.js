import { useEffect, useState } from "react";
import axios from "axios";
export function UseFetch(url,query){
    const [product,setProduct] = useState()
    const [paging,setPaging] = useState({
        page:1,
        pageSize:5,
        total:10
    })
    url += `?populate=*&pagination[pageSize]=${paging.pageSize}&pagination[page]=${paging.page}&${product?.attribute?.slug}` 
    useEffect(()=>{
        axios({
            url: url,
        })
        .then((res)=>{
            setProduct(res.data.data)
        })
    },[paging.page,paging.pageSize])
    return {
        product,
        setProduct,
        paging,
        setPaging
    }
}