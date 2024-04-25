import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Home from './components/Homepage/Home'
import LoginPage from "./components/auth/login/LoginPage";
import LogoutPage from "./components/auth/login/LogOutPage.js";

import RegisterPage from "./components/auth/register/RegisterPage";
import MyWishlistPage from "./components/auth/wishlist/MyWishlistPage";
import CartPage from "./components/auth/cart/CartPage";
import AboutPage from "./components/about/AboutPage";
import BlogsPage from "./components/blogs/BlogsPage";
import OilsPage from "./components/Category/oils/OilsPage";
import FacecarePage from "./components/Category/facecare/FacecarePage";
import TermAndConditionPage from "./components/Homepage/Footer/termAndCondition/TermAndConditionPage";
import PrivacyPolicyPage from "./components/Homepage/Footer/privacyPolicy/PrivacyPolicyPage";
import ShippingPolicyPage from "./components/Homepage/Footer/shippingPolicy/ShippingPolicyPage";
import ReturnPolicyPage from "./components/Homepage/Footer/returnPolicy/ReturnPolicyPage";
import ProductPage from "./components/products/ProductPage";
import ProductDetail from "./components/products/ProductDetail";
import { useEffect } from "react";
import { loadUser } from "./redux/action/userAction";
import store from "./redux/store"
import { useSelector } from "react-redux";

const router = createBrowserRouter([

  // homepage
  {
    path : "/",
    element : (
      <Home/>
    )
  },
  {
    path : "/products",
    element : (
      <ProductPage/>
    )
  },
  {
    path : "/product/:id",
    element : (
      <ProductDetail/>
    )
  },
  {
    path : "/blogs",
    element : (
      <BlogsPage/>
    )
  },
  {
    path : "/about-us",
    element : (
      <AboutPage/>
    )
  },
  
  // category
  {
    path : "/category/oil",
    element : (
      <OilsPage/>
    )
  },
  {
    path : "/category/face-care",
    element : (
      <FacecarePage/>
    )
  },


  // authentication
  {
    path : "/login",
    element : (
      <LoginPage/>
    )
  },
  {
    path : "/logout",
    element : (
      <LogoutPage/>
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
  
  // footer 
  {
    path : "/term-of-use",
    element : (
      <TermAndConditionPage/>
    )
  },
  {
    path : "/privacy-policy",
    element : (
      <PrivacyPolicyPage/>
    )
  },
  {
    path : "/shipping-policy",
    element : (
      <ShippingPolicyPage/>
    )
  },
  {
    path : "/return-policy",
    element : (
      <ReturnPolicyPage/>
    )
  },
])

function App() {

  useEffect(()=>{
    store.dispatch(loadUser())
  },[store])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
