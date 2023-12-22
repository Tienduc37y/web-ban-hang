
import "./style.css"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { UseFetch } from "../../common/UseFetch";
function Banner() {
  const {product,setProduct,paging,setPaging} = UseFetch(`${import.meta.env.VITE_BASE_URL}/api/homepage`)
  const img = product?.attributes?.leftBanner?.data.map(item=>{
    return {
      original:'https://backoffice.nodemy.vn' + item?.attributes?.url,
      thumbnail:'https://backoffice.nodemy.vn' + item?.attributes?.url,
    }
  })
  return (
    <>      
      <div className='banner-lc'>
        <img src="src\assets\Top 100 hình ảnh và nền mèo thần tài và các vị thần ngộ nghĩnh độc đáo (1).jfif" alt="" />
      </div>
      <div className='banner-rc'>
        <img src="src\assets\Top 100 hình ảnh và nền mèo thần tài và các vị thần ngộ nghĩnh độc đáo.jfif" alt="" />
      </div>
      <div className='banner'>
        <div className='banner-left'>
          <div className='banner-lt'>
            {img ? <ImageGallery items={img} showPlayButton={false} showFullscreenButton={false} showThumbnails={false}/> : <h1>Không có banner</h1>}
          </div>
          <div className='banner-lb'>
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.subBanner?.data[0]?.attributes?.url}`} alt="" />
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.subBanner?.data[0]?.attributes?.url}`} alt="" />
          </div>
        </div>
        <div className='banner-right'>
          <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.bottomBanner?.data[2]?.attributes?.url}`} alt="" />
            <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.bottomBanner?.data[1]?.attributes?.url}`} alt="" />
          <img src={`${import.meta.env.VITE_BASE_URL}${product?.attributes?.subBanner?.data[0]?.attributes?.url}`} alt="" />
        </div>
      </div>    
    </>
  )
}

export default Banner
