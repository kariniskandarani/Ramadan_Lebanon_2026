import React, { useState } from 'react';
import { charities, REGIONS, REGION_NAMES, CATEGORIES, CATEGORY_NAMES, filterCharities } from '../data/charities';
import { FaHandHoldingHeart, FaUtensils, FaChild, FaHospital, FaGraduationCap, FaHome, FaExclamationTriangle, FaMosque, FaCheckCircle, FaPhoneAlt, FaGlobe, FaDonate, FaMapMarkerAlt } from 'react-icons/fa';
import './CharityList.css';

const CharityList = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [language, setLanguage] = useState('ar'); // 'ar' or 'en'

  const filteredCharities = filterCharities(selectedRegion, selectedCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      food: <FaUtensils />,
      orphans: <FaChild />,
      medical: <FaHospital />,
      education: <FaGraduationCap />,
      refugees: <FaHome />,
      emergency: <FaExclamationTriangle />,
      masjid: <FaMosque />
    };
    return icons[category] || <FaHandHoldingHeart />;
  };

  return (
    <div className="charity-section">
      <div className="section-header">
        <h2><FaHandHoldingHeart style={{marginLeft: '8px'}} /> تبرع الآن | Donate Now</h2>
        <p className="subtitle">
          جمعيات خيرية موثوقة في كل مناطق لبنان<br />
          Verified charities across all Lebanese regions
        </p>
        <div className="language-toggle">
          <button 
            className={language === 'ar' ? 'active' : ''}
            onClick={() => setLanguage('ar')}
          >
            العربية
          </button>
          <button 
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>
      </div>

      {/* Region Filter */}
      <div className="filter-section">
        <h3>🗺️ فلترة حسب المنطقة | Filter by Region</h3>
        <div className="filter-buttons">
          <button 
            className={selectedRegion === null ? 'active' : ''}
            onClick={() => setSelectedRegion(null)}
          >
            {language === 'ar' ? 'كل المناطق' : 'All Regions'} ({charities.length})
          </button>
          {Object.keys(REGIONS).map((key) => {
            const region = REGIONS[key];
            const count = charities.filter(c => c.region === region).length;
            return (
              <button
                key={region}
                className={selectedRegion === region ? 'active' : ''}
                onClick={() => setSelectedRegion(region)}
              >
                {REGION_NAMES[region][language]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3>📋 فلترة حسب النوع | Filter by Category</h3>
        <div className="filter-buttons category-buttons">
          <button 
            className={selectedCategory === null ? 'active' : ''}
            onClick={() => setSelectedCategory(null)}
          >
            {language === 'ar' ? 'كل الأنواع' : 'All Categories'}
          </button>
          {Object.keys(CATEGORIES).map((key) => {
            const category = CATEGORIES[key];
            return (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {CATEGORY_NAMES[category][language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedRegion || selectedCategory) && (
        <div className="active-filters">
          <span>الفلاتر النشطة | Active Filters:</span>
          {selectedRegion && (
            <span className="filter-tag">
              <FaMapMarkerAlt style={{marginLeft: '5px'}} /> {REGION_NAMES[selectedRegion][language]}
              <button onClick={() => setSelectedRegion(null)}>✕</button>
            </span>
          )}
          {selectedCategory && (
            <span className="filter-tag">
              {getCategoryIcon(selectedCategory)} {CATEGORY_NAMES[selectedCategory][language]}
              <button onClick={() => setSelectedCategory(null)}>✕</button>
            </span>
          )}
          <button 
            className="clear-filters"
            onClick={() => {
              setSelectedRegion(null);
              setSelectedCategory(null);
            }}
          >
            مسح الكل | Clear All
          </button>
        </div>
      )}

      {/* Charity Cards */}
      <div className="charity-grid">
        {filteredCharities.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <p>لا توجد جمعيات تطابق الفلاتر المحددة</p>
            <p>No charities match the selected filters</p>
          </div>
        ) : (
          filteredCharities.map((charity) => (
            <div key={charity.id} className="charity-card">
              <div className="charity-header">
                {charity.verified && <span className="verified-badge"><FaCheckCircle style={{marginLeft: '5px'}} /> موثق | Verified</span>}
                <h3 className="charity-name">
                  {language === 'ar' ? charity.nameAr : charity.nameEn}
                </h3>
                <p className="charity-region">
                  <FaMapMarkerAlt style={{marginLeft: '5px'}} /> {REGION_NAMES[charity.region][language]}
                </p>
              </div>

              <div className="charity-categories">
                {charity.categories.map((cat) => (
                  <span key={cat} className="category-tag">
                    {CATEGORY_NAMES[cat][language]}
                  </span>
                ))}
              </div>

              <p className="charity-description">
                {language === 'ar' ? charity.description.ar : charity.description.en}
              </p>

              <div className="charity-contact">
                {charity.phone && (
                  <div className="contact-item">
                    <span><FaPhoneAlt /></span>
                    <a href={`tel:${charity.phone}`}>{charity.phone}</a>
                  </div>
                )}
                {charity.address && (
                  <div className="contact-item">
                    <span><FaMapMarkerAlt /></span>
                    <span>{charity.address}</span>
                  </div>
                )}
              </div>

              <div className="charity-actions">
                {charity.website && (
                  <a 
                    href={charity.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaGlobe style={{marginLeft: '5px'}} /> {language === 'ar' ? 'الموقع' : 'Website'}
                  </a>
                )}
                {charity.donationUrl && (
                  <a 
                    href={charity.donationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaDonate style={{marginLeft: '5px'}} /> {language === 'ar' ? 'تبرع الآن' : 'Donate Now'}
                  </a>
                )}
                {!charity.donationUrl && charity.phone && (
                  <a 
                    href={`tel:${charity.phone}`}
                    className="btn btn-primary"
                  >
                    <FaPhoneAlt style={{marginLeft: '5px'}} /> {language === 'ar' ? 'اتصل للتبرع' : 'Call to Donate'}
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="charity-count">
        {language === 'ar' 
          ? `عرض ${filteredCharities.length} من ${charities.length} جمعية`
          : `Showing ${filteredCharities.length} of ${charities.length} charities`
        }
      </div>
    </div>
  );
};

export default CharityList;
