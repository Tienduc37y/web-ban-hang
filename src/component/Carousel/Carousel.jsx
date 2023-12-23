import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { UseFetch } from "../../common/UseFetch";
export default function Carousel(props){
    const {product,setProduct,paging,setPaging} = UseFetch(`${import.meta.env.VITE_BASE_URL}/api/${props.params}`)
    const img = product?.attributes?.leftBanner?.data?.map(item=>{
      return {
        original:'https://backoffice.nodemy.vn' + item?.attributes?.url,
        thumbnail:'https://backoffice.nodemy.vn' + item?.attributes?.url,
      }
    })
  return (
    <>
        {img ? <ImageGallery items={img} showPlayButton={false} showFullscreenButton={false} showThumbnails={props.thumbnail} autoPlay={true}/> : <h1>Không có banner</h1>}
    </>
  )
}