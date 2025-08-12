import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import UserPage from './pages/User.jsx'
import ProductionPage from './pages/Production.jsx'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/production",
    element: <ProductionPage />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);