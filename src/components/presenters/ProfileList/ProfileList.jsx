import styles from "./ProfileList.module.css";
import ProfileItemContainer from "../../containers/ProfileItemContainer";

const ProfileList = ({ profiles, loading, error }) => {
    if (profiles.length === 0 && !loading) {
        return <p> No profiles. </p>;
    }

    return (
        <div className={styles.profileListContainer}>
            {loading && <div>Loading...</div>}
            {error && <span className={styles.error}>{error}</span>}
            {profiles.map((profile) => (
                <ProfileItemContainer key={profile.id} profile={profile} />
            ))}
        </div>
    );
};

export default ProfileList;
