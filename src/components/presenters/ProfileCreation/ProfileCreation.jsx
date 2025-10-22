const ProfileCreation = ({
    bio,
    onFileChange,
    setBio,
    file,
    onUpload,
    uploadStatus,
}) => {
    console.log("Upload Status:", uploadStatus);
    return (
        <div>
            <h1>Create your profile</h1> <p>PFP:</p>
            <form onSubmit={onUpload}>
                <input type="file" onChange={onFileChange} required />{" "}
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
                    </div>
                )}
                <button
                    onClick={onUpload}
                    disabled={uploadStatus === "uploading"}
                >
                    {uploadStatus === "uploading"
                        ? "Creating profile..."
                        : "Create"}
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

export default ProfileCreation;
