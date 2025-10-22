import ProfileItem from "../presenters/ProfileItem/ProfileItem";
import { useNavigate } from "react-router-dom";

const ProfileItemContainer = ({ profile }) => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate(`${profile.id}`);
    };

    return (
        <ProfileItem onProfileClick={handleProfileClick} profile={profile} />
    );
};

export default ProfileItemContainer;
