import { useEffect, useState } from "react";
import axios from "axios";
export function UseFetch(){
    const [product,setProduct] = useState()
    const [paging,setPaging] = useState({
        page:1,
        pageSize:20
    })
    useEffect(()=>{
        axios({
            url:`https://backoffice.nodemy.vn/api/products?populate=*&pagination[pageSize]=${paging.pageSize}&pagination[page]=${paging.page}`,
        })
        .then((res)=>{
            console.log(res.data.data)
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