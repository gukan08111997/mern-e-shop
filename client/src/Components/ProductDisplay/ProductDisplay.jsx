import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import classes from "./ProductDisplay.module.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className={classes.productdisplay}>
      <div className={classes.productdisplay_left}>
        <div className={classes.Productdisplay_img_list}>
          {/* <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" /> */}
        </div>
        <div className={classes.productdisplay_img}>
          <img
            className={classes.productdisplay_main_img}
            src={product.image}
            alt="product-img"
          />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className={classes.productdisplay_right_star}>
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_dull_icon} alt="star-img" />
          <p>{122}</p>
        </div>
        <div className={classes.productdisplay_right_prices}>
          <div className={classes.productdisplay_right_price_old}>
            ${product.old_price}
          </div>
          <div className={classes.productdisplay_right_price_new}>
            ${product.new_price}
          </div>
        </div>
        <div className={classes.productdisplay_right_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          inventore ab porro reiciendis amet voluptates ratione animi soluta
          tenetur corrupti nihil, saepe quia molestias cumque doloribus sint
          adipisci pariatur suscipit!
        </div>
        <div className={classes.productdisplay_right_size}>
          <h1>Select Quantity</h1>
          <div className={classes.productdisplay_right_sizes}>
            <div>2</div>
            <div>5</div>
            <div>10</div>
            <div>15</div>
            <div>More</div>
          </div>
          <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        </div>
        
        <p className={classes.productdisplay_right_category}>
          <span>Category :</span>{product.category}
        </p>
        <p className={classes.productdisplay_right_category}>
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
