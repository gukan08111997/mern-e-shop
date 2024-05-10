import React from 'react';
import classes from "./Breadcrum.module.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrum = ({product}) => {
  return (
    <div className={classes.breadcrum}>
HOME <img src={arrow_icon} alt="arrow-img" /> SHOP <img src={arrow_icon} alt="arrow-img" /> {product.category} <img src={arrow_icon} alt="arrow-img" /> {product.name}
    </div>
  )
}

export default Breadcrum