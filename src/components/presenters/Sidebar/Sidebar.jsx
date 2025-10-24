// import { useContext, useState } from "react";
// import styles from "./Sidebar.module.css";
// import {
//     LucideLogOut,
//     Menu,
//     MessageCircleCode,
//     UserRoundPen,
//     Users,
//     MessageCircle,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../../context/UserContext";

// const Sidebar = () => {
//     const [open, setOpen] = useState(false);
//     const { logout } = useContext(UserContext);
//     const pfp = localStorage.getItem("pfpUrl");
//     const pfpId = localStorage.getItem("pfpId");

//     const navigate = useNavigate();

//     const handleLogout = () => {
//         navigate("/");
//         logout();
//     };

//     return (
//         <>
//             <div
//                 className={
//                     open
//                         ? [styles.sidebarContainer, styles.open].join(" ")
//                         : [styles.sidebarContainer, styles.close].join(" ")
//                 }
//             >
//                 <div className={styles.top}>
//                     <div className={styles.logoContainer}>
//                         <MessageCircleCode size={36} className={styles.logo} />
//                         <span className={styles.logoText}>Messz</span>
//                     </div>

//                     <Menu
//                         className={styles.btn}
//                         onClick={() => (open ? setOpen(false) : setOpen(true))}
//                     />
//                 </div>
//                 <div className={styles.user}>
//                     <img className={styles.pfp} src={pfp} alt="Profile Pic" />
//                     <p className={styles.name}>Ian Forrest Rogel</p>
//                 </div>
//                 <ul>
//                     <li
//                         onClick={() =>
//                             navigate(`/user-profiles/${pfpId}/update`)
//                         }
//                     >
//                         <UserRoundPen className={styles.icon} />
//                         <a className={styles.iconText} href="">
//                             Edit profile
//                         </a>
//                         <span className={styles.tooltip}>Edit profile</span>
//                     </li>
//                     <li onClick={() => navigate("/conversations")}>
//                         <MessageCircle className={styles.icon} />
//                         <a className={styles.iconText}>Conversations</a>
//                         <span className={styles.tooltip}>Conversations</span>
//                     </li>
//                     <li onClick={() => navigate("/user-profiles")}>
//                         <Users className={styles.icon} />
//                         <a className={styles.iconText}>Users</a>
//                         <span className={styles.tooltip}>Users</span>
//                     </li>

//                     <li onClick={handleLogout}>
//                         <LucideLogOut className={styles.icon} />
//                         <a className={styles.iconText}>Logout</a>
//                         <span className={styles.tooltip}>Logout</span>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default Sidebar;
