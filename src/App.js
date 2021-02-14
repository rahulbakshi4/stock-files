import SignUp from "./Components/Authentication/SignUp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <div className="App">
     <SignUp/>
    </div>
    </AuthProvider>
  );
}

export default App;
