import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PatientDetails from './components/PatientDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/patients/:id' element={<PatientDetails />} />
         <Route path='/' element={<Home />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
