import { createContext, useEffect, useState } from "react";
// import all_product from "../assets/all_product";

export const ShopContext = createContext({
  getTotalCartItems: () => {},
  getTotalCartAmount: () => {},
  getTotalOrderItems: async () => {},
  all_product: [],
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [orderItems,setOrderItems] = useState([]);


  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://mern-e-shop-api.vercel.app/products");
      response = await response.json();
      setAll_product(response.data.products);

      if(localStorage.getItem("Auth-token")){
        let response1 = await fetch("https://mern-e-shop-api.vercel.app/users/cart",{
          method:"POST",
          headers:{
            Accept:"application/form-data",
            "auth-token":`${localStorage.getItem("Auth-token")}`,
            "Content-Type":"application/json"
          },
          body:""
        });
        if(response1.status===200){
          response1 = await response1.json();
          
          setCartItems(response1.data.cart);
        }
        let response2 = await fetch("https://mern-e-shop-api.vercel.app/orders/user",{
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        "Auth-token":localStorage.getItem("Auth-token")
      }
    })
  
    if(response2.status===200){
      response2 = await response2.json();
      setOrderItems(response2.data.orders);
    }
       
      }
    }
    fetchData();
  }, []);

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] + 1,
      };
    });
    if (localStorage.getItem("Auth-token")) {
      let response = await fetch("https://mern-e-shop-api.vercel.app/users/cart/add", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      });
      response = await response.json();
      console.log(response.message);
    }
  };
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
    if(localStorage.getItem("Auth-token")){
      let response = await fetch("https://mern-e-shop-api.vercel.app/users/cart/remove", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      });
      response = await response.json();
      console.log(response.message);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let cartInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItems += cartItems[item];
      }
    }
    return totalCartItems;
  };

  const getTotalOrderItems = () =>{
    return orderItems.length;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    getTotalOrderItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
