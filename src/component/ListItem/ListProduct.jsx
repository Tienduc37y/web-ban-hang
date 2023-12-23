import { UseFetch } from '../../common/UseFetch'
import { Row, Col, Pagination, Card} from 'antd'
import { Link } from 'react-router-dom';
import "./style.css"
const {Meta} = Card
function ListProduct(){
    const {product,setProduct,paging,setPaging} = UseFetch(`https://backoffice.nodemy.vn/api/products`)

    return (
    <div className='product-items'>
        <div className='nav-product'>
            <h3>DANH MỤC SẢN PHẨM</h3>
            <Link to={`/products`}>
                <a href="" className='nhapnhayax'>Xem tất cả sản phẩm ...</a>
            </Link>  

        </div>
        <Row>
            {product?.map(item=>{
                const newPrice = new Intl.NumberFormat('vi-VN').format(item?.attributes?.price);
                const oldPrice = new Intl.NumberFormat('vi-VN').format(item?.attributes?.oldPrice);
                return (
                    <>
                        <Col span={6} key={item?.id}>
                            <Link to={`/${item?.attributes?.slug}`}>
                                <Card
                                    className='card-product'
                                    hoverable
                                    style={{
                                    width: 250,
                                    }}
                                    cover={<img alt="example" src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data[0]?.attributes?.url}`} />}
                                >
                                    <Meta title={
                                        <>
                                            <h2 style={{
                                                textAlign:"center",
                                                color:"red"
                                            }}>{newPrice} ₫</h2>
                                            <h5 style={{
                                                textDecoration:"line-through",
                                                textAlign:"center"
                                            }}>{oldPrice} ₫</h5>
                                        </>
                                    }
                                    >
                                    </Meta>
                                    <h5>Chip : {item?.attributes?.cpu?.slice(0,20)}</h5>
                                    <h5>Ram : {item?.attributes?.ram?.slice(0,20)}</h5>
                                </Card>
                            </Link>
                        </Col>
                    </>
                )
            })}
        </Row>
        <Pagination total={paging.total} current={paging.page} pageSize={paging.pageSize} onChange={(page)=>{
            setPaging({...paging,page:page})
        }} className='pagination'/>;
    </div>
  )
}

export default ListProduct