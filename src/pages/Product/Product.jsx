import './style.css'
import Header from '../../component/Header/Header'
import { UseFetch } from '../../common/UseFetch'
import ListProduct from '../../component/ListItem/ListProduct'
import { useState } from 'react'
export default function Product(){
    const {product,setProduct} = UseFetch(`${import.meta.env.VITE_BASE_URL}/api/products`)
    const [brand,setBrand] = useState()
    var brandProduct = product?.map(item=>{
        return item?.attributes?.idBrand?.data?.attributes?.name
    })
    const newArr = [...new Set(brandProduct)]
    function handleChange(e){
        console.log(e.target.value)
        setBrand(e.target.value)
    }
    console.log(brand)
    return (
        <>
            <Header></Header>
            <h1 style={{marginTop:100}}>Danh sách sản phẩm theo category</h1>
            <div className='container'>
                <div className='product-left'>
                    {newArr?.map(item=>{
                        return (
                            <>
                                <input type="radio" value={item} onChange={handleChange} name='brand'/>
                                <label>{item}</label>
                            </>
                        )
                    })}
                </div>
                <div className='product-right'>
                    <ListProduct></ListProduct>
                </div>
            </div>
        </>
    )
}