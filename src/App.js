import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';
import About from './components/About';
import DataChild from './components/DataChild';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<About />} />        
          <Route path="/:id" element={<DataChild />} />     
      </Routes>
    </div>
  );
}

export default App;
