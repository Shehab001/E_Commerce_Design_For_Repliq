import { Button } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import LogIn from "./Components/LogIn";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <LogIn></LogIn>
    </div>
  );
}

export default App;
