import { useState } from 'react'
import { UseFetch } from './common/UseFetch'
import "./App.css"
import { Link } from 'react-router-dom'
import Header from './component/Header/Header'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
function App() {
  const {product,setProduct,paging,setPaging} = UseFetch(`${import.meta.env.VITE_BASE_URL}/api/homepage`)
  const img = product?.attributes?.leftBanner?.data.map(item=>{
    return {
      original:'https://backoffice.nodemy.vn' + item?.attributes?.url,
      thumbnail:'https://backoffice.nodemy.vn' + item?.attributes?.url,
    }
  })
  return (
    <>
      <Header></Header>
      <div className='container'>
        <div className='banner center-center'>
          <div className='banner-left'>
            <div className='banner-lt'>
              {img ? <ImageGallery items={img} showPlayButton={false} showFullscreenButton={false}/> : <h1>Không có banner</h1>}
            </div>
            <div className='banner-lb center-center'>
              <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.rightBanner?.data[0]?.attributes?.url}`} alt="" />
              <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.rightBanner?.data[1]?.attributes?.url}`} alt="" />
            </div>
          </div>
          <div className='banner-right'>
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.bottomBanner?.data[2]?.attributes?.url}`} alt="" />
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.bottomBanner?.data[1]?.attributes?.url}`} alt="" />
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.subBanner?.data[2]?.attributes?.url}`} alt="" />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
