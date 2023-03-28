
import React from 'react';
import Login from './component/Login';
import { Route, Routes } from "react-router-dom";
import NoMatch from './component/NoMatch';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="center w85">
    <div className="ph3 pv1 background-gray">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard/:username" element={<Dashboard/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
