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
          <button className="btn outline-none text-[#fff] bg-[#04AA6D] border-none shadow-[0_9px_#999] hover:bg-[#3e8e41] active:bg-[#3e8e41] active:shadow-[0_5px_#666] active:translate-y-1">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
