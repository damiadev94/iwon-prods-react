import React from "react";
import ReactDom from "react-dom/client";
import "./output.css"
import App from "./App";
import Producciones from "./pages/producciones/Producciones";
import Precios from "./pages/precios/Precios";
import Contacto from "./pages/contacto/Contacto";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/producciones",
    element: <Producciones/>
  },
  {
    path: "/precios",
    element: <Precios/>
  },
  {
    path: "/contacto",
    element: <Contacto/>
  },
])

const rootElement: any = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
  <RouterProvider router={router}/>
);
