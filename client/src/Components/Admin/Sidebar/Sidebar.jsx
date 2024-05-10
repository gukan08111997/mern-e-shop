import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../../assets/Product_Cart.svg";
import list_product_icon from "../../../assets/Product_list_icon.svg";
import person_icon from "../../../assets/person.png";
import order_icon from "../../../assets/order_icon.png";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Link to={"/admin/addProduct"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_item}>
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/admin/listProducts"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_item}>
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={"/admin/listUsers"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_item}>
          <img className={classes.sidebar_icon} src={person_icon} alt="" />
          <p>Users List</p>
        </div>
      </Link>
      <Link to={"/admin/listOrders"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_item}>
          <img className={classes.sidebar_icon} src={order_icon} alt="" />
          <p>Orders List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
