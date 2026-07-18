
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import styles from "./FormDashboard.module.css";

function FormDashboard() {
  //L1 state and global state
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}, watch } = useForm({mode: "all"});
  //L2 api call and form handling {useEffect, useForm, axios, react-query, react-hook-form}
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  //L3 handler
const onSubmit = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/dashboard/users", data);
    alert("User created successfully!");
    navigate("/dashboard/users");
    console.log("User created:", response.data);
  } catch (error) {
    const errorServer = error.response.data.message
    alert(errorServer || "Error creating user");
  }
}



  //L4 return jsx
  return (
    <div className="container py-4">
      <div className={styles.formWrapper}>
        <h5 className="fw-semibold mb-4">Add New User</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">


            <div className="col-12 col-md-6">
              <label className="form-label">User Name</label>
              <input type="text" className={`form-control ${styles.input}`}
               {...register("username", { required: "Username is required",
                pattern: { value: /^[a-zA-Z0-9_]{3,20}$/, message: "Invalid username" } })} />
               {errors.username && (
                <span className="invalid-feedback d-block">{errors.username.message}</span>)}
            </div>


            <div className="col-12 col-md-6">
              <label className="form-label">Email Address</label>
              <input type="email" className={`form-control ${styles.input}`}
               {...register("email", { required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
               {errors.email && (
                <span className="invalid-feedback d-block">{errors.email.message}</span>)}
            </div>


            <div className="col-12 col-md-12">
              <label className="form-label">
                Phone Number
              </label>
              <input 
                placeholder="01x-xxxxxxx" type="text" className={`form-control ${styles.input}`}
               {...register("phoneNumber", { required: "Phone number is required",
                pattern: { value: /^\d{11}$/, message: "Invalid phone number" } })}
              />
               {errors.phoneNumber && (
                <span className="invalid-feedback d-block">{errors.phoneNumber.message}</span>)}
            </div>


            <div className="col-12 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="invalid-feedback d-block">{errors.password.message}</span>
              )}
            </div>


            <div className="col-12 col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
                {...register("confirmPassword", { required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match"
                 })}  
              />
              {errors.confirmPassword && (
                <span className="invalid-feedback d-block">{errors.confirmPassword.message}</span>
              )}
            </div>


            <div className="col-12 d-flex justify-content-end mt-3">
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDashboard;


