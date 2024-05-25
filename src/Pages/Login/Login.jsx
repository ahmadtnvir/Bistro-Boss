import "./login.css";
import img from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className={"main-container hero min-h-screen p-20 rounded-2xl"}>
      <div className="hero-content flex-col lg:flex-row shadow-2xl form-container rounded-2xl py-5">
        <div className="text-center">
          <img src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm ">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {errors.email && <span>This field is required</span>}
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
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("captchaDemo", { required: true })}
              />
              {errors.captchaDemo && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Reload Captcha
                </a>
              </label>
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Type Here"
                className="input input-bordered"
                {...register("captcha", { required: true })}
              />
              {errors.captcha && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054B2] text-white">Sign In</button>
            </div>
          </form>
          <div className="text-center space-y-6">
            <p className="text-[#D1A054B2]">
              New here?{" "}
              <Link to={"/register"}>
                <strong>Create a new account</strong>
              </Link>
              .
            </p>
            <p>Or Sign in with</p>
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

export default Login;
