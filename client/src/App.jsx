import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import electronics_banner from "./assets/electronics_banner.jpg";
import furniture_banner from "./assets/furniture_banner.jpg";
import kitchen_banner from "./assets/kitchen_banner.jpg";
import AdminPage from "./pages/AdminPage";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ListProduct from "./Components/Admin/ListProduct/ListProduct";
import ListUser from "./Components/Admin/ListUser/ListUser";
import ListOrder from "./Components/Admin/ListOrder/ListOrder";
import ListOrderItem from "./Components/Admin/ListOrderItem/ListOrderItem";
import OrderItemLoader from "./util/OrderItemLoader.js";
import DeliveryPage from "./pages/DeliveryPage";
import UploadImages from "./Components/Delivery/UploadImages/UploadImages";
import {deliveryAuthLoader,adminAuthLoader} from "./util/AuthLoader.js";
import ListOrderByUser from "./Components/ListOrderByUser/ListOrderByUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "electronics",
        element: <ShopCategory banner={electronics_banner} category="electronics" />,
      },
      {
        path: "furniture",
        element: <ShopCategory banner={furniture_banner} category="furniture" />,
      },
      {
        path: "kitchen",
        element: <ShopCategory banner={kitchen_banner} category="kitchen" />,
      },
      {
        path: "product",
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginSignup />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path:"order",
        element:<ListOrderByUser />
      },{
      path:"order/:orderId",
      element:<ListOrderItem />,
      loader:OrderItemLoader
    }
    ],
  },{
    path:"/admin",
    element:<AdminPage />,
    loader:adminAuthLoader,
    children:[{
      path:"addProduct",
      element:<AddProduct />
    },{
      path:"listProducts",
      element:<ListProduct />
    },{
      path:"listUsers",
      element:<ListUser />
    },{
      path:"listOrders",
      element:<ListOrder />
    },{
      path:"listOrders/:orderId",
      element:<ListOrderItem />,
      loader:OrderItemLoader
    }]
  },{
    path:"/delivery",
    element:<DeliveryPage />,
    loader:deliveryAuthLoader,
    children:[{
      index:true,
      element:<ListOrder />
    },{
      path:":orderId",
      element:<UploadImages />,
      loader:OrderItemLoader
    }]
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
