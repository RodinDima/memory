import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from "./Pages/Main/Main";
import Person from "./Pages/Person/Person";

import "./styles/fonts.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Test from './Pages/Test/Test';
import Help from './Pages/Help/Help';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "person/:id",
    element: <Person />,
  },

  {
    path: "/test",
    element: <Test/>
  },
  {
    path: "/Help",
    element: <Help/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
