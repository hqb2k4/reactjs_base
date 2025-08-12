import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import UserPage from './pages/User.jsx'
import BookPage from './pages/Book.jsx'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import TodoApp from './component/todo/TodoApp.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // HandlingNotFound
    errorElement: <ErrorPage />,
    // Nested routes
    children: [
      // Index route
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);