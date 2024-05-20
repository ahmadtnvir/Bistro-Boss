import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import ItemCard from "../../Shared/ItemCard/ItemCard";

const Recommends = () => {
  const [items, setItems] = useState([]);
  const limitItems = items.slice(0, 3);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const recommended = data.filter((item) => item.category === "salad");
        setItems(recommended);
      });
  }, []);
  return (
    <div className="mt-24">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {limitItems.map((item) => (
          <ItemCard key={item.key} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
