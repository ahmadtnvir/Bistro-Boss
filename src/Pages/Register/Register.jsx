import "../Login/login.css";
import img from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, logOut } = useContext(AuthContext);

  const onSubmit = (data, e) => {
    console.log(data);
    const form = e.target;
    form.reset();
    const { name, photo, email, password } = data;

    createUser(email, password)
      .then(() => {
        updateUser(name, photo).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign Up Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          logOut().then(() => {
            setTimeout(() => {
              navigate("/login");
            }, 1700);
          });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register</title>
      </Helmet>
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
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
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
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type Your Password Here"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{6}/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one uppercase letter, one special case
                    letter, two digits, two lowercase letters. The password is
                    of length 6
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054B2] text-white">
                  Sign Up
                </button>
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
    </>
  );
};

export default Register;
