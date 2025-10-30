import { useState } from "react";
import styles from "./Nav.module.css";
import useOutsideClick from "../../hooks/useOutsideClick";

// fix me don't show on auth pages

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
                <ul>
                    <li>
                        <a href="/conversations">Conversations</a>
                    </li>
                    <li>
                        <a href="/users">Users</a>
                    </li>
                </ul>
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
