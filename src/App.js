import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
