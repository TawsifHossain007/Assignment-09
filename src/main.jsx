import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services.jsx';
import MyProfile from './Components/MyProfile/MyProfile.jsx';
import AuthRoot from './Layout/AuthRoot.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: "/services",
        Component: Services
      },
      {
        path: "/my-profile",
        Component: MyProfile
      }

    ]
  },
  {
    path: "/auth",
    Component: AuthRoot,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
