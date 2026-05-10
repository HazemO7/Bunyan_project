import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title:"Status", path: "/"},
        {icon: "fa-users", title:"Users Mangement", path: "/users"},
        {icon: "fa-building", title:"Projects Mangement", path: "/projects"},
        {icon: "fa-building", title:"Developers Mangement", path: "/developers"},
        {icon: "fa-globe", title:"CMS", path: "/cms"},
        {icon: "fa-message", title:"Live Chat", path: "/live-chat"}
    ];


    return(
         <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div className='fw-semibold px-3 fs-4 mb-2'>Dashboard</div>
            <nav >
                {links.map((item, index) => (
                    <NavLink 
                      to={item.path} className={`${styles.navItem} d-flex align-items-center gap-3  `} 
                      key={index}>
                    <i className={`fa-solid ${item.icon} fs-5`}></i>
                    <span className="fs-5">{item.title}</span>
                </NavLink>
                ))}
            </nav>
         </aside>
    )
}

export default Sidebar;