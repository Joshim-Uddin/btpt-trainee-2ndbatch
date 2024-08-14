import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Magazine from './Magazine';
import Gallery from './Gallery';
import About from './About';

const router = createBrowserRouter([
    { path: "/",
     element: <App />,
     children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/magazine",
            element: <Magazine />
        },
        {
            path: "/gallery",
            element: <Gallery />
        },
        {
            path: "/about",
            element: <About />
        }
     ]
    }
])
const Routes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;