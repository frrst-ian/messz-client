import styles from "./ProfileItem.module.css";

const ProfileItem = ({ profile, onProfileClick }) => {
    if (!profile) {
        return <div>No profile found.</div>;
    }

    return (
        <div className={styles.profileItemContainer}>
            <img
                src={profile.pfpUrl}
                alt={`${profile.user.fullName}'s PFP`}
                className={styles.pfp}
            />
            <p className={styles.name}>{profile.user.fullName}</p>
            <button onClick={onProfileClick}>View Profile</button>
        </div>
    );
};

export default ProfileItem;
