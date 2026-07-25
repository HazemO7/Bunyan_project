
import { useState } from "react";
import {useSelector} from "react-redux";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  // layer 1 state variable to hold notification count
  const [notifCount, setNotifCount] = useState(15);
//layer 2 api call simulation to fetch notification count from server

// layer 3 handler function to increase notification count
  const onIncreaseNotifHandler = () => {
    setNotifCount( notifCount + 1);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/dashboard/login");
  }
  const state = useSelector((state) => state.auth);
  console.log("Redux state:", state);

  return (
    <nav
      className={`${styles.navbar} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div className="d-flex align-items-center">
        <img src={Logo} alt="Bunyan" className={styles.logoImg} />
      </div>

      <div className={styles.adminSection}>
        <div className={styles.notifIcon}>
          <i className="fa-solid fa-bell"></i>
          <span className={`badge rounded-pill bg-info ${styles.badge}`}>
            {notifCount}
          </span>
        </div>
        <div className="btn btn-success" onClick={onIncreaseNotifHandler}>
          Increase Notification
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold d-none d-md-block">{adminName}</span>
          {adminImg ? (
            <img src={adminImg} alt="admin" className={styles.avatarCircle} />
          ) : (
            <div className={styles.avatarCircle}>
              {adminName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="btn btn-danger ms-3" onClick={logoutHandler}>
            Logout
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
