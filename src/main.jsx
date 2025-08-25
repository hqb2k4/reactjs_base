import { StrictMode } from 'react'
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
import { createRoot } from 'react-dom/client'
import { AuthWrapper } from './component/context/auth.context.jsx'
import PrivateRoute from './routes/private.route.jsx'

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
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </StrictMode>
);