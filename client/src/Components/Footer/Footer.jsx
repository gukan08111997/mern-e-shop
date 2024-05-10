import classes from "./Footer.module.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinterest_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className={classes.footer}>
<div className={classes.footer_logo}>
<img src={footer_logo} alt="" />
<p>DHANUSHA SHOP</p>
</div>
<ul className={classes.footer_links}>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className={classes.footer_social_icon}>
    <div className={classes.footer_icons_container}>
        <img src={instagram_icon} alt="insta" />
    </div>
    <div className={classes.footer_icons_container}>
        <img src={pinterest_icon} alt="pinterest" />
    </div>
    <div className={classes.footer_icons_container}>
        <img src={whatsapp_icon} alt="whatsapp" />
    </div>
</div>
<div className={classes.footer_copyright}>
    <hr />
    <p>Copyright@2024 - All Right Reserved.</p>
</div>
    </div>
  )
}

export default Footer