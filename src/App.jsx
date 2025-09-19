import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, About, Recipe, Recipes } from "./pages/";
import { action as HomeAction } from "./pages/Home";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          HomeAction
        },
        {
          path: "/about",
          element: <About />,
        },
        
        {
          path: "/receipes",
          element: <Recipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
