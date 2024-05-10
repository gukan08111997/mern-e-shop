import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../../assets/dropdown_icon.png";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import order_icon from "../../assets/order_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems,getTotalOrderItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {

    menuRef.current.classList.toggle("nav_menu_visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.nav_logo}>
        <img src={logo} alt="logo-img" />
        <p>DHANUSHA SHOP</p>
      </div>
      <img
        className={classes.nav_dropdown}
        src={nav_dropdown}
        onClick={dropdown_toggle}
        alt=""
      />
      <ul ref={menuRef} className={classes.nav_menu}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("electronics")}>
          <Link to="electronics">Electronics</Link>
          {menu === "electronics" && <hr />}
        </li>
        <li onClick={() => setMenu("furniture")}>
          <Link to="furniture">Furniture</Link>
          {menu === "furniture" && <hr />}
        </li>
        <li onClick={() => setMenu("kitchen")}>
          <Link to="kitchen">Kitchen Appliances</Link>
          {menu === "kitchen" && <hr />}
        </li>
      </ul>
      <div className={classes.nav_login_cart}>
        {localStorage.getItem("Auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("Auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="login">
            <button>Login</button>
          </Link>
        )}

        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className={classes.nav_cart_count}>{getTotalCartItems()}</div>
        <Link to="order">
          <img src={order_icon} width="50" alt="" />
        </Link>
        <div className={classes.nav_cart_count}>{getTotalOrderItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
