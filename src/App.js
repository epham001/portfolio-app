import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AFB from './pages/AFB';
import Chess from './pages/Chess';
import Cinema from './pages/Cinema';
import Discord from './pages/Discord';
import Distributed from './pages/Distributed';
import Hacks7 from './pages/Hacks7';
import Hacks8 from './pages/Hacks8';
import Hacks9 from './pages/Hacks9';
import Ryan from './pages/Ryan';
import Snake from './pages/Snake';
import Tuition from './pages/Tuition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/402nd-sweg" element={<AFB />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/cinema-e-booking-site" element={<Cinema />} />
        <Route path="/discord-bot" element={<Discord />} />
        <Route path="/distributed-systems" element={<Distributed />} />
        <Route path="/uga-hacks7" element={<Hacks7 />} />
        <Route path="/uga-hacks8" element={<Hacks8 />} />
        <Route path="/uga-hacks9" element={<Hacks9 />} />
        <Route path="/" element={<Home />} />
        <Route path="/ryanllc" element={<Ryan />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/tuition-data-viewer" element={<Tuition />} />
      </Routes>
    </Router>
  );
}

export default App;
