import Header from "../../component/Header/Header"
import { List } from "antd"
export default function Cart(){
    return (
        <>
            <Header></Header>
            <div className="cart-product">
                <List></List>
            </div>
        </>
    )
}