import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import styles from "./Users.module.css";
import Nav from "../Nav/Nav";
import { Search, History, CircleUser, MessageCircleMore } from "lucide-react";

export default function Users() {
    const {
        handleSearch,
        search,
        setSearch,
        users,
        loading,
        error,
        handleUserClick,
    } = useUsers();

    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Nav />
            <div className={styles.usersWrapper}>
                <div className={styles.searchWrapper}>
                    <form className={styles.form} onSubmit={handleSearch}>
                        <Search className={styles.searchIcon} color="#bfbfbf" />
                        <input
                            className={styles.searchInput}
                            name="search"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                        />
                    </form>
                </div>
                <div className={styles.recent}>
                    <History color="#dedede" />
                    <p>Recent users...</p>
                </div>

                <div className={styles.usersList}>
                    {users.map((u) => (
                        <div key={u.id} className={styles.userItem}>
                            <div className={styles.user}>
                                <img className={styles.pfp} src={u.pfpUrl} />
                                <p>{u.fullName}</p>
                            </div>
                            <div className={styles.actionBtnsWrapper}>
                                <div
                                    className={styles.actionBtn}
                                    onClick={() => navigate(`/users/${u.id}`)}
                                >
                                    <CircleUser />
                                    <span className={styles.tooltip}>
                                        View profile
                                    </span>
                                </div>
                                <div
                                    className={styles.actionBtn}
                                    onClick={() => handleUserClick(u.id)}
                                >
                                    <MessageCircleMore />
                                    <span
                                        className={[
                                            styles.tooltip,
                                            styles.msgTooltip,
                                        ].join(" ")}
                                    >
                                        Message
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {error && <div> {error} </div>}
            </div>
        </>
    );
}
