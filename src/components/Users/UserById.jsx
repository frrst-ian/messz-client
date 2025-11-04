import useUserById from "../../hooks/useUserById";
import styles from "./UsersById.module.css";
import Nav from '../Nav/Nav'

export default function UserById() {
    const { user, loading, error } = useUserById();

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <>
        <Nav></Nav>
            <div className={styles.userInfoWrapper} >
                {user && (
                    <div className={styles.userInfo} >
                        <img className={styles.pfp} src={user.pfpUrl} alt="User's PFP"/>
                        <h3 className={styles.name} >{user.fullName}</h3>
                        <div className={styles.bio} >
                            {user.bio}
                            <p>Bio</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
