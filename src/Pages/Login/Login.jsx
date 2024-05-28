import "./login.css";
import img from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import "animate.css";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  // TODO: Enable disabled when all works done. Now temporary off. 
  console.log(disabled);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);

  const onSubmit = (data, e) => {
    // console.log(data);
    const form = e.target;
    form.reset();
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        console.log(result);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1800);
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Provide valid password!",
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1800);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Provide valid password!",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      Swal.fire({
        title: "Captcha Verified Successfully.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    } else {
      setDisabled(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha validation failed. Please try again!",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>

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

              {/* Re captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>

                <div className="join">
                  <input
                    type="text"
                    ref={captchaRef}
                    className="input input-bordered join-item"
                    placeholder="Type Here Captcha Above"
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn join-item rounded-r-full"
                  >
                    Verify Captcha
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                {/* // TODO: apply disable for re captcha 
                  disabled={disabled}
                */}
                <button
                  type="submit"
                  disabled={false}
                  className="btn bg-[#D1A054B2] text-white"
                >
                  Sign In
                </button>
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
                <button
                  onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
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

export default Login;
