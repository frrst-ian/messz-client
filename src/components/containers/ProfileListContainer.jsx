// import { useState, useEffect } from "react";
// import { getProfiles } from "../../api/profile";
// import ProfileList from "../presenters/ProfileList/ProfileList";
// import Sidebar from "../presenters/Sidebar/Sidebar";

// const ProfileListContainer = () => {
//     const [profiles, setProfiles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         getProfiles()
//             .then((data) => {
//                 if (data) {
//                     setProfiles(data);
//                 }
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <>
//             <Sidebar />
//             <ProfileList profiles={profiles} loading={loading} error={error} />
//         </>
//     );
// };

// export default ProfileListContainer;
