import './style.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useState } from 'react'
export default function Header(){
    const token = localStorage.getItem('token')
    const [logout,setLogout] = useState(true)
    return (
        <>
            <div className='header'>
                <div className='logo-shop'>
                    <Link to="/">
                        <img src="src\assets\—Pngtree—shop logo design with a_7961653.png" alt="" />
                    </Link>
                </div>
                <div>
                    {token ? (
                    <>
                        <div>
                            <span>{localStorage.getItem('user')}</span>
                            <Button type='none' onClick={()=>{
                                setTimeout(()=>{
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('user')
                                    setLogout(false)
                                },1000)
                            }}>
                                <span>Đăng xuất</span>
                            </Button>
                        </div>
                    </>
                    ) : (
                        <>
                            <Link to="/login" className='link'>Đăng nhập</Link>
                            <Link to="/register" className='link'>Đăng ký</Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}