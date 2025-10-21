import styles from "./ProfileItem.module.css";

const ProfileItem = ({ profile, onProfileClick }) => {
    return (
        <div onClick={onProfileClick} className={styles.ProfileItemContainer}>
            <img
                src={profile.pfpUrl}
                alt={`${profile.user.fullName}'s Profile Picture`}
                className={styles.pfp}
            />
            <p className={styles.name}>{profile.user.fullName}</p>
            {/*<p className={styles.bio}>Bio: {profile.bio}</p>*/}
        </div>
    );
};

export default ProfileItem;
