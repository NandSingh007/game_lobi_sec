import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import Tds from './component/Tds';
import TermsConditons from './component/TermsConditons';
import Verifykyc from './component/Verifykyc';
import Setting from './component/Setting';
import Reported from './component/Reported';
import Refund from './component/Refund';
import Refer from './component/Refer';
import Privacy from './component/Privacy';
import { Block, Help } from '@mui/icons-material';
import FiarPolice from './component/FiarPolice';
import ExampleCarouselImage from './component/ExampleCarouselImage';
import Blocked from './component/Blocked';
import { Balloon } from 'react-bootstrap-icons';
import BallHeader from './component/BallPool.jsx/BallHeader';
import BallFooter from './component/BallPool.jsx/BallFooter';
import AvatarSlider from './component/AvatarSlider'
import BallPool from './component/BallPool.jsx/BallPool';
import Ludo from './component/Ludo/Ludo';
import Kyc_page from './component/Kyc_page';
import Myearning from './component/Myearning';
import Account from './component/Account';
import EditProfile from './component/EditProfile';
import Notification from './component/Notification';
import Wallet from './component/Wallet';
import Transaction_history from './component/Transaction_history';

function App() {
  // const navigate = useNavigate();
  const [showBallHeader, setShowBallHeader] = useState(false);
  useEffect(() => {
    const specialRoutes = ['/BallPool', '/Ludo', '/Casino'];
    setShowBallHeader(specialRoutes.includes(window.location.pathname));
  }, []);

  return (
    <div className="App">
      {/* {/* {
        showBallHeader ?
          (
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path='BallPool' element={<BallPool />} />
              <Route path='/Ludo' element={<Ludo />} />
              {/* <Route path='/Casino' element={<Casino />} /> */}
      {/* </Routes> */}
      {/* ) */}
      {/* : */}
      {/* // ( */}
      {/*           
          ) */}
      {/* } */}
      <>
        <Router>
          <Header />
          <Routes >
            
            <Route path="/" element={<Body />} />
            <Route path='/myearn' element={<Myearning />} />
            {/* <Route path='/BallPool' element={<Balloon />} /> */}
            <Route path="/tds" element={<Tds />} />
            <Route path="/termconditions" element={<TermsConditons />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/verifykyc" element={<Verifykyc />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/avtarslider" element={<AvatarSlider />} />
            <Route path="/reported" element={<Reported />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path='/kyc_page' element={<Kyc_page />} />
            <Route path="/transactionhistory" element={<Transaction_history />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/account" element={<Account />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/help" element={<Help />} />
            <Route path="/fairpolice" element={<FiarPolice />} />
            <Route path="/Example" element={<ExampleCarouselImage />} />
            <Route path="/Block" element={<Blocked />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
