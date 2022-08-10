import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
    
  )
}

export default App
