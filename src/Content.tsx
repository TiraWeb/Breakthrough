import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import Leaderboards from './pages/Leaderboards';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import More from './pages/More';
import Settings from './pages/settings/Settings';
import Help from './pages/help/Help';
import Notifications from './pages/notifications/Notifications';
import Friends from './pages/friends/Friends';
import Privacy from './pages/privacy/Privacy';
import './Content.css';

function Content() {
  return (
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="learn" element={<Learn />} />
            <Route path="practice" element={<Practice />} />
            <Route path="leaderboards" element={<Leaderboards />} />
            <Route path="shop" element={<Shop />} />
            <Route path="profile" element={<Profile />} />
            <Route path="more" element={<More />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="friends" element={<Friends />} />
            <Route path="privacy" element={<Privacy />} />
          </Routes>
        </main>
      </div>
  );
}

export default Content;