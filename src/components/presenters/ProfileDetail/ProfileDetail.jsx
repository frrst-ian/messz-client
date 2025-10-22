import styles from "./ProfileDetail.module.css";

const ProfileDetail = ({ profile, loading, error }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!profile) {
        return <div>No profile found.</div>;
    }
    return (
        <div className="profileDetailContainer">
            <img
                src={profile.pfpUrl}
                alt={`${profile.user.fullName}'s Profile Picture`}
                className={styles.pfp}
            />
            <p>{profile.user.fullName}</p>
            <p>{profile.bio}</p>
        </div>
    );
};

export default ProfileDetail;
