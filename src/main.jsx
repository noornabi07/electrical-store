import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shoap from './Components/Shoap/Shoap';
import About from './Components/About/About';
import Welcome from './Components/Welcome/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Welcome></Welcome>
      },
      {
        path: 'shop',
        element: <Shoap></Shoap>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
