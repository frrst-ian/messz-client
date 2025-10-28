import useUserById from "../../hooks/useUserById";

export default function UserById() {
    const { user, loading, error } = useUserById();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <>
            {user && (
                <div>
                    {/*<img src={user.pfpUrl} alt="User's PFP"/>*/}
                    <p>{user.fullName}</p>
                    <p>{user.bio}</p>
                </div>m ru
            )}
        </>
    );
}
