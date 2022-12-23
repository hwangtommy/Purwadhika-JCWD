import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import ProductPage from "./pages/productpage";
import Error from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}>
          
        </Route>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/login" element={<Login />}>

        </Route>
        <Route path="/post" element={<ProductPage />}>

        </Route>
        <Route path="/*" element={<Error />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
