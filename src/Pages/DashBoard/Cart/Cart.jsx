import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import useCart from "../../../state/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="space-y-10 w-[80%]">
      <SectionTitle
        heading={"wanna add more"}
        subHeading={"My Cart"}
      ></SectionTitle>

      <div className="flex justify-between items-center">
        <h2 className="text-xl uppercase font-bold">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-xl uppercase font-bold">
          Total Price: ${totalPrice}
        </h2>
        <button className="btn btn-sm bg-[#D1A054]">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table rounded-3xl">
          <thead>
            <tr className="uppercase bg-[#D1A054]">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-error btn-sm text-white">
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
