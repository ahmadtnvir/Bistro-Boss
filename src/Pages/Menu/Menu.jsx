import { Helmet } from "react-helmet-async";
import Introduction from "../../Components/Introduction/Introduction";
import banner from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../Components/SectionsTitle/SectionTitle";
import useMenu from "../../state/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <div>
        <Introduction
          img={banner}
          contentBackgroundColor={"#00000066"}
          color={"white"}
          heading={"Our Menu"}
          paragraph={"Would You Like To Try A Dish?"}
        ></Introduction>
      </div>
      <div className="my-24 space-y-10">
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
      </div>

      {/* Offered */}
      
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert */}

      <MenuCategory
        img={dessertImg}
        heading={"Desserts"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, accusamus."
        }
        items={dessert}
      ></MenuCategory>

      {/* Pizza */}

      <MenuCategory 
      items={pizza} 
      img={pizzaImg} 
      heading={'Pizza'} 
      paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, accusamus."} 
      ></MenuCategory>


      {/* Salad */}

      <MenuCategory 
      items={salad} 
      img={saladImg} 
      heading={"Salad"} 
      paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, accusamus."}
      ></MenuCategory>
      
      {/* Soup */}

      <MenuCategory
      items={soup}
      img={soupImg}
      heading={"Soup"}
      paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, accusamus.'}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
