import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddProduct from "../Pages/Dashboard/AddProduct";
import ProductList from "../Pages/Dashboard/ProductList";
import About from "../Pages/Main/About";
import Contact from "../Pages/Main/Contact";
import Home from "../Pages/Main/Home";

const routes = createBrowserRouter([
    {
        path : '/' ,
        element : <Main />,
        children : [
            {
                path : "/" ,
                element : <Home />
            },
            {
                path : "about" ,
                element : <About />
            },
            {
                path : "contact" ,
                element : <Contact />
            },
        ]
    },
    {
        path : 'dashboard',
        element : <Dashboard />,
        children : [

            {
                path : "/dashboard",
                element : <ProductList />
            },
            {
                path : "add-product",
                element : <AddProduct />
            },

        ]
    }
])

export default routes