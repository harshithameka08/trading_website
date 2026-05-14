/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Mentors from './pages/Mentors';
import Insights from './pages/Insights';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import OTPVerification from './pages/Auth/OTPVerification';
import LegalPage from './pages/LegalPage';
import ToolDetails from './pages/ToolDetails';
import StrategyLibrary from './pages/StrategyLibrary';
import LiveClasses from './pages/LiveClasses';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Community from './pages/Community';
import LiveSession from './pages/LiveSession';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/:sub" element={<Platform />} />
          <Route path="/trading/:sub" element={<Platform />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:sub" element={<Insights />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          
          <Route path="/tools/:toolId" element={<ToolDetails />} />
          <Route path="/strategies" element={<StrategyLibrary />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/live-session" element={<LiveSession />} />
          <Route path="/blog" element={<Blog />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="/terms-conditions" element={<LegalPage title="Terms & Conditions" />} />
          <Route path="/refund-policy" element={<LegalPage title="Refund Policy" />} />
          <Route path="/cookie-policy" element={<LegalPage title="Cookie Policy" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
