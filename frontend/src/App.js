import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from './components/Section/Section'
import { useEffect } from "react";
import { loadUser } from "./redux/action/userAction";
import store from "./redux/store"


function App() {

  useEffect(() => {
    store.dispatch(loadUser())

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
