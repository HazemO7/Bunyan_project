import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";

function TableDashboard() {
//l
  const [users, setUsers] = useState([])
// l2 fetch data
  useEffect(() => {
    const fetchUsers = async() => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

//l3 handler
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0 fw-semibold">Users List</h5>
        <Link to="add" className="btn btn-primary btn-sm">
          Add New User
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table mb-0 ${styles.table}`}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user._id)}>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDashboard;
