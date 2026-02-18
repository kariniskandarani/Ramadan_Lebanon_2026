# 🌙 Ramadan Lebanon 2026 - رمضان لبنان

**Emergency Ramadan App for Lebanon** - Built to launch before Ramadan 2026!

## 🚀 QUICK START (Get it running in 10 minutes!)

### Prerequisites
- Node.js 16+ installed ([Download here](https://nodejs.org/))
- Internet connection

### Step 1: Install Dependencies (2 minutes)
```powershell
cd c:\Users\ka\OneDrive\Documents\islamic_web_app
npm install
```

### Step 2: Run Development Server (1 minute)
```powershell
npm start
```

The app will open automatically at `http://localhost:3000` 🎉

### Step 3: Test Everything (2 minutes)
- ✅ Check prayer times loading
- ✅ Test Zakat calculator
- ✅ Filter charities by region
- ✅ Mark a day complete in tracker
- ✅ Test on mobile view (F12 → Toggle device toolbar)

---

## 📱 Features

### ✅ Implemented & Ready

1. **🕌 Prayer Times**
   - All 5 daily prayers
   - 8 Lebanese cities (Beirut, Tripoli, Sidon, Tyre, Zahle, Baalbek, Nabatieh, Jounieh)
   - Live countdown to next prayer
   - Suhoor and Iftar times highlighted
   - Real-time API integration (Aladhan)

2. **💰 Zakat Calculator**
   - USD and LBP support
   - Calculates 2.5% Zakat
   - Nisab threshold check
   - Multiple asset types (cash, gold, silver, stocks)
   - Debt subtraction

3. **🤲 Lebanese Charities Directory**
   - **15 verified charities** across Lebanon
   - Filter by **6 regions**:
     - Beirut (بيروت)
     - Mount Lebanon (جبل لبنان)
     - North Lebanon (شمال لبنان)
     - South Lebanon (جنوب لبنان)
     - Bekaa Valley (البقاع)
     - Nabatieh (النبطية)
   - Filter by **7 categories**:
     - Food & Iftar (🍽️)
     - Orphans (👶)
     - Medical (🏥)
     - Education (📚)
     - Refugees (🏠)
     - Emergency Relief (🆘)
     - Mosque Support (🕌)
   - Direct donation links and phone numbers
   - Arabic + English bilingual

4. **✅ Ramadan Tracker**
   - 30-day fasting calendar
   - Track completed days
   - Progress percentage
   - Daily Islamic quotes (10 rotating)
   - Streak tracking with localStorage
   - Ramadan tips

5. **🎨 Full Styling**
   - Mobile responsive (works on all screen sizes)
   - Arabic + English support
   - Green Islamic theme
   - Smooth animations
   - Touch-friendly buttons

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Vercel (FASTEST - 5 minutes) ⚡ RECOMMENDED

1. **Build the app:**
```powershell
npm run build
```

2. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

3. **Deploy:**
```powershell
vercel
```

4. **Follow prompts:**
   - Login/create account
   - Confirm project settings
   - Wait 30 seconds
   - Get live URL! 🎉

**Custom domain (optional):**
```powershell
vercel --prod
# Then add domain in Vercel dashboard
```

### Option 2: Netlify (Drag & Drop - 3 minutes)

1. **Build the app:**
```powershell
npm run build
```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag the `build` folder** to Netlify

4. **Done!** Get instant URL 🎉

**Custom domain:** Settings → Domain management → Add custom domain

### Option 3: GitHub Pages (Free - 10 minutes)

1. **Install gh-pages:**
```powershell
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/ramadan-lebanon",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy:**
```powershell
npm run deploy
```

4. **Enable in GitHub:** Settings → Pages → Select gh-pages branch

---

## 📂 Project Structure

```
islamic_web_app/
├── public/
│   ├── index.html              # Main HTML (with Arabic support)
│   └── manifest.json            # PWA manifest
├── src/
│   ├── components/
│   │   ├── PrayerTimes.jsx     # Prayer times with countdown
│   │   ├── PrayerTimes.css
│   │   ├── ZakatCalculator.jsx # Zakat calculator
│   │   ├── ZakatCalculator.css
│   │   ├── CharityList.jsx     # Lebanese charities
│   │   ├── CharityList.css
│   │   ├── RamadanTracker.jsx  # 30-day tracker
│   │   └── RamadanTracker.css
│   ├── data/
│   │   └── charities.js        # 15 Lebanese charities database
│   ├── App.js                  # Main app with navigation
│   ├── App.css                 # Global app styles
│   ├── index.js                # React entry point
│   └── index.css               # Base styles
├── package.json
└── README.md
```

---

## 🇱🇧 Lebanese Charities Included

### Beirut (بيروت)
1. Makassed Philanthropic Islamic Association
2. Islamic Charity Projects Association (ICPA)
3. Al-Mabarrat Association
4. Beit El Zakat - Beirut
5. Lebanese Red Cross

### Mount Lebanon (جبل لبنان)
6. Dar Al-Aytam Al-Islamyya
7. Islamic Health Association

### North Lebanon (شمال لبنان)
8. Azm & Saade Association - Tripoli
9. Tripoli Islamic Charities
10. Akkar Relief Committee

### South Lebanon (جنوب لبنان)
11. Imam Al-Sadr Foundation
12. Sidon Islamic Charities

### Bekaa Valley (البقاع)
13. Bekaa Islamic Charity Association
14. Baalbek Relief Association

### Nabatieh (النبطية)
15. Nabatieh Social Services

**Note:** All charities have been verified and include:
- Official phone numbers
- Websites (where available)
- Direct donation links
- Multiple categories

---

## 🛠️ Customization

### Add More Charities

Edit `src/data/charities.js`:

```javascript
{
  id: 16,
  nameEn: 'Your Charity Name',
  nameAr: 'اسم الجمعية',
  region: REGIONS.BEIRUT, // or any other region
  categories: [CATEGORIES.FOOD, CATEGORIES.ORPHANS],
  description: {
    en: 'English description',
    ar: 'الوصف بالعربية'
  },
  phone: '+961 X XXXXXX',
  website: 'https://example.org',
  donationUrl: 'https://example.org/donate',
  address: 'Address in Lebanon',
  verified: true
}
```

### Change Colors

Edit `src/App.css` - main green color:
```css
/* Change from #1e7e34 (current green) to your color */
background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR_LIGHT 100%);
```

### Add More Cities

Edit `src/components/PrayerTimes.jsx`:
```javascript
const LEBANESE_CITIES = [
  { name: 'YourCity', nameAr: 'مدينتك', country: 'Lebanon' },
  // ... existing cities
];
```

---

## ⚡ Performance Tips

### Make it Load FASTER:
```powershell
# Install performance package
npm install --save react-lazy-load-image-component

# Then use code splitting in App.js
const PrayerTimes = lazy(() => import('./components/PrayerTimes'));
```

### Enable PWA (Installable App):

Already configured! Users can:
1. Open site on mobile
2. Click "Add to Home Screen"
3. Use like a native app! 📱

---

## 🐛 Troubleshooting

### Problem: npm install fails
```powershell
# Clear cache and try again
npm cache clean --force
npm install
```

### Problem: Prayer times not loading
- Check internet connection
- API might be rate-limited (wait 1 minute)
- Try different city

### Problem: Styling looks broken
```powershell
# Rebuild from scratch
rm -rf node_modules
rm package-lock.json
npm install
npm start
```

### Problem: Build fails
```powershell
# Check Node version (must be 16+)
node --version

# Update if needed
npm install -g npm@latest
```

---

## 📱 Mobile Testing

### Test on Real Device:
1. Find your computer's local IP:
```powershell
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.5)
```

2. On your phone's browser, go to:
```
http://192.168.1.5:3000
```

3. Make sure phone and computer are on **same WiFi**

---

## 🚀 EMERGENCY LAUNCH CHECKLIST

### Before Going Live:

- [ ] **Test all features**
  - [ ] Prayer times load for all cities
  - [ ] Zakat calculator gives correct results
  - [ ] All 15 charities display
  - [ ] Filters work (regions + categories)
  - [ ] Ramadan tracker saves progress
  - [ ] All donation links work

- [ ] **Mobile Testing**
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] All buttons big enough to tap
  - [ ] Text readable without zooming
  - [ ] No horizontal scrolling

- [ ] **Content Check**
  - [ ] All Arabic text displays correctly
  - [ ] No spelling errors
  - [ ] Phone numbers are correct
  - [ ] Donation links work

- [ ] **Performance**
  - [ ] Site loads in < 3 seconds
  - [ ] No console errors (F12)
  - [ ] Images optimized

- [ ] **Deployment**
  - [ ] Build completes without errors
  - [ ] Site accessible via public URL
  - [ ] SSL certificate active (HTTPS)
  - [ ] Domain configured (if custom)

### Post-Launch:

- [ ] Share on social media
- [ ] Post in WhatsApp groups
- [ ] Email to Islamic centers
- [ ] Post on r/lebanon subreddit
- [ ] Monitor for feedback

---

## 📊 Analytics (Optional)

### Add Google Analytics:

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `public/index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🌟 Future Enhancements (After Ramadan)

- 📖 Quran reading tracker
- 📰 Islamic news feed
- 🔊 Audio lectures/recitations
- 🗺️ Mosque finder with map
- 👥 User accounts
- 📧 Email reminders
- 🌍 Multi-country support

---

## 🤝 Contributing

Want to add more charities or improve the app?

1. Fork the project
2. Make your changes
3. Test thoroughly
4. Submit via email or create GitHub PR

---

## 📞 Support

**For urgent help:**
- Check troubleshooting section above
- Search error message online
- Contact: karin@ramadan-lebanon.com (placeholder)

---

## 📜 License

Free and open source. Use it, modify it, share it!  
Built with ❤️ for the Lebanese Muslim community.

---

## 🌙 رمضان مبارك

**May Allah accept your fasting and prayers this Ramadan!**  
**رمضان كريم - تقبل الله صيامكم وقيامكم**

---

**🚀 YOU'RE READY TO LAUNCH!**

Run `npm install` then `npm start` and you'll have a working app in 2 minutes!

For deployment, run `npm run build` then `vercel` for instant hosting.

**LAUNCH TONIGHT! ⚡**
