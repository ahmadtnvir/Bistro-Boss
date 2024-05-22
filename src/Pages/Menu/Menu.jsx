import { Helmet } from "react-helmet-async";
import Introduction from "../../Components/Introduction/Introduction";
import banner from "../../assets/menu/banner3.jpg";
import PopularItems from "../Home/PopularItems/PopularItems";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <Introduction
        img={banner}
        contentBackgroundColor={"#00000066"}
        color={"white"}
        heading={"Our Menu"}
        paragraph={"Would You Like To Try A Dish?"}
      ></Introduction>
      <PopularItems></PopularItems>
      <Introduction
        img={banner}
        contentBackgroundColor={"#00000066"}
        color={"white"}
        heading={"Our Menu"}
        paragraph={"Would You Like To Try A Dish?"}
      ></Introduction>
      <PopularItems></PopularItems>
      <Introduction
        img={banner}
        contentBackgroundColor={"#00000066"}
        color={"white"}
        heading={"Our Menu"}
        paragraph={"Would You Like To Try A Dish?"}
      ></Introduction>
      <PopularItems></PopularItems>
    </div>
  );
};

export default Menu;
