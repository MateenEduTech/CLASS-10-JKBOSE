# 📚 JKBOSE Class 10 Social Science Learning App
**Author: Mateen Yousuf**  
Teacher, School Education Department, Jammu and Kashmir

---

## 📁 File Structure

```
/jkbose-app/
├── index.html         ← Main app (open this!)
├── manifest.json      ← PWA configuration
├── service-worker.js  ← Offline caching
├── author.jpg         ← Your photo (add this manually)
└── README.md          ← This file
```

---

## 1️⃣ How to Save and Run Locally

1. Download all 3 files to the same folder on your computer
2. Add your photo as `author.jpg` in the same folder
3. Open `index.html` in any modern browser (Chrome recommended)
4. That's it! The app works completely offline.

> **Note:** For full PWA features (installability), you need to serve via a local server:
> - Install VS Code → Extensions → "Live Server" → Right-click index.html → Open with Live Server
> - Or: Install Python, then run: `python -m http.server 8080` in the folder

---

## 2️⃣ How to Host Free Online

### Option A: GitHub Pages (Recommended — Free Forever)
1. Create a free account at github.com
2. Create a new repository (e.g., `sst-class10-app`)
3. Upload all files to the repository
4. Go to Settings → Pages → Source: main branch
5. Your app will be live at: `https://yourusername.github.io/sst-class10-app`

### Option B: Netlify (Easiest)
1. Go to netlify.com → Sign up free
2. Drag and drop your app folder to the Netlify dashboard
3. Instant live URL in seconds!

### Option C: Vercel
1. Go to vercel.com → Sign up free
2. Import your GitHub repository
3. Auto-deploys on every update

---

## 3️⃣ How to Convert to Android APK

### Method A: PWA to APK using PWABuilder (Free)
1. Host your app online (Step 2 above)
2. Go to: https://www.pwabuilder.com
3. Enter your app's URL
4. Click "Generate" → Choose Android
5. Download the APK file
6. Install on Android: Settings → Security → Unknown Sources → ON

### Method B: Bubblewrap (Google's Official Tool)
1. Install Node.js from nodejs.org
2. Run: `npm install -g @bubblewrap/cli`
3. Run: `bubblewrap init --manifest https://yoursite.com/manifest.json`
4. Run: `bubblewrap build`
5. Get your APK file

---

## 4️⃣ How to Upload to Play Store

1. Create a Google Play Developer account ($25 one-time fee)
2. Use PWABuilder or Bubblewrap to generate signed APK/AAB
3. Go to play.google.com/apps/publish
4. Create New App → Upload APK → Fill details
5. Submit for review (usually 3-7 days)

---

## 📱 App Features

- ✅ 25 Chapters — History, Geography, Political Science, Economics
- ✅ 125+ Flashcards (5 per chapter)
- ✅ 125+ MCQ Questions (5 per chapter)
- ✅ 50 Reasoning Questions (2 per chapter)
- ✅ 25 Competency Challenges
- ✅ Interactive Maps (SVG-based)
- ✅ Timeline Explorer
- ✅ Subject Simulations
- ✅ Quiz with instant feedback & scoring
- ✅ Progress tracking & badges
- ✅ My Notes (save personal notes)
- ✅ Bookmarks
- ✅ Random Question Generator
- ✅ Dark/Light mode
- ✅ Fully offline (PWA)
- ✅ Mobile-first responsive design
- ✅ NEP 2020 & PARAKH aligned

---

## 🎨 Design Credits

- Author: Mateen Yousuf
- Curriculum: JKBOSE Class 10 Social Science
- Framework: NEP 2020, NCF, PARAKH
- Technology: Pure HTML/CSS/JavaScript (no frameworks)

---

*Made with ❤️ for students of Jammu and Kashmir*
