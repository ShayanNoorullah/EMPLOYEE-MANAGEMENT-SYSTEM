import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EmployeeInfo from './pages/EmployeeInfo';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
  <div className="App">
    <Router>
      <div className="navbar">
      <Link to="/"> HOME PAGE</Link>
      <Link to="/AddEmployee"> ADD EMPLOYEE</Link>
      <Link to="/login"> LOGIN</Link>
      <Link to="/registration"> REGISTER</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/EmployeeInfo/:id" element={<EmployeeInfo />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </div>
  );
};
export default App;
