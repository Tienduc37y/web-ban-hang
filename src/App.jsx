import "./App.css"
import Header from './component/Header/Header'
import Banner from "./component/Banner/Banner"
import ListProduct from "./component/ListItem/ListProduct"
import ListProductByCategory from "./component/ListProductByCategory/ListProductByCategory"
function App() {
  // const {product,setProduct} = UseFetch('https://backoffice.nodemy.vn/api/products')
  // const slug = product?.map(item=>{
  //   return item?.attributes?.idCategories?.data[0]?.attributes?.slug
  // })
  // const category = [...new Set(slug)]
  return (
    <>
      <Header></Header>
      <Banner></Banner>   
      <ListProduct></ListProduct>
      {/* <ListProductByCategory slugs={`laptop-gaming`}></ListProductByCategory>
      <ListProductByCategory slugs={`ban-phim`}></ListProductByCategory> */}

    </>
  )
}

export default App
