import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./screen/signin_Page/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/about" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
