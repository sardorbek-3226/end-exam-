import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, About, Recipe, Recipes } from "./pages/";
import { action as HomeAction } from "./pages/Home";
import Filter from "./components/Filter";
function App() {
  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //         HomeAction
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/receipe/:id",
  //         element: <Recipe />,
  //       },
  //       {
  //         path: "/receipes",
  //         element: <Recipes />,
  //       },
  //     ],
  //   },
  // ]);
  // <RouterProvider router={routes} />;
  return <Filter/>
}

export default App;
