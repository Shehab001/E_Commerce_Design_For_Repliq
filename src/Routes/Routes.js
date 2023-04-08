import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import Error from "../Components/Error";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import Onboard from "../Components/Onboard";
import Payment from "../Components/Payment";
import ProductList from "../Components/ProductList";
import Products from "../Components/ProductList";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/onboard",
        element: <Onboard></Onboard>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/products",
        element: <ProductList></ProductList>,
      },
      // {
      //   path: "/singleservice/:id",
      //   element: (
      //     <Private>
      //       <SingleService></SingleService>
      //     </Private>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://travel-site-backend.vercel.app/singleservice/${params.id}`
      //     ),
      // },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
