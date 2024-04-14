import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <Homepage/>
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
