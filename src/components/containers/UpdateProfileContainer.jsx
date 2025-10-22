import { useState } from "react";
import { updateProfile } from "../../api/profile";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProfileContainer = () => {
    const [file, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("");
    const [uploadStatus, setUploadStatus] = useState("initial");

    const { id } = useParams();
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        setUploadStatus("uploading");
        const formData = new FormData();
        formData.append("pfpUrl", file);
        formData.append("bio", bio);
        updateProfile(id, formData)
            .then((data) => {
                // if (data) setSelectedFile(data);
                localStorage.setItem("pfpUrl", data.pfpUrl);
                navigate(`/user-profiles/${id}`);
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
        <div>
            <h1>Update your profile</h1> <p>PFP:</p>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} required />{" "}
                {file && (
                    <div>
                        <p>
                            Selected: {file.name} (
                            {(file.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                    </div>
                )}
                <input
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio"
                    required
                />
                <button
                    onClick={handleUpload}
                    disabled={uploadStatus === "uploading"}
                >
                    {uploadStatus === "uploading"
                        ? "Updating profile..."
                        : "Update"}
                </button>
                {uploadStatus === "success" && (
                    <p style={{ color: "green" }}>Upload successful!</p>
                )}
                {uploadStatus === "fail" && (
                    <p style={{ color: "red" }}>
                        Upload failed. Reduce file size less than 5mb or Check
                        your internet.
                    </p>
                )}
            </form>
        </div>
    );
};

export default UpdateProfileContainer;
