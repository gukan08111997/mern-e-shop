import { useContext } from "react";
import classes from "./CartItems.module.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, removeFromCart, cartItems, all_product } =
    useContext(ShopContext);

  const addToOrder = async ()=>{
    let orderArray = [];
all_product.map(product=>{
  if(cartItems[product.id]>0){
    orderArray.push({
      name:product.name,
      image:product.image,
      orderCount:cartItems[product.id]
    })
    removeFromCart(product.id);
  }
})
let response = await fetch("https://mern-e-shop-api.vercel.app/orders",{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json",  
    "Auth-token":localStorage.getItem("Auth-token")
  },
  body:JSON.stringify({orders:orderArray})
})
if(response.status===200){
  response = await response.json();
  alert(response.message);
  window.location.replace("/order");
}else{
  response = await response.json();
  alert(response.message);
}

  }
  return (
    <div className={classes.cartitems}>
      <div className={classes.cartitems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div
                className={`${classes.cartitems_format} ${classes.cartitems_format_main}`}
              >
                <img
                  src={product.image}
                  alt=""
                  className={classes.carticon_product_icon}
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className={classes.cartitems_quantity}>
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className={classes.cartitems_remove_icon}
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={classes.cartitems_down}>
        <div className={classes.cartitems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={classes.cartitems_total_item}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={classes.cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={classes.cartitems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={addToOrder}>PROCEED TO CHECKOUT</button>
        </div>
        <div className={classes.cartitems_promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={classes.cartitems_promobox}>
            <input type="text" placeholder="Type your promocode here" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
