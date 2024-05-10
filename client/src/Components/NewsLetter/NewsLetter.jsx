import classes from "./NewsLetter.module.css";
import {Link} from "react-router-dom";
const NewsLetter = () => {
  return (
    <div className={classes.newsletter}>
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="your Email id" />
        <Link to={"/login"}><button>Subscribe</button></Link>
        
      </div>
    </div>
  );
};

export default NewsLetter;
