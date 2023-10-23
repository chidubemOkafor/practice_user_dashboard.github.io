import React, { useState } from 'react';
import { TabContext } from './context/TabContext';
import Home from './pages/Home';
import Bottombar from '../src/components/bottombar/Bottombar';
import Onboarding_pg from './pages/onboarding/Onboarding_pg';
import { SectionContext } from './context/SectionContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccountContext } from './context/AccountContext';

import './App.css';

function App() {
  const [tab, setTab] = useState('tab');
  const [step, setStep] = useState(1)
  const [account, setAccount] = useState({
    email: "",
    department: "",
    level: [],
    courses: []
  })
  
  return (
    <BrowserRouter>
    <AccountContext.Provider value = {{account, setAccount}}>
      <SectionContext.Provider value={{step, setStep}}>
        <TabContext.Provider value={{ tab, setTab }}>
          <Routes>
            <Route path="/home" element={
              <div>
                <Home />
                <div className="lg:hidden">
                  <Bottombar />
                </div>
              </div>
            } />
            <Route path='/' element={<Onboarding_pg/>}/>
          </Routes>
        </TabContext.Provider>
      </SectionContext.Provider>
      </AccountContext.Provider>
    </BrowserRouter>
  );
}

export default App;