const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex justify-start items-start gap-4">
      <img
        className="w-[118px] h-[104px] rounded-r-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h4 className="text-xl font-medium">{name} ----------</h4>
        <p>{recipe}</p>
      </div>
      <span className="text-yellow-500 text-xl font-medium">${price}</span>
    </div>
  );
};

export default MenuItems;
