
import ReactDOM  from "react-dom/client";
import "./App.css"
import RestaurantList from "./src/components/RestaurantList/RestaurantList";
import Favourite from "./src/components/Favourite/Favourite";
import Header from "./src/components/Header/Header";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from "./About";
import Error from "./src/components/Error/Error";
import RestaurantDetails from "./src/components/RestaurantList/RestaurantDetails/RestaurantDetails";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./Contact"));
import {Provider} from 'react-redux';
import store from "./store/store";
import Cart from "./src/components/Cart/Cart";


const AppLayout = () => (
    <Provider store={store}>
    <div className="appLayout">
   <Header/>
   <Outlet/>
    </div>
    </Provider>
)

const Body = () => (
    <>
       {/* <Favourite/> */}
   <RestaurantList/>
    </>
)

const router =  createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement : <Error/>,
        children: [
            {
              path:"/",
              element:<Body/>
        },
        {
            path:"/about",
            element:<About/>,
            
      },
      {
        path:"/cart",
        element:<Cart/>,
        
  },
      {
          path :"/contact",
          element:<Suspense fallback={<h1>Loading....</h1>}>
            <Contact/>
          </Suspense>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails/>,
        
  }
    ]
    }
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>);