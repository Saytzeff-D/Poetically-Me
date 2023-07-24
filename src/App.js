import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Name from './components/Create Account/Name';
import Username from './components/Create Account/Username';
import Redirect from './pages/Redirect';
import Country from './components/Create Account/Country';
import State from './components/Create Account/State';
import BestDescribe from './components/Create Account/BestDescribe';
import DateOFBirth from './components/Create Account/DateOfBirth';
import SocialConnection from './components/Create Account/SocialConnection';
import Password from './components/Create Account/Password';
import EmailVerification from './components/Create Account/EmailVerification';
import Info from './components/Create Account/Info';
import Publish from './pages/Publish';
import HowToPublish from './pages/HowToPublish';
import PublishSteps from './pages/PublishSteps';
import TopPoems from './components/Poems/TopPoems';
import Profile from './pages/Profile';
import PoemDetails from './pages/PoemDetails';
import RightsAndPricing from './pages/Right-Pricing';
import Completed from './pages/Completed';
import AddNewCountries from './pages/AddNewCountries';
import AccountOverview from './components/Profile/AccountOverview';
import MyPoems from './components/Profile/MyPoems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Redirect />}
        />
        <Route 
          path='/profile'
          element={<Profile />}
        >
          <Route 
            path='/profile/'
            element={<AccountOverview />}
          />
          <Route 
            path='/profile/my-poems'
            element={<MyPoems />}
          />
        </Route>
        <Route 
          path='/home'
          element={<Home />}
        >
          <Route 
            path='/home/'
            element={<TopPoems />}
          />
        </Route>
        <Route 
          path='/summary'
          element={<PoemDetails />}
        />
        <Route 
          path='/rights-and-pricing'
          element={<RightsAndPricing />}
        />
        <Route 
          path='/add-new-countries'
          element={<AddNewCountries />}
        />
        <Route 
          path='/completed'
          element={<Completed />}
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