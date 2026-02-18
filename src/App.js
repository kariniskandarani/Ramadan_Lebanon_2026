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
      case 'home': {
        const ramadanStart = new Date('2026-02-18');
        const today = new Date();
        const daysPassed = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24)) + 1;
        const ramadanDay = Math.max(1, Math.min(30, daysPassed));
        return (
          <div className="home-dashboard">
            <div className="home-welcome">
              <h2 className="home-welcome-title">🌙 مرحباً بكم | Welcome</h2>
              <p className="home-welcome-day">
                اليوم <strong>{ramadanDay}</strong> من رمضان المبارك &nbsp;|&nbsp; Day <strong>{ramadanDay}</strong> of Ramadan
              </p>
            </div>
            <div className="home-cards">
              <div className="home-card" onClick={() => setActiveTab('prayer')}>
                <div className="home-card-icon"><FaMosque size={36} /></div>
                <h3 className="home-card-title">
                  <span>مواقيت الصلاة</span>
                  <span>Prayer Times</span>
                </h3>
                <p className="home-card-desc">أوقات الصلاة لـ 8 مدن لبنانية مع عداد للصلاة القادمة | Live prayer times for 8 Lebanese cities</p>
                <span className="home-card-btn">عرض | View →</span>
              </div>
              <div className="home-card" onClick={() => setActiveTab('charities')}>
                <div className="home-card-icon"><FaHandHoldingHeart size={36} /></div>
                <h3 className="home-card-title">
                  <span>تبرع الآن</span>
                  <span>Donate Now</span>
                </h3>
                <p className="home-card-desc">جمعيات خيرية موثوقة في كل مناطق لبنان | Verified charities across all Lebanese regions</p>
                <span className="home-card-btn">عرض | View →</span>
              </div>
              <div className="home-card" onClick={() => setActiveTab('tracker')}>
                <div className="home-card-icon"><FaCheckSquare size={36} /></div>
                <h3 className="home-card-title">
                  <span>متتبع الصيام</span>
                  <span>Fasting Tracker</span>
                </h3>
                <p className="home-card-desc">تتبع أيام صيامك وقيامك في رمضان | Track your fasting and prayers throughout Ramadan</p>
                <span className="home-card-btn">عرض | View →</span>
              </div>
            </div>
          </div>
        );
      }
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
          <span className="nav-label"><span className="nav-label-ar">الرئيسية</span><span className="nav-label-en">Home</span></span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'prayer' ? 'active' : ''}`}
          onClick={() => setActiveTab('prayer')}
        >
          <span className="nav-icon"><FaMosque size={24} /></span>
          <span className="nav-label"><span className="nav-label-ar">الصلاة</span><span className="nav-label-en">Prayer</span></span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'charities' ? 'active' : ''}`}
          onClick={() => setActiveTab('charities')}
        >
          <span className="nav-icon"><FaHandHoldingHeart size={24} /></span>
          <span className="nav-label"><span className="nav-label-ar">التبرعات</span><span className="nav-label-en">Donate</span></span>
        </button>
        <button 
          className={`nav-button ${activeTab === 'tracker' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracker')}
        >
          <span className="nav-icon"><FaCheckSquare size={24} /></span>
          <span className="nav-label"><span className="nav-label-ar">المتتبع</span><span className="nav-label-en">Tracker</span></span>
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
