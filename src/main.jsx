import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Detail from './pages/Detail/Detail.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Product from './pages/Product/Product.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },{
    path: '/:slug',
    element: <Detail></Detail>
  },{
    path:'/login',
    element: <Login></Login>
  },{
    path:'/register',
    element: <Register></Register>
  },{
    path:"/category",
    element:<Product></Product>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
