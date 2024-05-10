export default async function loader({params}){
    const orderId = params.orderId;
    let response = await fetch("http://localhost:3000/orders/"+orderId,{
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