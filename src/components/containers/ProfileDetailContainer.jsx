import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../api/profile";
import ProfileDetail from "../presenters/ProfileDetail/ProfileDetail";
import Sidebar from "../presenters/Sidebar/Sidebar";

const ProfileDetailContainer = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { id } = useParams();

    useEffect(() => {
        getProfileById(id)
            .then((data) => {
                setProfile(data);
                console.log("data:", data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    // if (profile) {
    //     console.log("profile.pfpUrl:", profile.pfpUrl);
    //     console.log("profile.bio:", profile.bio);
    //     console.log("profile.user.fullName:", profile?.user?.fullName);
    // }

    return (
        <>
            <Sidebar />
            <ProfileDetail profile={profile} loading={loading} error={error} />
        </>
    );
};

export default ProfileDetailContainer;
