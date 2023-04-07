import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
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
      // {
      //   path: "/blogs",
      //   element: <Blog></Blog>,
      // },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      // {
      //   path: "/myreview",
      //   element: (
      //     <Private>
      //       <MyReview></MyReview>
      //     </Private>
      //   ),
      // },
      // {
      //   path: "/addservicee",
      //   element: <SingleService></SingleService>,
      // },
      // {
      //   path: "/addservice",
      //   element: <AddService></AddService>,
      // },
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
      // {
      //   path: "*",
      //   element: <Error></Error>,
      // },
    ],
  },
]);

export default router;
