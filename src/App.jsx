import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { Loader as menuLoader } from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import CreateOrder, {
  action as CreateOrderAction,
} from "./Features/order/CreateOrder";
import Order, { loader as orderLoader } from "./Features/order/Order";
import { action as updateOrderAction } from "./Features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
