import { redirect } from "react-router-dom";

function getToken(){
    const token = localStorage.getItem("Auth-token");
    if(!token){
        return null;
    }
    return token
}

function getRole(){
    const userRole = localStorage.getItem("User-role");
    if(!userRole){
        return null;
    }
    return userRole;
}

export  function adminAuthLoader (){
    const token = getToken();
    const role = getRole();
    if(token&& role==="admin"){
        return null;
    }
    alert("you shouldn't have access to this route");
        return redirect("/login")

}

export  function deliveryAuthLoader (){
    const token = getToken();
    const role = getRole();
    if(token&& (role==="admin" || role==="delivery")){
        return null;
    }else{
        alert("you shouldn't have access to this route");
        return redirect("/login")
    }
}