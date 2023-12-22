import { UseFetch } from '../../common/UseFetch'
import { Row, Col, Pagination} from 'antd'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import "./style.css"
const {Meta} = Card
function ListProductByCategory(){
    const {product,setProduct,paging,setPaging} = UseFetch('https://backoffice.nodemy.vn/api/products')
    const newPrice = new Intl.NumberFormat('vi-VN').format(product?.attributes?.price);
    return (
    <div className='product-items'>
        <Row>
            {product?.map(item=>{
                const newPrice = new Intl.NumberFormat('vi-VN').format(item?.attributes?.price);
                return (
                    <>
                        <Col span={6} key={item?.id}>
                            <Link to={`/${item?.attributes?.slug}`}>
                                <Card
                                    hoverable
                                    style={{
                                    width: 250,
                                    }}
                                    cover={<img alt="example" src={`https://backoffice.nodemy.vn${item?.attributes?.image?.data[0]?.attributes?.url}`} />}
                                >
                                    <Meta title={<h2 style={{
                                        textAlign:"center",
                                        color:"red"
                                    }}>{newPrice} ₫</h2>}
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

export default ListProductByCategory