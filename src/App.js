import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Name from './components/Name';
import Username from './components/Username';
import Redirect from './pages/Redirect';
import Country from './components/Country';
import State from './components/State';
import BestDescribe from './components/BestDescribe';
import DateOFBirth from './components/DateOfBirth';
import SocialConnection from './components/SocialConnection';
import Password from './components/Password';
import EmailVerification from './components/EmailVerification';
import Info from './components/Info';
import Publish from './pages/Publish';
import HowToPublish from './pages/HowToPublish';
import PublishSteps from './pages/PublishSteps';
import TopPoems from './components/TopPoems';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Redirect />}
        />
        <Route 
          path='/dashboard'
          element={<Dashboard />}
        >
          <Route 
            path='/dashboard/'
            element={<TopPoems />}
          />
        </Route>
        <Route 
          path='/profile'
          element={<Profile />}
        />
        <Route 
          path='/join'
          element={<Register />}
        >
          <Route 
            path='/join/' 
            element={<Name />} 
          />
          <Route 
            path='/join/username' 
            element={<Username />} 
          />
          <Route 
            path='/join/country' 
            element={<Country />} 
          />
          <Route 
            path='/join/state' 
            element={<State />} 
          />
          <Route 
            path='/join/best-describe' 
            element={<BestDescribe />} 
          />
          <Route 
            path='/join/dateOfBirth' 
            element={<DateOFBirth />} 
          />
          <Route 
            path='/join/social' 
            element={<SocialConnection />} 
          />
          <Route 
            path='/join/password' 
            element={<Password />} 
          />
          <Route 
            path='/join/email-verification' 
            element={<EmailVerification />} 
          />
          <Route 
            path='/join/info' 
            element={<Info />} 
          />
        </Route>
        <Route 
          path='/publish'
          element={<Publish />}
        />
        <Route
          path='/login' 
          element={<Login />}
        />
        <Route 
          path='/how-to-publish'
          element={<HowToPublish />}
        />
        <Route 
          path='/publish-steps'
          element={<PublishSteps />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
