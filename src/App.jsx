import "./App.css"
import Header from './component/Header/Header'
import Banner from "./component/Banner/Banner"
import ListProduct from "./component/ListItem/ListProduct"
import ListProductByCategory from "./component/ListProductByCategory/ListProductByCategory"
import { UseFetch } from "./common/UseFetch"
function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>   
      <ListProduct></ListProduct>
      <ListProductByCategory slugs={`laptop-gaming`}></ListProductByCategory>
      <ListProductByCategory slugs={`ban-phim`}></ListProductByCategory>

    </>
  )
}

export default App
