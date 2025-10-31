import { useState, useContext } from "react";
import styles from "./Nav.module.css";
import useOutsideClick from "../../hooks/useOutsideClick";
import { MessageCircle, UsersRound, LogOut, CircleUser } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClickOutside = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate(`/login`);
    };

    const ref = useOutsideClick(handleClickOutside);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.navWrapper}>
            <nav>
                <div className={styles.navGroup}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? [styles.navItem, styles.active].join(" ")
                                : styles.navItem
                        }
                        to="/conversations"
                    >
                        <MessageCircle />
                        Chats
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? [styles.navItem, styles.active].join(" ")
                                : styles.navItem
                        }
                        to="/users"
                    >
                        <UsersRound />
                        Users
                    </NavLink>
                </div>
                <div className={styles.dropdown}>
                    <button
                        className={styles.pfpBtn}
                        ref={ref}
                        type="button"
                        onClick={handleOpen}
                    >
                        <img
                            src={user?.pfpUrl}
                            alt="acc"
                            className={styles.pfp}
                        />
                    </button>
                    {open ? (
                        <ul className={styles.menu}>
                            <li
                                className={styles.menuItem}
                                onClick={() => navigate(`/users/${user?.id}`)}
                            >
                                <CircleUser className={styles.icon} />
                                <p>View profile</p>
                            </li>
                            <li
                                className={styles.menuItem}
                                onClick={handleLogout}
                            >
                                <LogOut className={styles.icon} />
                                <p>Log out</p>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </nav>
        </div>
    );
}
