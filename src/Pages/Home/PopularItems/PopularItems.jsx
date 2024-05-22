import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Button from "../../../Components/Button/Button";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        setItems(popularItems);
      });
  }, []);
  // console.log(items);
  return (
    <div className="mt-24">
      <SectionTitle
        subHeading={"Check Out"}
        heading={"From our menue"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button text={"View Full Menu"}></Button>
        {/* <button className="btn btn-outline border-t-0 border-l-0 border-r-0 font-semibold">View Full Menu</button> */}
      </div>
    </div>
  );
};

export default PopularItems;
