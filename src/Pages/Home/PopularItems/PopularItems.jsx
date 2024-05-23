import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Button from "../../../Components/Button/Button";
import useMenu from "../../../state/useMenu";

const PopularItems = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <div className="mt-24">
      <SectionTitle
        subHeading={"Check Out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button text={"View Full Menu"}></Button>
      </div>
    </div>
  );
};

export default PopularItems;
