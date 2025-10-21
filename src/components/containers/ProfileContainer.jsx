import { useState } from "react";
import { createProfile } from "../../api/profile";
import { useNavigate } from "react-router-dom";
import ProfileCreation from "../presenters/ProfileCreation/ProfileCreation";
import ProfileList from "../presenters/ProfileList/ProfileList";

const ProfileContainer = () => {
    const [file, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("");
    const [uploadStatus, setUploadStatus] = useState("initial");
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) return;

        setUploadStatus("uploading");
        const formData = new FormData();
        formData.append("pfpUrl", file);
        formData.append("text", bio);
        createProfile(formData)
            .then(() => {
                // if (data) setSelectedFile(data);
                setUploadStatus("success");
            })
            .catch((error) => {
                console.error("Upload error:", error);
                setUploadStatus("fail");
            })
            .finally(() => {
                setUploadStatus("initial");
            });
        navigate("/conversations");
    };
    return (
        <>
            <ProfileCreation
                bio={bio}
                onFileChange={handleFileChange}
                setBio={setBio}
                onUpload={handleUpload}
                uploadStatus={uploadStatus}
            />
        </>
    );
};

export default ProfileContainer;
