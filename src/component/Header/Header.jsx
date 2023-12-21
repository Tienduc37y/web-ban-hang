import './style.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return (
        <>
            <div className='header'>
                <div className='logo-shop'>
                    <Link to="/">
                        <img src="src\assets\—Pngtree—shop logo design with a_7961653.png" alt="" />
                    </Link>
                </div>
                <div className='user'>
                    <Link to="/login" className='link'>Đăng nhập</Link>
                    <Link to="/register" className='link'>Đăng ký</Link>
                </div>
            </div>
        </>
    )
}