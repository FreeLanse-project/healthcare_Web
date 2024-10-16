import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screen/signIn/index";
import SignUp from "./screen/signUp";
import ForgetPassword from "./screen/forgetPassword/forget";
import ResetPassword from "./screen/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
