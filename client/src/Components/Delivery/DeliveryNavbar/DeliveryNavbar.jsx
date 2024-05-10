import classes from "./DeliveryNavbar.module.css";
import navlogo from "../../../assets/nav-logo.svg";
import navProfile from "../../../assets/nav-profile.svg";
const AdminNavbar = () => {
  return (
    <div className={classes.navbar}>
        <img src={navlogo} alt="nav_logo" className={classes.nav_logo}/>
        <img src={navProfile} alt="nav_profile" />
    </div>
  )
}

export default AdminNavbar