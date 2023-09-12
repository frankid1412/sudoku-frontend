import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignUpPage from './pages/signup_page/signup_page'
import SignInPage from './pages/signin_page/signin_page';
import HealthCheckPage from './pages/health_check_page/health_check_page';
import TranscribePage from "./pages/transcribe_page/transcribe_page"
import ConsolePage from './pages/ConsolePage/ConsolePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/health" element={<HealthCheckPage />} />
          <Route path="/console" element={<ConsolePage/>}/>
          <Route path="/transcribe" element={<TranscribePage/>} />
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;


