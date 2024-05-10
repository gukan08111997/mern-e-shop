import { useEffect,useState } from "react";
import classes from "./RelatedProducts.module.css";
// import data_product from "../../assets/data";
import Item from "../Items/Item";
const RelatedProducts = ({category}) => {
  const [dataProduct,setDataProduct] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      let response= await fetch(`https://mern-e-shop-api.vercel.app/products/${category}`);
      if(response.status===200){
        response = await response.json();
        setDataProduct(response.data.products);
      }else{
        response = await response.json();
        console.log(response.message);
      } 
    }
    fetchData();
  },[]);

  return (
    <div className={classes.relatedproducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={classes.relatedproducts_item}>
        {dataProduct.map((item, i) => (
          <Item
            key={i}
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

export default RelatedProducts;
