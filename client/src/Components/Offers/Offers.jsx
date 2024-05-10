import classes from "./Offers.module.css";

import special_offer from "../../assets/special_offer.png";

const Offers = () => {
  return (
    <div className={classes.offers}>
<div className={classes.offers_left}>
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
</div>
<div className={classes.offers_right}>
<img src={special_offer} alt="" />
</div>
    </div>
  )
}

export default Offers;