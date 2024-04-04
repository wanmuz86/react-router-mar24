import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProductRoute = () => {
    // get the JWT token
    const localStorageToken = localStorage.getItem("token");
    // replace replace the entire history stack with home
    return localStorageToken ? <Outlet /> : 
    <Navigate to="/" replace />
}

export default ProductRoute