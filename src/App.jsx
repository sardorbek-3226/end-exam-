import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, About, Recipe, Recipes } from "./pages/";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/receipe/:id",
          element: <Recipe />,
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
