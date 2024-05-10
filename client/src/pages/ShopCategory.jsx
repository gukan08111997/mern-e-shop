import { useContext } from "react";
import classes from "./css/ShopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={classes.shop_category}>
      <div className={classes.banner_bg}>
        <h2 style={{textAlign:"center"}}>Mega Sale Offer</h2>
        <img
          className={classes.shopcategory_banner}
          src={banner}
          alt="category"
        />
      </div>

      <div className={classes.shopcategory_indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={classes.shopcategory_sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={classes.shopcategory_products}>
        {all_product.map((item, index) => {
          if (category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={classes.shopcategory_loadmore}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
