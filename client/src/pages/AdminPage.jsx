import AdminNavbar from "../Components/Admin/AdminNavbar/AdminNavbar";
import Sidebar from "../Components/Admin/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import classes from "./css/AdminPage.module.css";

const AdminPage = () => {
  return (
    <div className={classes.admin_container}>
      <AdminNavbar />
      <div className={classes.flex_container}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
