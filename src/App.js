import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import PageDontExist from "./Pages/PageDontExist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<PageDontExist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
