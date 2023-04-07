import { Button } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Button>Button</Button>
    </div>
  );
}

export default App;
