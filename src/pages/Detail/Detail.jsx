import { useParams } from "react-router-dom"
import { GetProductToSlug } from "../../common/UseFetch"
import './style.css'
import { useState } from "react"
export default function Detail(){
    const params = useParams()
    const {data,setData} = GetProductToSlug(params.slug)
    const [order,setOrder] = useState(1)
    const newPrice = new Intl.NumberFormat('vi-VN').format(data?.attributes?.price);
    const oldPrice = new Intl.NumberFormat('vi-VN').format(data?.attributes?.oldPrice);
    const img = "https://backoffice.nodemy.vn" + data?.attributes?.image?.data[0]?.attributes?.url
    const imgsmall = "https://backoffice.nodemy.vn" + data?.attributes?.image?.data[0]?.attributes?.formats?.thumbnail?.url
    var sale = 100 - ( data?.attributes?.price/ data?.attributes?.oldPrice)*100
    return (
        <>
            <div className="page-product">
                <div className="container">
                    <div className="product-info between-between">
                        <div className="product-image">
                            <div className="big-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="small-imgs between-between">
                                <div className="img-item">
                                    <img src={imgsmall} alt="" />
                                </div>
                                <div className="img-item">
                                    <img src={imgsmall} alt="" />
                                </div>
                                <div className="img-item">
                                    <img src={imgsmall} alt="" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="product-detail">
                            <div className="product-brand">
                                <h2>{data?.attributes?.name}</h2>
                                <span>Thương Hiệu: {data?.attributes?.idBrand?.data?.attributes?.name}</span>
                                <span>Danh mục: {data?.attributes?.idCategories?.data[0]?.attributes?.name}</span>
                            </div>
                            <div className="product-price">
                                <h1>{newPrice} ₫</h1>
                                <h4>{oldPrice} ₫</h4>
                                <h3>- {sale.toFixed(0)}%</h3>
                            </div>
                            <div className="product-quantity between-between">
                                    <span>Số Lượng</span>
                                    <div className="value-order between-between">
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
                                    <span>{data?.attributes?.quantityAvailable} sản phẩm có sẵn</span>
                            </div>
                            <div className="product-buy between-between">
                                <button type="button">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                                <button type="button">
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
                                <td>CPU : {data?.attributes?.cpu}</td>
                            </tr>
                            <tr>
                                <td>RAM : {data?.attributes?.ram}</td>
                            </tr>
                            <tr>
                                <td>Số lượng : {data?.attributes?.quantityAvailable}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="description">
                        <h2>MÔ TẢ SẢN PHẨM</h2>
                        <img src={img} alt="" />
                        <p className="paragraph">{data?.attributes?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}