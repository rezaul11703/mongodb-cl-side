import logo from './logo.svg';
import './App.css';
import Header from './Components/Headers/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Adduser from './Components/Adduser/Adduser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user/add" element={<Adduser></Adduser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
