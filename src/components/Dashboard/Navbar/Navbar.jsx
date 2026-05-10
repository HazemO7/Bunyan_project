import logo from '../../../assets/axis logo.png'
import styles from './Navbar.module.css'


function Navbar({ adminName }) {
return(
    <nav className={`${styles.nav} d-flex justify-content-between align-items-center shadow-sm border-bottom-2`}>
       <div className={`${styles.parentImg} d-flex justify-content-between align-items-center`} >
          <img src={logo} alt="" />
       </div>

       <div className="adminSection d-flex justify-content-between  align-items-center gap-3">
           <div className={styles.notificationSection}>
              <i className="fa-solid fa-bell"></i>
              <span className={`${styles.contNoti} bg-info text-white rounded-pill`}>3</span>
      </div>

      <div className= "d-flex justify-content-center align-itmes-center gap-3">
	    <span className= "d-flex align-items-center">{adminName}</span>
	    <div className={styles.avatar}>
            {adminName.charAt(0).toUpperCase()}
       </div>
     </div>

     </div>
    </nav>
       
    )
}




export default Navbar;