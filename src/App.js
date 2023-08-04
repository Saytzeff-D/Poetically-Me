import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Name from './components/create-account/Name';
import Username from './components/create-account/Username';
import Redirect from './pages/Redirect';
import Country from './components/create-account/Country';
import State from './components/create-account/State';
import BestDescribe from './components/create-account/BestDescribe';
import DateOFBirth from './components/create-account/DateOfBirth';
import Join from './components/create-account/Join';
import Password from './components/create-account/Password';
import EmailVerification from './components/create-account/EmailVerification';
import Info from './components/create-account/Info';
import Publish from './pages/Publish';
import HowToPublish from './pages/HowToPublish';
import PublishSteps from './pages/PublishSteps';
import Profile from './pages/Profile';
import PoemDetails from './pages/PoemDetails';
import RightsAndPricing from './pages/Right-Pricing';
import Completed from './pages/Completed';
import SetPoemVisibility from './pages/SetPoemVisibility';
import MyLibrary from './components/profile/MyLibrary';
import Statements from './components/profile/Statements';
import Referrals from './components/profile/Referral';
import Wallet from './components/profile/Wallet';
import MyShop from './components/profile/MyShop';
import MyPoems from './components/profile/MyPoems';
import Cart from './pages/Cart';
import PickedPoem from './pages/PickedPoem';
import TopPoems from './components/poems/TopPoems';
import AccountOverview from './components/profile/AccountOverview';

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
          <Route 
            path='/profile/my-shop'
            element={<MyShop />}
          />
          <Route 
            path='/profile/my-library'
            element={<MyLibrary />}
          />
          <Route 
            path='/profile/statements'
            element={<Statements />}
          />
          <Route 
            path='/profile/referrals'
            element={<Referrals />}
          />
          <Route 
            path='/profile/wallets'
            element={<Wallet />}
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
          <Route 
            path='/home/picked'
            element={<PickedPoem />}
          />
        </Route>
        <Route 
          path='/poem-details'
          element={<PoemDetails />}
        />
        <Route 
          path='/cart'
          element={<Cart />}
        />
        <Route 
          path='/rights-and-pricing'
          element={<RightsAndPricing />}
        />
        <Route 
          path='/visibility-and-pricing'
          element={<SetPoemVisibility />}
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
            path='/join/:code' 
            element={<Join />}            
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
            path='/join/name' 
            element={<Name />} 
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