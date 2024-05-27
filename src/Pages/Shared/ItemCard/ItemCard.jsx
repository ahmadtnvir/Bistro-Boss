import Button from "../../../Components/Button/Button";

const ItemCard = ({ item }) => {
  const { image, price, name, recipe } = item;

  const handleCart = (food) => {
    console.log(food);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        {price && (
          <p className=" badge bg-slate-800 px-5 absolute right-0 text-white mr-6 mt-6 border-none">
            ${price}
          </p>
        )}
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <Button onClick={() => handleCart(item)} text={"Add To Cart"}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
