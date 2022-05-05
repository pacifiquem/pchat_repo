import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Form from './pages/signUp'
import LoginForm from './pages/logIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>welcome home</h1>} />
        <Route path="/signup" element={<Form />}/>
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;