import "./App.css"
import Header from './component/Header/Header'
import Banner from "./component/Banner/Banner"
import ListProduct from "./component/ListItem/ListProduct"
import ListProductByCategory from "./component/ListProductByCategory/ListProductByCategory"
import { UseFetch } from "./common/UseFetch"
function App() {
  const {product,setProduct} = UseFetch('https://backoffice.nodemy.vn/api/products'," ")
  const slug = product?.map(item=>{
    return item?.attributes?.idCategories?.data[0]?.attributes?.slug
  })
  const category = [...new Set(slug)]
  console.log(category)
  return (
    <>
      <Header></Header>
      <Banner></Banner>   
      <ListProduct></ListProduct>
      {category?.map(item=>{
        return (
          <ListProductByCategory slugs={item}></ListProductByCategory>
        )
      })}
      {/* <ListProductByCategory slugs={`laptop-gaming`}></ListProductByCategory>
      <ListProductByCategory slugs={`ban-phim`}></ListProductByCategory> */}

    </>
  )
}

export default App
