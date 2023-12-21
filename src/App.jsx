import { useState } from 'react'
import { UseFetch } from './common/UseFetch'
import "./App.css"
import { Link } from 'react-router-dom'
import Header from './component/Header/Header'
function App() {
  const {product,setProduct,paging,setPaging} = UseFetch()
  return (
    <>
      <Header></Header>
      <div className='product'>
        {product?.map(item=>{
          const url = `https://backoffice.nodemy.vn` + item?.attributes?.image?.data[0]?.attributes?.url
          return (
            <Link to={`/${item?.attributes?.slug}`} key={item?.id}>
              <div className='product-item'>
                <h5 className='product-name'>{item?.attributes?.name}</h5>
                <img src={url} alt="" style={{
                  width:200,
                  height:200
                }}/>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default App
