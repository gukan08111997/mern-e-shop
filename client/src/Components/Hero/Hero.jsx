import { Link } from "react-router-dom";
import classes from "./Hero.module.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import e_comm_bg from "../../assets/e-comm-bg.jpg";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_left}>
        <h2>WELCOME TO MY ONLINE SHOP</h2>
        <div>
          <div className={classes.hero_hand_icon}>
            <p>Brand New</p>
            <img src={hand_icon} alt="hand-img" />
          </div>
          <p>Products</p>
          <p>for everyone</p>
        </div>
        <Link to={"/electronics"}>
          <div className={classes.hero_latest_btn}>
            <div>Explore More</div>
            <img src={arrow_icon} alt="arrow-img" />
          </div>
        </Link>
      </div>
      <div className={classes.hero_right}>
        <img src={e_comm_bg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
