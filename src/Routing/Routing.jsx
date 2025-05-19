import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../Pages/Backend/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Backend/Dashboard";
import Login from "../Pages/Backend/Login";
import Root from "../Pages/Backend/Root";
import AddCoffee from "../Pages/Backend/AddCoffee";
import AllCoffee from "../Pages/Backend/AllCoffee";
import CoffeeDetails from "../Component/Backend/CoffeeDetails";
import CoffeeDetail from "../Component/Frontend/CoffeeDetails";
import CoffeeEdit from "../Pages/Backend/CoffeeEdit";
import FrontRoot from "../Pages/Frontend/FrontRoot";
import Home from "../Pages/Frontend/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontRoot,
    children:[
        {index: true,
          loader: () => fetch('https://coffee-server-mu-seven.vercel.app/addCoffee'),
          Component: Home},
        {path: '/coffeedetails/:id',
          Component: CoffeeDetail
        },
    ]
  },
  
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },

  {
    path: "/dashboard",
    loader: async () => {
      const response = await fetch(
        "https://coffee-server-mu-seven.vercel.app/adduser"
      );
      if (!response.ok) {
        throw new Error("Failed to load user data");
      }
      return response.json(); // This will be accessible via useLoaderData in Root component
    },
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        loader: async () => {
          const response = await fetch(
            "https://coffee-server-mu-seven.vercel.app/adduser"
          );
          if (!response.ok) {
            throw new Error("Failed to load user data");
          }
          return response.json();
        },
        Component: Dashboard,
      },
      {
        path: "addcoffees",
        loader: async () => {
          const response = await fetch(
            "https://coffee-server-mu-seven.vercel.app/adduser"
          );
          if (!response.ok) {
            throw new Error("Failed to load user data");
          }
          return response.json();
        },
        Component: AddCoffee,
      },
      {
        path: "allcoffee",
        loader: async () => {
          const response = await fetch(
            "https://coffee-server-mu-seven.vercel.app/addcoffee"
          );
          if (!response.ok) {
            throw new Error("Failed to load user data");
          }
          return response.json();
        },
        Component: AllCoffee,
      },
      { path: "allcoffee/coffeedetails/:id", Component: CoffeeDetails },
      {
        path: "allcoffee/coffeedit/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-mu-seven.vercel.app/Coffee/${params.id}`
          ),
        Component: CoffeeEdit,
      },
    ],
  },
]);
