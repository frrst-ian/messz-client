import { useState } from "react";
import { createProfile } from "../../api/profile";
import { useNavigate } from "react-router-dom";
import ProfileCreation from "../presenters/ProfileCreation/ProfileCreation";

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

    const handleUpload = (e) => {
        e.preventDefault();

        setUploadStatus("uploading");
        const formData = new FormData();
        formData.append("pfpUrl", file);
        formData.append("bio", bio);
        createProfile(formData)
            .then((data) => {
                // if (data) setSelectedFile(data);
                localStorage.setItem("pfpUrl", data.pfpUrl);
                navigate("/conversations");
                setUploadStatus("success");
            })
            .catch((error) => {
                console.error("Upload error:", error);
                setUploadStatus("fail");
            })
            .finally(() => {
                setUploadStatus("initial");
            });
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
