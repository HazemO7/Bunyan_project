import styles from './Sidebar.module.css'

function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title:"Status"}, 
        {icon: "fa-users", title:"Users Mangement"},
        {icon: "fa-building", title:"Projects Mangement"},
        {icon: "fa-building", title:"Developers Mangement"},
        {icon: "fa-globe", title:"CMS"},
        {icon: "fa-message", title:"Live Chat"},
    ];
console.log(styles);

    return(
         <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div>Dashboard</div>
            <nav >
                {links.map((item, index) => (
                    <div className="navItem" key={index}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span className="title">{item.title}</span>
                </div>
                ))}
            </nav>
         </aside>
    )
}

export default Sidebar;