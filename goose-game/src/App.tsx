import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => (
    <UserProvider>
        <UserProfile />
    </UserProvider>
);

export default App;