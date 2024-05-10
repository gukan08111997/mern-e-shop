import classes from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({id, image, name, new_price, old_price }) => {
  return (
    <div className={classes.item}>
     <Link to={`/product/${id}`}><img src={image} alt={name} onClick={window.scrollTo(0,0)} /></Link> 
      <p>{name}</p>
      <div className={classes.item_prices}>
        <div className={classes.item_price_new}>${new_price}</div>
        <div className={classes.item_price_old}>${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
