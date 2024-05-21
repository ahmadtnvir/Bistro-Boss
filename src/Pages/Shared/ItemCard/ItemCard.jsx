import Button from "../../../Components/Button/Button";

const ItemCard = ({item}) => {
    const {image, name, recipe} = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <Button text={'Add To Cart'}></Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
