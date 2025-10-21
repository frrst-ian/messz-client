import { useState } from "react";
import { createProfile } from "../../api/profile";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
    const [file, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("");
    const [uploadStatus, setUploadStatus] = useState("initial");
    const navigate = useNavigate();

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
        <div>
            <h1>Create your profile</h1>
            <p>PFP:</p>
            <input type="file" onChange={handleFileChange} />
            <input
                type="text"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                required
            />

            {file && (
                <div>
                    <p>
                        Selected: {file.name} (
                        {(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <button
                        onClick={handleUpload}
                        disabled={uploadStatus === "uploading"}
                    >
                        {uploadStatus === "uploading"
                            ? "Creating profile..."
                            : "Create"}
                    </button>
                </div>
            )}

            {uploadStatus === "success" && (
                <p style={{ color: "green" }}>Upload successful!</p>
            )}
            {uploadStatus === "fail" && (
                <p style={{ color: "red" }}>
                    Upload failed. Reduce file size less than 5mb or Check your
                    internet.
                </p>
            )}
        </div>
    );
};

export default ProfileContainer;
