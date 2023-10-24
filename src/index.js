import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Main from "./Pages/Main/Main";
import Person from "./Pages/Person/Person";

import "./styles/fonts.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Test from "./Pages/Test/Test";
import Help from "./Pages/Help/Help";
import FinalForm from "./Pages/FinalForm/FinalForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "person/:id",
    element: <Person />,
  },

  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  {
    path: "/333",
    element: <FinalForm />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
