// import { getAuthHeaders } from "../utils/auth";

// const API_URL = "http://localhost:3000/api";

// const createProfile = async (formData) => {
//     console.log(formData);
//     const res = await fetch(`${API_URL}/profile`, {
//         method: "POST",
//         headers: {
//             ...getAuthHeaders(),
//         },
//         body: formData,
//     });

//     if (!res.ok) {
//         const errorData = await res.json();
//         console.log("Error sending message: ", errorData);
//         throw new Error(errorData.error || "Message not sent");
//     }
//     return res.json();
// };

// const getProfiles = async () => {
//     const res = await fetch(`${API_URL}/profile`, {
//         method: "GET",
//         headers: {
//             ...getAuthHeaders(),
//         },
//     });

//     if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Failed to fetch profiles");
//     }

//     return res.json();
// };

// const getProfileById = async (id) => {
//     const res = await fetch(`${API_URL}/profile/${id}`, {
//         method: "GET",
//         headers: {
//             ...getAuthHeaders(),
//         },
//     });

//     if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Failed to fetch profile");
//     }

//     return res.json();
// };

// const updateProfile = async (id, formData) => {
//     const res = await fetch(`${API_URL}/profile/${id}`, {
//         method: "PUT",
//         headers: {
//             ...getAuthHeaders(),
//         },
//         body: formData,
//     });

//     if (res.status === 401) {
//         alert("Permission denied");
//     } else if (res.status === 404) {
//         alert("Profile Not Found");
//     } else if (res.ok) {
//         alert("Profile Updated");
//     }

//     if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Failed to fetch profile");
//     }

//     return res.json();
// };

// export { createProfile, getProfiles, getProfileById, updateProfile };
