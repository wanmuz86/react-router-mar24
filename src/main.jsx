import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Products, {dataLoader} from './pages/Products.jsx'
import ProductDetail,{detailLoader} from './pages/ProductDetail.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import ProductErrorPage from './pages/ProductErrorPage.jsx'
import CreateProduct,{createProductAction} from './pages/CreateProduct.jsx'
import ProtectedRoute from './pages/ProductRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"products",
        element:<Products/>,
        loader:dataLoader // Link dataLoader to the path declaration
      },
      {
        path:"products/:productId",
        element:<ProductDetail/>,
        errorElement:<ProductErrorPage/>,
        loader:detailLoader
      },
      {
        element:<ProtectedRoute/>,
        children:[
          {
            path:"create-product",
            element:<CreateProduct/>,
            action:createProductAction
          }

        ]
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
