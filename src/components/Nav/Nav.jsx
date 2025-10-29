import styles from "./Nav.module.css";

export default function Nav() {
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
                <div>
                    <button>
                        Account
                    </button>
                </div>
            </nav>
        </div>
    );
}
