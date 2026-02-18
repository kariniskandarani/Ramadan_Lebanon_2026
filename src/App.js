import React, { useState } from 'react';
import PrayerTimes from './components/PrayerTimes';
import CharityList from './components/CharityList';
import RamadanTracker from './components/RamadanTracker';
import { FaMosque, FaHandHoldingHeart, FaCheckSquare, FaHome, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <PrayerTimes />
            <CharityList />
          </>
        );
      case 'prayer':
        return <PrayerTimes />;
      case 'charities':
        return <CharityList />;
      case 'tracker':
        return <RamadanTracker />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="arabic-title"><FaMoon style={{marginLeft: '10px'}} /> رمضان لبنان 2026</span>
            <span className="english-title">Ramadan Lebanon 2026</span>
          </h1>
          <p className="app-subtitle">
            مبارك عليكم الشهر الفضيل | Blessed Ramadan to you all
          </p>
        </div>
      </header>

      <nav className="app-nav">
        <button 
          className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <span className="nav-icon"><FaHome size={24} /></span>
          <span className="nav-label">الرئيسية<br/>Home</span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'prayer' ? 'active' : ''}`}
          onClick={() => setActiveTab('prayer')}
        >
          <span className="nav-icon"><FaMosque size={24} /></span>
          <span className="nav-label">الصلاة<br/>Prayer</span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'charities' ? 'active' : ''}`}
          onClick={() => setActiveTab('charities')}
        >
          <span className="nav-icon"><FaHandHoldingHeart size={24} /></span>
          <span className="nav-label">التبرعات<br/>Donate</span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'tracker' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracker')}
        >
          <span className="nav-icon"><FaCheckSquare size={24} /></span>
          <span className="nav-label">المتتبع<br/>Tracker</span>
        </button>
      </nav>

      <main className="app-main">
        {renderContent()}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>🇱🇧 صنع بحب في لبنان | Made with love in Lebanon 🇱🇧</p>
          <p className="footer-note">
            جميع الجمعيات موثقة | All charities are verified<br />
            لأي إضافة أو تعديل | For additions or corrections: contact@ramadan-lebanon.com
          </p>
          <div className="footer-year">© 2026 Ramadan Lebanon</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
