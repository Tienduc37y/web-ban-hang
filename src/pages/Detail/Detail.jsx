import { useParams, Link, useNavigate} from "react-router-dom"
import './style.css'
import { useState } from "react"
import Header from "../../component/Header/Header"
import { UseFetch } from "../../common/UseFetch"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
export default function Detail(){
    const param = useParams()
    const [order,setOrder] = useState(1)
    const nav = useNavigate()
    const {product,setProduct} = UseFetch(`${import.meta.env.VITE_BASE_URL}/api/products/${param.slug}`," ")
    const newPrice = new Intl.NumberFormat('vi-VN').format(product?.attributes?.price);
    const oldPrice = new Intl.NumberFormat('vi-VN').format(product?.attributes?.oldPrice);
    var sale = 100 - ( product?.attributes?.price/ product?.attributes?.oldPrice)*100
    const img = product?.attributes?.image?.data?.map(item=>{
        return {
            original:'https://backoffice.nodemy.vn' + item?.attributes?.url,
            thumbnail:'https://backoffice.nodemy.vn' + item?.attributes?.url,
        }
    })
    console.log(product)
    return (
        <div className="page-detail">
            <Header></Header>
            <div className="page-product">
                <div className="container">
                    <div className="product-info between-between">
                        <div className="gallery">
                            {img ? <ImageGallery items={img} showPlayButton={false} showFullscreenButton={false} autoPlay={true}/> : <h1>Không có banner</h1>}
                        </div>
                        <div className="product-detail">
                            <div className="product-brand">
                                <h2>{product?.attributes?.name}</h2>
                                <span>Thương Hiệu: {product?.attributes?.idBrand?.data?.attributes?.name}</span>
                                <span>Danh mục: {product?.attributes?.idCategories?.data?.map(item=>{
                                        return <span key={item?.id}>{item?.attributes?.name} </span>
                                    })}
                                </span>
                            </div>
                            <div className="product-price">
                                <h1>{newPrice} ₫</h1>
                                <h4>{oldPrice} ₫</h4>
                                <h3>- {sale.toFixed(0)}%</h3>
                            </div>
                            <div className="product-quantity">
                                    <span>Số Lượng</span>
                                    <div className="value-order">
                                        <button onClick={()=>{
                                            if(order !== 1){
                                                setOrder(order-1)
                                            }
                                        }}>-</button>
                                        <span>{order}</span>
                                        <button onClick={()=>{
                                            setOrder(order+1)
                                        }}>+</button>
                                    </div>
                                    <span>{product?.attributes?.quantityAvailable} sản phẩm có sẵn</span>
                            </div>
                            <div className="product-buy between-between">
                                <button type="button" onClick={()=>{
                                    nav("/cart")
                                }}>
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                                <button type="button" onClick={()=>{
                                    nav("/cart")
                                }}>
                                    <span>Mua hàng</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="details">
                        <h2>CHI TIẾT SẢN PHẨM</h2>
                        <table>
                            <tr>
                                <td>CPU : {product?.attributes?.cpu}</td>
                            </tr>
                            <tr>
                                <td>RAM : {product?.attributes?.ram}</td>
                            </tr>
                            <tr>
                                <td>Số lượng : {product?.attributes?.quantityAvailable}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="description">
                        <h2>MÔ TẢ SẢN PHẨM</h2>
                        {product?.attributes?.image?.data?.map(item=>{
                            return (
                                <img src={`${import.meta.env.VITE_BASE_URL}${item?.attributes?.url}`} alt="" />
                            )
                        })        
                        }
                        <p className="paragraph">{product?.attributes?.description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}