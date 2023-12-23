import './style.css'
import { UseFetch } from '../../common/UseFetch'
import { Row, Col, Pagination, Card} from 'antd'
import { Link } from 'react-router-dom';
const {Meta} = Card
export default function ListProductByCategory(props){
    const {product,setProduct} = UseFetch(`https://backoffice.nodemy.vn/api/products` + `filters[idCategories][slug]=${props.slugs}`)
    return (
        <>
        {
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
        }
        </>
    )
}