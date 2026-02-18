import React, { useState } from 'react';
import { GiTwoCoins, GiReceiveMoney } from 'react-icons/gi';
import { FaCalculator, FaDollarSign } from 'react-icons/fa';
import './ZakatCalculator.css';

const ZakatCalculator = () => {
  const [currency, setCurrency] = useState('USD');
  const [cash, setCash] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [stocks, setStocks] = useState('');
  const [property, setProperty] = useState('');
  const [debts, setDebts] = useState('');
  const [zakatAmount, setZakatAmount] = useState(null);

  // Nisab thresholds (approximate 2026 values)
  const NISAB_USD = 4928; // 87.48g gold
  const NISAB_LBP = 440000000; // Approximate given Lebanon's situation
  const EXCHANGE_RATE_LBP_TO_USD = 89000; // Approximate 2026 rate

  const calculateZakat = () => {
    const cashVal = parseFloat(cash) || 0;
    const goldVal = parseFloat(gold) || 0;
    const silverVal = parseFloat(silver) || 0;
    const stocksVal = parseFloat(stocks) || 0;
    const propertyVal = parseFloat(property) || 0;
    const debtsVal = parseFloat(debts) || 0;

    const totalAssets = cashVal + goldVal + silverVal + stocksVal + propertyVal;
    const zakatableAmount = totalAssets - debtsVal;

    const nisabThreshold = currency === 'USD' ? NISAB_USD : NISAB_LBP;

    if (zakatableAmount >= nisabThreshold) {
      const zakat = zakatableAmount * 0.025; // 2.5%
      setZakatAmount(zakat);
    } else {
      setZakatAmount(0);
    }
  };

  const formatCurrency = (amount) => {
    if (amount === null) return '';
    if (currency === 'USD') {
      return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} ل.ل`;
    }
  };

  return (
    <div className="zakat-calculator">
      <div className="calculator-header">
        <h2><GiTwoCoins style={{marginLeft: '8px'}} /> حاسبة الزكاة | Zakat Calculator</h2>
        <p className="subtitle">احسب زكاتك الواجبة لرمضان | Calculate your obligatory Zakat for Ramadan</p>
      </div>

      <div className="currency-selector">
        <label>العملة | Currency:</label>
        <div className="currency-buttons">
          <button 
            className={currency === 'USD' ? 'active' : ''}
            onClick={() => setCurrency('USD')}
          >
            💵 USD (Dollar)
          </button>
          <button 
            className={currency === 'LBP' ? 'active' : ''}
            onClick={() => setCurrency('LBP')}
          >
            💵 LBP (ليرة لبنانية)
          </button>
        </div>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label>💵 النقد والمدخرات | Cash & Savings</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>🪙 الذهب (القيمة) | Gold (Value)</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>⚪ الفضة (القيمة) | Silver (Value)</label>
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>📈 الأسهم والاستثمارات | Stocks & Investments</label>
          <input
            type="number"
            value={stocks}
            onChange={(e) => setStocks(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>🏠 العقارات (المؤجرة) | Rental Property Income</label>
          <input
            type="number"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>📉 الديون المستحقة | Debts Payable</label>
          <input
            type="number"
            value={debts}
            onChange={(e) => setDebts(e.target.value)}
            placeholder="0"
            className="form-input"
          />
        </div>

        <button onClick={calculateZakat} className="calculate-btn">
          احسب الزكاة | Calculate Zakat
        </button>

        {zakatAmount !== null && (
          <div className={`zakat-result ${zakatAmount > 0 ? 'has-zakat' : 'no-zakat'}`}>
            {zakatAmount > 0 ? (
              <>
                <div className="result-icon">✅</div>
                <div className="result-text">
                  <h3>زكاتك الواجبة | Your Zakat Due</h3>
                  <div className="zakat-amount">{formatCurrency(zakatAmount)}</div>
                  <p className="result-note">
                    الزكاة واجبة عليك - تبرع الآن<br />
                    Zakat is obligatory on you - Donate now
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon">ℹ️</div>
                <div className="result-text">
                  <h3>المجموع أقل من النصاب</h3>
                  <p>Your total is below Nisab threshold ({formatCurrency(currency === 'USD' ? NISAB_USD : NISAB_LBP)})</p>
                  <p>الزكاة غير واجبة، لكن يمكنك التبرع طوعاً</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="nisab-info">
        <h4>ℹ️ ما هو النصاب؟ | What is Nisab?</h4>
        <p>
          النصاب هو الحد الأدنى من المال الذي تجب فيه الزكاة (2.5%)
          <br />
          Nisab is the minimum threshold of wealth for Zakat to be obligatory (2.5%)
        </p>
        <ul>
          <li>النصاب بالذهب: 87.48 غرام | Gold Nisab: 87.48g</li>
          <li>النصاب بالدولار: ~${NISAB_USD.toLocaleString()} USD</li>
          {currency === 'LBP' && <li>النصاب بالليرة: ~{NISAB_LBP.toLocaleString()} ل.ل</li>}
        </ul>
      </div>
    </div>
  );
};

export default ZakatCalculator;
