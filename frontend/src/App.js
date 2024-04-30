import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from './components/Section/Section'
import { useEffect, useState } from "react";
import { loadUser } from "./redux/action/userAction";
import store from "./redux/store"
import axios from 'axios'


function App() {
  const [stripteApiKey, setStripteApiKey] = useState()

  async function getStripeApiKey(){
    const {data} = await axios.get("/api/v1/stripteapikey")

    setStripteApiKey(data.stripteApiKey)
  }

  useEffect(() => {
    store.dispatch(loadUser())
    getStripeApiKey()
  }, [store])

  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <BrowserRouter>
        <Header />
        <Section />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
