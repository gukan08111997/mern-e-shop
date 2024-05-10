import Offers from "../Components/Offers/Offers";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular category="electronics"/>
      <Popular category="furniture"/>
      <Popular category="kitchen"/>
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
