import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Home from './components/Homepage/Home'
import LoginPage from "./components/auth/login/LoginPage";
import RegisterPage from "./components/auth/register/RegisterPage";
import MyWishlistPage from "./components/auth/wishlist/MyWishlistPage";
import CartPage from "./components/auth/cart/CartPage";

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <Home/>
    )
  },
  {
    path : "/login",
    element : (
      <LoginPage/>
    )
  },
  {
    path : "/register",
    element : (
      <RegisterPage/>
    )
  },
  {
    path : "*",
    element : (
      <PageNotFound/>
    )
  },
  {
    path : "my-wishlist",
    element : (
      <MyWishlistPage/>
    )
  },
  {
    path : "cart",
    element : (
      <CartPage/>
    )
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
