import "./App.css";
import { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
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
      element: authCtx.isLoggedIn ? <ProfilePage /> : <Login />,
      errorElement: <div>404</div>,
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
