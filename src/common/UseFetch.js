import { useEffect, useState } from "react";
import axios from "axios";
export function UseFetch(url,param){
    const [product,setProduct] = useState()
    const [paging,setPaging] = useState({
        page:1,
        pageSize:4,
        total:10
    })
    url += `?populate=*&pagination[pageSize]=${paging.pageSize}&pagination[page]=${paging.page}&${param}`
    useEffect(()=>{
        axios({
            url: url,
        })
        .then((res)=>{
            setProduct(res.data.data)
            setPaging({...paging,total:res.data?.meta?.pagination?.total})
        })
    },[paging.page,paging.pageSize])
    return {
        product,
        setProduct,
        paging,
        setPaging
    }
}
export function UseFetchAll(url){
    const [product,setProduct] = useState()
    url += `?populate=*` 
    useEffect(()=>{
        axios({
            url: url,
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