import Swal from "sweetalert2";
import Button from "../../../Components/Button/Button";
import useAuth from "../../../state/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemCard = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = (food) => {
    console.log(food);
    if (user && user.email) {
      // TODO:set cart item to the db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart.`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    } 
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
            <Button
              onClick={() => handleCart(item)}
              text={"Add To Cart"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
