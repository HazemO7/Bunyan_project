import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";

import { login } from "../../../store/authSlice";
import styles from "./LoginDashboard.module.css";

function LoginDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        data
      );

      if (res.data.success) {
        const token = res.data.token;

        localStorage.setItem("token", token);

        dispatch(
          login({
            token,
            user: res.data.user,
          })
        );

        navigate("/dashboard/home");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className={styles.loginWrapper}>
        <h5 className="fw-semibold mb-4 text-center">
          Dashboard Login
        </h5>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>

            <input
              type="email"
              className={`form-control ${styles.input}`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <small className="text-danger">
                {errors.email.message}
              </small>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>

            <input
              type="password"
              className={`form-control ${styles.input}`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <small className="text-danger">
                {errors.password.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 btn-sm"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/">Back to Website</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginDashboard;