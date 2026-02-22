import React, { useState, useEffect } from 'react';
import { FaMosque, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { WiSunrise, WiDaySunny, WiSunset, WiNightClear, WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import './PrayerTimes.css';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Beirut');
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState('');
  const [nextPrayer, setNextPrayer] = useState('');

  const LEBANESE_CITIES = [
    { name: 'Beirut', nameAr: 'بيروت', country: 'Lebanon' },
    { name: 'Tripoli', nameAr: 'طرابلس', country: 'Lebanon' },
    { name: 'Sidon', nameAr: 'صيدا', country: 'Lebanon' },
    { name: 'Tyre', nameAr: 'صور', country: 'Lebanon' },
    { name: 'Zahle', nameAr: 'زحلة', country: 'Lebanon' },
    { name: 'Baalbek', nameAr: 'بعلبك', country: 'Lebanon' },
    { name: 'Nabatieh', nameAr: 'النبطية', country: 'Lebanon' },
    { name: 'Jounieh', nameAr: 'جونيه', country: 'Lebanon' }
  ];

  const PRAYER_NAMES = {
    Fajr: { ar: 'الفجر', icon: <WiSunrise size={40} /> },
    Sunrise: { ar: 'الشروق', icon: <WiDaySunny size={40} /> },
    Dhuhr: { ar: 'الظهر', icon: <WiDaySunny size={40} /> },
    Asr: { ar: 'العصر', icon: <WiSunset size={40} /> },
    Maghrib: { ar: 'المغرب', icon: <WiSunset size={40} /> },
    Isha: { ar: 'العشاء', icon: <WiNightClear size={40} /> }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, [selectedCity]);

  useEffect(() => {
    if (!prayerTimes) return;

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes]);

  const fetchPrayerTimes = async () => {
    setLoading(true);
    try {
      const city = LEBANESE_CITIES.find(c => c.name === selectedCity);
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city.name}&country=${city.country}&method=3`
      );
      const data = await response.json();
      if (data.code === 200) {
        setPrayerTimes(data.data.timings);
      }
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCountdown = () => {
    if (!prayerTimes) return;

    const now = new Date();
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    for (let prayer of prayers) {
      const prayerValue = prayerTimes[prayer];
      if (!prayerValue) continue;

      const [hours, minutes] = prayerValue.split(':');
      const prayerTime = new Date();
      prayerTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      if (prayerTime > now) {
        const diff = prayerTime - now;
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
        
        setNextPrayer(prayer);
        setCountdown(`${hoursLeft}:${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`);
        return;
      }
    }

    // If no prayer left today, show Fajr tomorrow
    setNextPrayer('Fajr');
    if (!prayerTimes.Fajr) {
      setCountdown('');
      setNextPrayer('');
      return;
    }

    const [hours, minutes] = prayerTimes.Fajr.split(':');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    const diff = tomorrow - now;
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    setCountdown(`${hoursLeft}:${String(minutesLeft).padStart(2, '0')} (غداً | Tomorrow)`);
  };

  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('ar-LB', options);
  };

  if (loading) {
    return (
      <div className="prayer-times loading-card">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <p className="loading-text">جاري التحميل... | Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="prayer-times">
      <div className="prayer-header">
        <h2><FaMosque style={{marginLeft: '8px'}} /> مواقيت الصلاة | Prayer Times</h2>
        <p className="date">{getCurrentDate()}</p>
      </div>

      <div className="city-selector">
        <label><FaMapMarkerAlt style={{marginLeft: '5px'}} /> اختر المدينة | Select City:</label>
        <select 
          value={selectedCity} 
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-dropdown"
        >
          {LEBANESE_CITIES.map((city) => (
            <option key={city.name} value={city.name}>
              {city.nameAr} | {city.name}
            </option>
          ))}
        </select>
      </div>

      {nextPrayer && prayerTimes && (
        <div className="next-prayer-countdown">
          <div className="countdown-content">
            <div className="countdown-icon">{PRAYER_NAMES[nextPrayer]?.icon}</div>
            <div className="countdown-text">
              <h3>الصلاة القادمة | Next Prayer</h3>
              <div className="prayer-name">
                {PRAYER_NAMES[nextPrayer]?.ar} | {nextPrayer}
              </div>
              {nextPrayer === 'Maghrib' && (
                <div className="iftar-note"><FaClock style={{marginLeft: '5px'}} /> وقت الإفطار | Iftar Time</div>
              )}
              {nextPrayer === 'Fajr' && (
                <div className="iftar-note"><FaClock style={{marginLeft: '5px'}} /> نهاية السحور | End of Suhoor</div>
              )}
              <div className="countdown-timer">{countdown}</div>
            </div>
          </div>
        </div>
      )}

      <div className="prayer-times-grid">
        {prayerTimes && Object.keys(PRAYER_NAMES).map((prayer) => (
          <div 
            key={prayer} 
            className={`prayer-card ${nextPrayer === prayer ? 'next-prayer' : ''}`}
          >
            <div className="prayer-icon">{PRAYER_NAMES[prayer].icon}</div>
            <div className="prayer-name-ar">{PRAYER_NAMES[prayer].ar}</div>
            <div className="prayer-name-en">{prayer}</div>
            <div className="prayer-time">{prayerTimes[prayer]}</div>
            {nextPrayer === prayer && <div className="next-badge">القادمة | Next</div>}
          </div>
        ))}
      </div>

      <div className="ramadan-reminders">
        <div className="reminder-card">
          <h4>🌅 السحور | Suhoor</h4>
          <p>ينتهي عند أذان الفجر: {prayerTimes?.Fajr}</p>
          <p className="small-text">Ends at Fajr prayer time</p>
        </div>
        <div className="reminder-card iftar-card">
          <h4>🌇 الإفطار | Iftar</h4>
          <p>يبدأ عند أذان المغرب: {prayerTimes?.Maghrib}</p>
          <p className="small-text">Begins at Maghrib prayer time</p>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
