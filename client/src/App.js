import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'; 
import Register from './pages/Register';
import SnuggleBoard from './pages/Snuggleboard';
import Information from './pages/information';
import Success from './pages/success';
import EditInfo from './pages/EditInfo';
import SuccessEdit from './pages/SuccessEdit';
import SuccessDelete from './pages/SuccessDelete';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/snuggleboard" element={<SnuggleBoard />} />
        <Route path="/information" element={<Information/>} />
        <Route path="/success/:id" element={<Success/>} />
        <Route path="/editinfo/:id" element={<EditInfo />} />
        <Route path="/success_edit" element={<SuccessEdit />} />
        <Route path="/success_delete" element={<SuccessDelete/>} />

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
