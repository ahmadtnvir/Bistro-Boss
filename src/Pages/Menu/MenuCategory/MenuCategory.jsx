import Button from "../../../Components/Button/Button";
import Introduction from "../../../Components/Introduction/Introduction";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, img, heading, paragraph }) => {
  return (
    <div className="my-24 space-y-10">
      <div>
        {heading && (
          <Introduction
            img={img}
            contentBackgroundColor={"#00000066"}
            color={"white"}
            heading={heading}
            paragraph={paragraph}
          ></Introduction>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 ">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button text={'Order Your Favorite Food'}></Button>
      </div>
    </div>
  );
};

export default MenuCategory;
