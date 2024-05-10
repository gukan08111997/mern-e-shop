import {useState} from "react";
import classes from "./AddProduct.module.css";
import upload_area from "../../../assets/upload_area.svg";

const AddProduct = () => {
  
  const [image,setImage] = useState(false);
const [productDetails,setProductDetails] = useState({
  name:"",
  image:"",
  category:"electronics",
  old_price:"",
  new_price:""
});
  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }

  const changeHandler = (e)=>{
    setProductDetails(prev=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const add_products = async () =>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    const formData = new FormData();
    formData.append("product",image);

    const response = await fetch("https://mern-e-shop-api.vercel.app/upload",{
method:"POST",
headers:{
  Accept:"application/json"
},
body:formData
    })
    responseData = await response.json();

    if(responseData.status==="success"){
      product.image = responseData.image_url;
      console.log(product);
      let response = await fetch("https://mern-e-shop-api.vercel.app/products",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
      });
      response = await response.json();
      if(response.status==="success"){
        alert("product added successfully")
      }else{
        alert("failed")
      }
    }
    
  }

  return (
    <div className={classes.add_product}>
      <div className={classes.addproduct_itemfield}>
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>
      <div className={classes.addproduct_price}>
      <div className={classes.addproduct_itemfield}>
        <p>Price</p>
        <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
      </div>
      <div className={classes.addproduct_itemfield}>
        <p>Offer Price</p>
        <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
      </div>
      </div>
      <div className={classes.addproduct_itemfield}>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className={classes.add_product_selector}>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="kitchen">Kitchen Appliances</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className={classes.addproduct_thumnail_img} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
    
      </div>
      <button onClick={()=>{add_products()}} className={classes.addproduct_btn}>ADD</button>
    </div>
  );
};

export default AddProduct;
