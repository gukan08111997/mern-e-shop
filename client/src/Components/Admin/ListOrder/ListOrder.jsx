import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ListOrder.module.css";
import view_icon from "../../../assets/view_icon.jpg";

const ListOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const fetchOrders = async () => {
    let response = await fetch("http://localhost:3000/orders", {
      headers: {
        "Auth-token": localStorage.getItem("Auth-token"),
      },
    });
    response = await response.json();
    if (response.data.orders && response.data.orders.length > 0) {
      setAllOrders(response.data.orders);
    } else {
      console.log(response.message);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className={classes.list_order}>
      <h1>All Orders List</h1>
      <div className={classes.listorder_format_main}>
        <p>Orders</p>
        <p>Name</p>
        <p>User</p>
        <p>Order Count</p>
        <p>Order Date</p>
        <p>To View</p>
      </div>
      <div className={classes.listorder_allorders}>
        <hr />
        {allOrders.map((order, index) => (
          <div key={index}>
            <div
              className={`${classes.listorder_format_main} ${classes.listorder_format}`}
            >
              <img
                src={order.image}
                alt=""
                className={classes.listorder_order_icon}
              />
              <p>{order.name}</p>
              <p>{order.user}</p>
              <p>{order.orderCount}</p>
              <p>{order.date}</p>
              <Link to={`${order._id}`}>
                {" "}
                <img
                  className={classes.listorder_view_icon}
                  src={view_icon}
                  alt=""
                />
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOrder;
