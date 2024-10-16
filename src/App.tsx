import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screen/signIn/index";
import SignUp from "./screen/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
