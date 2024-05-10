import DeliveryNavbar from "../Components/Delivery/DeliveryNavbar/DeliveryNavbar";
import { Outlet } from "react-router-dom";


const DeliveryPage = () => {
  return (
    <div style={{display:"flex",flexFlow:"column nowrap",width:"100%"}}>
      <DeliveryNavbar />
      <Outlet />
    </div>
  );
};

export default DeliveryPage;
