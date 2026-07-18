import { Link } from "react-router-dom";
import {login} from "../../../store/authSlice";
import styles from "./LoginDashboard.module.css";
import { useDispatch } from "react-redux";


function LoginDashboard() {
  const dispatch = useDispatch();


  const onSubmitHandler = async (data) => {
    const res = await axios.post("http://localhost:3000/api/dashboard/login", data);
    if (res.data.success) {
      dispatch(login(res.data.user));
    }
    
  };

  const token = res.data.token;
  dispatch(login({ token }));
  
  navigate ("/dashboard/home");


  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className={styles.loginWrapper}>
        <h5 className="fw-semibold mb-4 text-center">Dashboard Login</h5>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${styles.input}`}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${styles.input}`}
              placeholder="Enter your password"
            />
          </div>

          <Link
            to="/dashboard/home"
            type="submit"
            className="btn btn-primary w-100 btn-sm"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginDashboard;
