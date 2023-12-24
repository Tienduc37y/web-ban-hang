import './style.css'
import Header from '../../component/Header/Header'
import { UseFetchAll } from '../../common/UseFetch'
import ListProduct from '../../component/ListItem/ListProduct'
import { useState } from 'react'
import { Select, Space } from 'antd';
export default function Product(){
    const {product,setProduct} = UseFetchAll(`${import.meta.env.VITE_BASE_URL}/api/categories`)
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    return (
        <>
            <Header></Header>
            <h1 style={{marginTop:100}}>Danh sách sản phẩm theo category</h1>
            <div className='container'>
                <Space wrap>
                    <Select 
                        defaultValue={"Category"}
                        style={{
                            width: 200,
                        }}
                        onChange={handleChange}
                        options={product?.map(item=>{
                            return {
                                value: item?.attributes?.slug,
                                label: item?.attributes?.slug
                            }
                        })}
                    />
                </Space>
            </div>
        </>
    )
}