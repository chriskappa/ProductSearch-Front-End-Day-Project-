import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import PageDontExist from "./Pages/PageDontExist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./ContextAPI/useAuth";
import TestPage from "./Pages/TestPage";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="*" element={<PageDontExist />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
