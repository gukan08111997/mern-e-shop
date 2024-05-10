export default async function loader({params}){
    const orderId = params.orderId;
    let response = await fetch("https://mern-e-shop-api.vercel.app/orders/"+orderId,{
        headers:{
            "auth-token":localStorage.getItem("Auth-token")
        }
    })
    if(response.status===200){
        response = await response.json();
        return response.data.order;
    }else{
       return null;
    }
}