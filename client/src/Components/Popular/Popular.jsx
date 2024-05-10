import classes from "./Popular.module.css";
import { useState,useEffect } from "react";
// import data_product from "../../assets/data";
import Item from "../Items/Item";
const Popular = ({category}) => {
const [popularProducts,setPopularProducts] = useState([]);

useEffect(()=>{
  async function fetchData(){
    let response= await fetch(`https://mern-e-shop-api.vercel.app/products/${category}`);
    if(response.status===200){
      response = await response.json();
      setPopularProducts(response.data.products);
    }else{
      response = await response.json();
      console.log(response.message);
    } 
  }
  fetchData();
},[]);

  return (
    <div className={classes.popular}>
      <h1>POPULAR IN {`${category.toUpperCase()}`}</h1>
      <hr />
      <div className={classes.popular_item}>
        {popularProducts.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
