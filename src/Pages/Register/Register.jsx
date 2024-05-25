import "../Login/login.css";
import img from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={"main-container hero min-h-screen p-20 rounded-2xl"}>
      <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl form-container rounded-2xl py-5">
        <div className="text-center">
          <img src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm ">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type Here"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password Here"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054B2] text-white">Sign Up</button>
            </div>
          </form>
          <div className="text-center space-y-6">
            <p className="text-[#D1A054B2]">
              Already Registered?{" "}
              <Link to={"/login"}>
                <strong>Go to log in</strong>
              </Link>
              .
            </p>
            <p>Or Sign up with</p>
            <div className="flex justify-center items-center gap-6">
              <button className="btn btn-circle btn-outline">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaGoogle />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
