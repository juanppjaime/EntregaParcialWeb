import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RobotDetail from "./components/RobotDetail";
import RobotList from "./components/RobotList";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { useState } from "react"; 

function App() {
  const [error, setError] = useState(''); 
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "pass") {
      setError('');
      console.log('Inicio de sesión exitoso');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} error={error} />} />
          <Route path="/robots" element={<RobotList />} />
          <Route path="/robots/:robotId" element={<RobotDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
