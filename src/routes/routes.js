import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import About from "../Pages/Main/About";
import Home from "../Pages/Main/Home";

const routes = ([
    {
        path : '/' ,
        element : <Main />,
        children : [
            {
                path : 'home' ,
                element : <Home />
            },
            {
                path : 'about' ,
                element : <About />
            },
        ]
    },
    {
        path : 'dashboard',
        element : <Dashboard />,
        children : [

        ]
    }
])

export default routes