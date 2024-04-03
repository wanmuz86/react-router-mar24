import React from 'react'
import { useRouteError } from 'react-router-dom'
const ProductErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops from Shopper website in error page!</h1>
            <p>Sorry an error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ProductErrorPage