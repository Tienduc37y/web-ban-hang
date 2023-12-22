import "./App.css"
import Header from './component/Header/Header'
import Banner from "./component/Banner/Banner"
import ListProductByCategory from "./component/ListItem/ListProductByCategory"
function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>   
      <ListProductByCategory></ListProductByCategory>
    </>
  )
}

export default App
