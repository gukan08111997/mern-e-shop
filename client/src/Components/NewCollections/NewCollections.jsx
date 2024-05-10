import classes from "./NewCollections.module.css";
import {useState,useEffect} from "react";
// import new_collection from "../../assets/new_collections";
import Item from "../Items/Item";
const NewCollections = () => {
const [new_collection,setNew_collection] = useState([]);

useEffect(()=>{
  async function fetchData(){
    let response = await fetch("http://localhost:3000/products/new");
    if(response.status===200){
      response = await response.json();
      setNew_collection(response.data.products)
    }else{
      response = await response.json();
      console.log(response.message);
    }
  }
  fetchData();
},[]);

  return (
    <div className={classes.new_collections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={classes.collections}>
        {new_collection.map((item, index) => (
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

export default NewCollections;
