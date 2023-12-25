import './style.css'
import { UseFetch } from '../../common/UseFetch'
import { Row, Col, Pagination, Card} from 'antd'
import { Link } from 'react-router-dom';
const {Meta} = Card
export default function ListProductByCategory(props){
    const {product,setProduct,setPaging,paging} = UseFetch(`https://backoffice.nodemy.vn/api/products`,props.slugs)
    console.log(props.slugs)
    return (
        <div className='container'>
            <div className='nav-category'>
                <Link to={`/category?danhmuc=ban-phim`}>
                        <a href="" className='nhapnhayax'>Xem tất cả sản phẩm ...</a>
                </Link> 
            </div>
            <Row>
            {product?.map(item=>{
                const newPrice = new Intl.NumberFormat('vi-VN').format(item?.attributes?.price);
                const oldPrice = new Intl.NumberFormat('vi-VN').format(item?.attributes?.oldPrice);
                return (
                    <>
                        <Col span={6}>
                            <Link to={`/${item?.attributes?.slug}`}>
                                <Card
                                    key={item?.id}
                                    className='card-product'
                                    hoverable
                                    style={{
                                    width: 250,
                                    height:400,
                                    marginLeft:20
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