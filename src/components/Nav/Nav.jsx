import { useState } from "react";
import styles from "./Nav.module.css";
import useOutsideClick from "../../hooks/useOutsideClick";
import { MessageCircle, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleClickOutside = () => {
        setOpen(false);
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
                    <button ref={ref} type="button" onClick={handleOpen}>
                        Account
                    </button>
                    {open ? (
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <button>View profile</button>
                            </li>
                            <li className={styles.menuItem}>
                                <button>Logout</button>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </nav>
        </div>
    );
}
