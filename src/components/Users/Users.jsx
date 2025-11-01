import { useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import styles from "./Users.module.css";
import Nav from "../Nav/Nav";
import { Search,History } from "lucide-react";

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
                    <form onSubmit={handleSearch}>
                        <Search className={styles.searchIcon} color="#bfbfbf" />
                        <input
                            name="search"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                        />
                    </form>
                </div>
                <div className={styles.recent} >
                    <History color="#dedede" />
                    <p>Recent users...</p>
                </div>

                {users.map((u) => (
                    <div key={u.id} className={styles.userWrapper}>
                        <p>{u.fullName}</p>
                        <button onClick={() => handleUserClick(u.id)}>
                            Message
                        </button>
                        <button onClick={() => navigate(`/users/${u.id}`)}>
                            View profile
                        </button>
                    </div>
                ))}

                {error && <div> {error} </div>}
            </div>
        </>
    );
}
