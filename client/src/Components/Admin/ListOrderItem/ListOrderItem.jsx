
import { useParams,useLoaderData } from "react-router-dom";
import classes from "./ListOrderItem.module.css";
import upload_area from "../../../assets/upload_area.svg";

const ListOrderItem = () => {
    const params = useParams();
    const orderId = params.orderId;
const order = useLoaderData();
  
  const handleCancelOrder = async () =>{
    let response = await fetch(`http://localhost:3000/orders/${orderId}`,{
      method:"DELETE",
      headers:{
        Accept:"application/json",
        "Auth-token":localStorage.getItem("Auth-token")
      }
    })

    if(response.status===200){
      response = await response.json();
      console.log(response.message);
      window.location.replace("/order");
    }else{
      response = await response.json();
      console.log(response.message);
    }
  } 
   

    const handleVerify = async ()=>{
        let response = await fetch("http://localhost:3000/orders/"+orderId,{
            method:"PATCH",
            headers:{
                "auth-token":localStorage.getItem("Auth-token")
            }
        })
        if(response.status===200){
            response = await response.json();
            console.log(response.message)
        }else{
            response = await response.json();
            console.log(response.message)
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
        <img src={order.productBeforeDelivery?order.productBeforeDelivery:upload_area} className={classes.listorder_thumnail_img} alt="" />
    </div>
    <div>
    <h2>Product Image After Delivery</h2>
        <img src={order.productAfterDelivery?order.productAfterDelivery:upload_area} className={classes.listorder_thumnail_img} alt="" />
    </div>
    </div>
   {(localStorage.getItem("User-role")==="admin")? <button onClick={handleVerify} className={classes.listorder_btn}>Verify</button>: <button onClick={handleCancelOrder} className={classes.listorder_btn}>Cancel Order</button>}
  </div>
  )
}

export default ListOrderItem