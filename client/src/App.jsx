/* This code snippet is a basic setup for a React application using React Router. Here's a breakdown of
what it does: */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { LoginFormPage } from "./pages/LoginFormPage";
import { RegisterFormPage } from "./pages/RegisterFormPage";


function App() {
  return (
    <BrowserRouter>
      {/* This code snippet is setting up the routing configuration for a React application using React
      Router. Here's a breakdown of what each part does: */}
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/login-view" element={<StartPage />} />
        <Route path="/register" element={<RegisterFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
