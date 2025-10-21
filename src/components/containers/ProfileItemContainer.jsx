import ProfileItem from "../presenters/ProfileItem/ProfileItem";
import { useNavigate } from "react-router-dom";

const ProfileItemContainer = ({ profile }) => {
    const navigate = useNavigate();

    const pfpUrl = localStorage.setItem("pfpUrl", profile.pfpUrl);

    const handleProfileClick = () => {
        navigate(`${profile.id}`);
    };

    return (
        <ProfileItem onProfileClick={handleProfileClick} profile={profile} />
    );
};

export default ProfileItemContainer;
