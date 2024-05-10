import classes from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={classes.descriptionbox}>
      <div className={classes.descriptionbox_navigator}>
        <div className={classes.descriptionbox_nav_box}>Description</div>
        <div className={`${classes.descriptionbox_nav_box} ${classes.fade}`}>
          Reviews {122}
        </div>
      </div>
      <div className={classes.descriptionbox_description}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus corrupti dolores dolorem ad delectus, reprehenderit
          atque optio at, nobis harum minus expedita? Cupiditate, officia?
          Repudiandae hic quibusdam dolorem non corporis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni
          neque perferendis. Quo, laudantium perspiciatis! Dolore assumenda et
          nulla alias, vero sed, illum modi illo quidem possimus consectetur sit
          perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
