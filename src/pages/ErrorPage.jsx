import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div id="error-page">
            <h1>Oops from Shopper website!</h1>
            <p>Sorry an error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <p><button onClick={()=> navigate('/')}>Go back to home</button></p>
        </div>
    )
}

export default ErrorPage