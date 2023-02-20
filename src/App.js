import './App.css';
import Navbar from './components/Navbar';
import DataChild from './components/DataChild';
import {Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<DataChild />} />        
          <Route path="/:id" element={<DataChild />} />        
      </Routes>
    </div>
  );
}

export default App;
