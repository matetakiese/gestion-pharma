import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Products from './pages/products.jsx'
import ProductsList from './pages/productsList.jsx'
import SingleProduct from './pages/singleProduct.jsx'
import DashboardLayout from './dashboard-layout/dashboard-layout.jsx'
import CreateProduct from './pages-dashboards/create-product.jsx'
import DeleteProduct from './pages-dashboards/delete-product.jsx'
import UpdateProduct from './pages-dashboards/update-product.jsx'
import AllProducts from './pages-dashboards/all-products.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/AllProduct",
        element: <AllProducts />,
      },
      {
        path: "/CreateProduct",
        element: <CreateProduct />,
      },
      {
        path: "/DeleteProduct",
        element: <DeleteProduct />,
      },
      {
        path: "/UpdateProduct",
        element: <UpdateProduct />,
      },
    ],
  },
]
);








 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
