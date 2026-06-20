import { useState } from "react";
import StatusCard from "../../ui/StatusCard/StatusCard";
import styles from "./Status.module.css";
function Status() {
  // layer 1 state variable to hold count
  const [ stats , setStats] = useState([{id:1, cont:120, title:"projects"}
    ,{id:2, cont:140, title:"developers"}
    ,{id:3, cont:150, title:"users"},
    {id:4, cont:130, title:"blogs"}]);



  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>

      <div className="container">
        <div className="row g-3">
          {stats.map((stat) => (
            <div className="col-12 col-sm-6 col-lg-3" key={stat.id}>
              <StatusCard count={stat.cont} title={stat.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
