import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <Home/>
    )
  },
  {
    path : "*",
    element : (
      <PageNotFound/>
    )
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
