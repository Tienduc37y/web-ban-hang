export default function ListItem(){
    return (
        <><div className='banner center-center'>
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
      </div></>
    )
}