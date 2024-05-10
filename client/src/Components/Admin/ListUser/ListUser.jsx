
import classes from "./ListUser.module.css";
import ListUserItem from "../ListUserItem/ListUserItem";
import { useEffect, useState } from "react";

const ListUser = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    let response = await fetch("https://mern-e-shop-api.vercel.app/users");
    response = await response.json();
    if (response.data.users.length > 0) {
        console.log(response.data.users);
      setAllUsers(response.data.users);
    } else {
      console.log(response.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div className={classes.list_user}>
      <h1>All Users List</h1>
      <div className={classes.listuser_format_main}>
        <p>Users</p>
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
        <p>Date Registered</p>
        <p>Edit</p>
      </div>
      <div className={classes.listuser_allusers}>
        <hr />
        {allUsers.map((user, index) => (
         <ListUserItem key={index} user={user} fetchUsers={fetchUsers} />
        ))}
      </div>
    </div>
  );
};

export default ListUser;
