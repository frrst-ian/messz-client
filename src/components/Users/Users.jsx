import useUsers from "../../hooks/useUsers";
import styles from "./Users.module.css";

export default function Users() {
    const { handleSearch, search, setSearch, users, loading, error , handleUserClick} =
        useUsers();

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.searchWrapper}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button onClick={handleSearch}>Search</button>
            {users.map((u) => (
                <div
                    key={u.id}
                    className={styles.userWrapper}
                    onClick={() => handleUserClick(u.id)}
                >
                    {u.fullName}
                </div>
            ))}
            {error && <div> {error} </div>}
        </div>
    );
}
