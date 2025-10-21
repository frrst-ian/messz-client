const ProfileCreation = ({bio , onFileChange, setBio, file , onUpload,
uploadStatus}) => { return ( <div> <h1>Create your profile</h1> <p>PFP:</p>
<input type="file" onChange={onFileChange} /> <input type="text" name="bio"
value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio"
required
            />

            {file && (
                <div>
                    <p>
                        Selected: {file.name} (
                        {(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <button
                        onClick={onUpload}
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

export default ProfileCreation;
