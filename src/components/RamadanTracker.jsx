import React, { useState, useEffect } from 'react';
import './RamadanTracker.css';

const RAMADAN_QUOTES = [
  { ar: 'رمضان شهر القرآن والغفران', en: 'Ramadan is the month of Quran and forgiveness' },
  { ar: 'من صام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه', en: 'Whoever fasts Ramadan with faith, their past sins will be forgiven' },
  { ar: 'اللهم بلغنا رمضان وأعنا على صيامه وقيامه', en: 'O Allah, allow us to reach Ramadan and help us fast and pray during it' },
  { ar: 'في رمضان تفتح أبواب الجنة وتغلق أبواب النار', en: 'In Ramadan, the gates of Paradise open and the gates of Hell close' },
  { ar: 'الصائم له فرحتان: فرحة عند فطره وفرحة عند لقاء ربه', en: 'The fasting person has two joys: joy at breaking fast and joy at meeting their Lord' },
  { ar: 'رمضان شهر العبادة والتقوى', en: 'Ramadan is the month of worship and piety' },
  { ar: 'الدعاء عند الإفطار لا يرد', en: 'The supplication at iftar is not rejected' },
  { ar: 'صدقة الفطر طهرة للصائم', en: 'Zakat al-Fitr purifies the fasting person' },
  { ar: 'ليلة القدر خير من ألف شهر', en: 'Laylat al-Qadr is better than a thousand months' },
  { ar: 'أفطر على تمر فإن لم تجد فعلى ماء', en: 'Break your fast with dates, if not available then with water' }
];

const RamadanTracker = () => {
  const [completedDays, setCompletedDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [quote, setQuote] = useState(RAMADAN_QUOTES[0]);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    // Load saved progress from localStorage
    const saved = localStorage.getItem('ramadan-progress');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }

    // Calculate current Ramadan day (Feb 18 = Day 1)
    const ramadanStart = new Date('2026-02-18');
    const today = new Date();
    const daysPassed = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24)) + 1;
    const validDay = Math.max(1, Math.min(30, daysPassed));
    setCurrentDay(validDay);

    // Set daily quote - ensure index is always valid
    const quoteIndex = Math.max(0, Math.min((validDay - 1) % RAMADAN_QUOTES.length, RAMADAN_QUOTES.length - 1));
    setQuote(RAMADAN_QUOTES[quoteIndex]);
  }, []);

  const toggleDay = (day) => {
    let updated;
    if (completedDays.includes(day)) {
      updated = completedDays.filter(d => d !== day);
    } else {
      updated = [...completedDays, day];
    }
    setCompletedDays(updated);
    localStorage.setItem('ramadan-progress', JSON.stringify(updated));
  };

  const getProgress = () => {
    return Math.round((completedDays.length / 30) * 100);
  };

  const resetProgress = () => {
    setCompletedDays([]);
    localStorage.removeItem('ramadan-progress');
    setConfirmReset(false);
  };

  return (
    <div className="ramadan-tracker">
      <div className="tracker-header">
        <h2>✅ متتبع رمضان | Ramadan Tracker</h2>
        <p className="subtitle">تتبع أيام صيامك في رمضان المبارك | Track your fasting days this blessed Ramadan</p>
      </div>

      <div className="progress-summary">
        <div className="progress-stat">
          <div className="stat-value">{currentDay}/30</div>
          <div className="stat-label">اليوم الحالي | Current Day</div>
        </div>
        <div className="progress-stat">
          <div className="stat-value">{completedDays.length}/30</div>
          <div className="stat-label">أيام مكتملة | Completed Days</div>
        </div>
        <div className="progress-stat">
          <div className="stat-value">{getProgress()}%</div>
          <div className="stat-label">التقدم | Progress</div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${getProgress()}%` }}></div>
      </div>

      <div className="daily-quote">
        <div className="quote-icon">🌟</div>
        <div className="quote-content">
          <h4>كلمة اليوم | Quote of the Day</h4>
          <p className="quote-ar">{quote.ar}</p>
          <p className="quote-en">{quote.en}</p>
        </div>
      </div>

      <div className="days-grid">
        {[...Array(30)].map((_, index) => {
          const day = index + 1;
          const isCompleted = completedDays.includes(day);
          const isCurrent = day === currentDay;
          const isFuture = day > currentDay;

          return (
            <button
              key={day}
              className={`day-button ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isFuture ? 'future' : ''}`}
              onClick={() => !isFuture && toggleDay(day)}
              disabled={isFuture}
              title={isFuture ? 'يوم قادم | Future day' : isCompleted ? 'مكتمل | Completed' : 'غير مكتمل | Not completed'}
            >
              <div className="day-number">{day}</div>
              {isCompleted && <div className="check-mark">✓</div>}
              {isCurrent && <div className="current-indicator">اليوم</div>}
            </button>
          );
        })}
      </div>

      <div className="tracker-legend">
        <div className="legend-item">
          <span className="legend-box completed"></span>
          <span>صيام مكتمل | Fasting completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-box current"></span>
          <span>اليوم الحالي | Current day</span>
        </div>
        <div className="legend-item">
          <span className="legend-box"></span>
          <span>لم يتم إكماله | Not completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-box future"></span>
          <span>أيام قادمة | Future days</span>
        </div>
      </div>

      {completedDays.length === 30 && (
        <div className="completion-celebration">
          <h3>🎉 مبروك! أكملت رمضان!</h3>
          <h3>🎉 Congratulations! You completed Ramadan!</h3>
          <p>تقبل الله صيامك وقيامك | May Allah accept your fasting and prayers</p>
        </div>
      )}

      <div className="tracker-actions">
        {confirmReset ? (
          <div className="reset-confirm">
            <p className="reset-confirm-text">هل أنت متأكد؟ | Are you sure?</p>
            <div className="reset-confirm-buttons">
              <button onClick={resetProgress} className="confirm-yes-btn">✓ نعم | Yes</button>
              <button onClick={() => setConfirmReset(false)} className="confirm-no-btn">✕ لا | No</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirmReset(true)} className="reset-btn">
            🔄 إعادة تعيين | Reset Progress
          </button>
        )}
      </div>

      <div className="tracker-tips">
        <h4>💡 نصائح رمضانية | Ramadan Tips</h4>
        <ul>
          <li>استيقظ للسحور - قوة ليومك | Wake up for Suhoor - strength for your day</li>
          <li>اقرأ القرآن يومياً - جزء في اليوم | Read Quran daily - one juz per day</li>
          <li>صلِّ التراويح - قيام الليل | Pray Taraweeh - night prayers</li>
          <li>تصدق كل يوم - ولو بالقليل | Give charity daily - even if small</li>
          <li>ادعُ عند الإفطار - وقت إجابة | Make dua at iftar - time of acceptance</li>
          <li>ابحث عن ليلة القدر في العشر الأواخر | Seek Laylat al-Qadr in the last ten nights</li>
        </ul>
      </div>
    </div>
  );
};

export default RamadanTracker;
