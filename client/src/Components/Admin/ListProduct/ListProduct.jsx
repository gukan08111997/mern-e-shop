import { useEffect, useState } from "react";
import classes from "./ListProduct.module.css";
import cross_icon from "../../../assets/cross_icon.png";
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchProducts = async () => {
    let response = await fetch("http://localhost:3000/products");
    response = await response.json();
    if (response.data.products.length > 0) {
      setAllProducts(response.data.products);
    }else{
      console.log(response.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const remove_product = async (id)=>{
    let response = await fetch("http://localhost:3000/products/"+id,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    if(response.status===200){
    response = await response.json();
    alert(response.message);
    await fetchProducts();
  
    }else{
      response = await response.json();
      console.log(response.message);
    }
   
  }
  return (
    <div className={classes.list_product}>
      <h1>All Products List</h1>
      <div className={classes.listproduct_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className={classes.listproduct_allproducts}>
        <hr />
        {allProducts.map((product, index) => (
          <>
          <div
            key={index}
            className={`${classes.listproduct_format_main} ${classes.listproduct_format}`}
          >
            <img
              src={product.image}
              alt=""
              className={classes.listproduct_product_icon}
            />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className={classes.listproduct_remove_icon} src={cross_icon} alt="" />
          </div>
          <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
