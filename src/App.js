import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>404</div>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div>404</div>,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <div>404</div>,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
