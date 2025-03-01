import { useUser } from "../../context/UserContext";

const UserProfile = () => {
    const { user, setUser } = useUser();

    return(
        <div>
            <h1>{user ?
                `Hello ${user.name}`:
                'No user logged in'}</h1>
            <button onClick={() => setUser({ id: 1, name: 'John Doe' })}>Set User</button>
        </div>
    );
};

export default UserProfile;