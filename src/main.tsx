import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
        createBrowserRouter,
        RouterProvider,
} from "react-router-dom";
import Home from './Home.tsx'
import Credits from './Credits.tsx'
import Select from './Select.tsx'
import Pal from './Pal.tsx'


const router = createBrowserRouter([
        {
                path: "/",
                element: <Home></Home>
        },
        {
                path: "/credits",
                element: <Credits></Credits>
        },
        {
                path: "/callback",
                element: <Select></Select>
                //authguard
        },
        {
                path: "/pal",
                element: <Pal></Pal>
                //authguard
        },
        {
                path:"*",
                element: <Home></Home>
        }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}>
        
    </RouterProvider>
  </React.StrictMode>,
)
