
import { useParams,useLoaderData } from "react-router-dom";
import classes from "./UploadImages.module.css";
import upload_area from "../../../assets/upload_area.svg";
import { useState } from "react";

const UploadImages = () => {
    const params = useParams();
    const orderId = params.orderId;
const order = useLoaderData();
const [image1,setImage1] = useState(false);
const [image2,setImage2] = useState(false);


  const imageHandler = (e) =>{
    console.log(e.target);
    if(e.target.name==="image1"){
      setImage1(e.target.files[0]);
    }else if(e.target.name==="image2"){
      setImage2(e.target.files[0]);
    }
    
  }

  

  const uploadImageBeforeDelivery = async () =>{

    let responseData;
  

    const formData = new FormData();
    formData.append("product",image1);

    const response = await fetch("https://mern-e-shop-api.vercel.app/upload",{
method:"POST",
headers:{
  Accept:"application/json"
},
body:formData
    })
    responseData = await response.json();

    if(responseData.status==="success"){
      let response = await fetch(`https://mern-e-shop-api.vercel.app/orders/${orderId}/image`,{
        method:"PATCH",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Auth-token":localStorage.getItem("Auth-token")
        },
        body:JSON.stringify({productBeforeDelivery:responseData.image_url})
      });
      response = await response.json();
      if(response.status==="success"){
        alert("product image uploaded successfully")
      }else{
        alert("failed")
      }
    }
    
  }
  const uploadImageAfterDelivery = async () =>{

    let responseData;
  

    const formData = new FormData();
    formData.append("product",image2);

    const response = await fetch("https://mern-e-shop-api.vercel.app/upload",{
method:"POST",
headers:{
  Accept:"application/json"
},
body:formData
    })
    responseData = await response.json();

    if(responseData.status==="success"){
      let response = await fetch(`https://mern-e-shop-api.vercel.app/orders/${orderId}/image`,{
        method:"PUT",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Auth-token":localStorage.getItem("Auth-token")
        },
        body:JSON.stringify({productAfterDelivery:responseData.image_url})
      });
      response = await response.json();
      if(response.status==="success"){
        alert("product image uploaded successfully")
      }else{
        alert("failed")
      }
    }
    
  }
  
   
   

    
  return (
    <div className={classes.list_order}>
    <div className={classes.listorder_itemfield}>
      <h2>Order Item</h2>
      <p>{order.name}</p>
    </div>
    <div className={classes.listorder_price}>
    <div className={classes.listorder_itemfield}>
      <h2>Ordered Date</h2>
     <p>{order.date}</p>
    </div>
    <div className={classes.listorder_itemfield}>
      <h2>Order Count</h2>
     <p>{order.orderCount}</p>
    </div>
    </div>
    <div className={classes.listorder_itemfield}>
      <h2>Ordered By</h2>
     <p>{order.user}</p>
    </div>
    <div className={classes.listorder_price}>
    <div>
        <h2>Product Image Before Delivery</h2>
        <label htmlFor="file-input1">
          {order.productBeforeDelivery? <img src={order.productBeforeDelivery} className={classes.listorder_thumnail_img} alt="" />:<img src={image1?URL.createObjectURL(image1):upload_area} className={classes.listorder_thumnail_img} alt="" />} 
        </label>
        <input onChange={imageHandler} type="file" name="image1" id="file-input1" hidden />
    </div>
    <div>
    <h2>Product Image After Delivery</h2>
    <label htmlFor="file-input2">
      {order.productAfterDelivery?<img src={order.productAfterDelivery} className={classes.listorder_thumnail_img} alt="" />:<img src={image2?URL.createObjectURL(image2):upload_area} className={classes.listorder_thumnail_img} alt="" />}
          
        </label>
        <input onChange={imageHandler} type="file" name="image2" id="file-input2" hidden />
    </div>
    </div>
   {order.productBeforeDelivery? <button onClick={uploadImageAfterDelivery} className={classes.listorder_btn}>Submit</button>: <button onClick={uploadImageBeforeDelivery} className={classes.listorder_btn}>Upload</button>}
  </div>
  )
}

export default UploadImages;