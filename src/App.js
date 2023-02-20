import './App.css';
import Home from './components/Home';
import DataChild from './components/DataChild';
import {Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
          <Route path="/:id" element={<DataChild />} />        
      </Routes>
    </div>
  );
}

export default App;
