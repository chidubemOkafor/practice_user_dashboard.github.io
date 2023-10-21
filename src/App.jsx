import React, { useState } from 'react';
import { TabContext } from './context/TabContext';
import Home from './pages/Home';
import Bottombar from './components/Bottombar';
import './App.css';

function App() {
  const [tab, setTab] = useState('tab');
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      <Home />
      <div className="lg:hidden">
        <Bottombar />
      </div>
    </TabContext.Provider>
  );
}

export default App;
