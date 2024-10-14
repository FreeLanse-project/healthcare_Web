import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/about" element={""} />
        <div>hello</div>
      </Routes>
    </Router>
  );
}

export default App;
