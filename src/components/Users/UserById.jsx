import useUserById from "../../hooks/useUserById";
import styles from "./UsersById.module.css";

export default function UserById() {
    const { user, loading, error } = useUserById();

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <>
            {user && (
                <div>
                    {/*<img src={user.pfpUrl} alt="User's PFP"/>*/}
                    <p>{user.fullName}</p>
                    <p>{user.bio}</p>
                </div>
            )}
        </>
    );
}
