import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import ShoppingCart from '../pages/ShoppingCart'
import MainLayout from '../layouts/MainLayout'
import Shop from '../pages/Shop'
import ProtectedRoute from './ProtectedRoute'
import RegisterPage from '../pages/RegisterPage'

//hint protected routes https://www.robinwieruch.de/react-router-private-routes/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path='shoppingcart' element={<ShoppingCart/>}/>
            </Route>
            <Route path="*" element={<h1>404</h1>}/>
        </Route>)
)

export default router