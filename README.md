# 🧠 CuriousMind - AI Learning Assistant

An AI-powered learning tool that explains curious questions in simple language with real-world examples and interactive exercises.

## ✨ Features

- 📖 **Simple Explanations** - Complex topics in easy language
- 🌍 **Real-World Examples** - Relatable analogies
- ✏️ **Practice Exercises** - Interactive quizzes
- 🎨 **Beautiful UI** - Premium dark theme

## 🚀 Deploy to GitHub (One-Time Setup)

### 1. Create GitHub Repo
Create a new repo at [github.com/new](https://github.com/new) named `curious-mind`

### 2. Push Your Code
```bash
cd C:\Users\offic\.gemini\antigravity\scratch\curious-mind
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/curious-mind.git
git push -u origin main
```

### 3. Add Your API Key as a Secret
1. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `VITE_GROQ_API_KEY`
4. Value: Your Groq API key
5. Click **Add secret**

### 4. Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**

### 5. Done! 🎉
The workflow will automatically build and deploy. Your app will be at:
```
https://YOUR_USERNAME.github.io/curious-mind/
```

## � Local Development

```bash
npm install
echo "VITE_GROQ_API_KEY=your_key" > .env
npm run dev
```

## 🛠️ Built With
React + Vite + Groq AI (Llama 3.3 70B)
