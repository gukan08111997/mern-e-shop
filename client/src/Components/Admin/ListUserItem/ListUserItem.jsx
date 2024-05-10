import classes from "./ListUserItem.module.css";
import edit_img from "../../../assets/edit_img.png";
import person_icon from "../../../assets/person.png";
import { useState } from "react";

const ListUserItem = ({ user,fetchUsers }) => {
    const [updatedRole, setUpdatedRole] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
  const edit_userRole = async (id) => {
    let response = await fetch("https://mern-e-shop-api.vercel.app/users/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: updatedRole }),
    });
    if (response.status === 200) {
      response = await response.json();
      console.log(response.message);
      setIsUpdate(false);
      await fetchUsers();
    } else {
      response = await response.json();
      console.log(response.message);
    }
  };
  return (
    <>
      <div
        className={`${classes.listuser_format_main} ${classes.listuser_format}`}
      >
        <img src={person_icon} alt="" className={classes.listuser_user_icon} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        {isUpdate ? (
          <select
            onBlur={(e) => {
              setUpdatedRole(e.target.value);
            }}
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
            <option value="delivery">delivery</option>
          </select>
        ) : (
          <p>{user.role}</p>
        )}
        <p>{user.date}</p>
        {isUpdate ? (
          <button
            onClick={() => {
              edit_userRole(user._id);
            }}
          >
            Update Role
          </button>
        ) : (
          <img
            onClick={() => {
              setIsUpdate(true);
            }}
            className={classes.listuser_edit_icon}
            src={edit_img}
            alt=""
          />
        )}
      </div>
      <hr />
    </>
  );
};

export default ListUserItem;
