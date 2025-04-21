# 🤖 Bot Battlr

Welcome to **Bot Battlr**, a fun little React app where you can build your own custom bot army from a galactic catalog of mechanical misfits. It’s kind of like Pokémon, but with more lasers and less legality.

This was built as part of a code challenge to practice working with component hierarchies, props/state management, and data fetching using JSON Server.

---

## 🚦 What It Does

- Browse a list of bots (each with their own stats and personality).
- Click on a bot to see more detailed info.
- Choose to enlist a bot into your army.
- Bots can be toggled in and out of your army.

---

## 🛠 Tech Stuff

- **React** for the frontend (functional components + hooks)
- **JSON Server** for mocking the backend
---

## 🧪 How to Run It

### 1. Clone the repo
```bash
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr
2. Install dependencies
bash

npm install
3. Set up the JSON server
You’ll need to have json-server installed globally. If you don’t have it:

bash


npm install -g json-server
Then run:

bash

json-server --watch db.json --port 8001
4. Fire up the React app
bash

npm start
Now just head to http://localhost:3000 and you’re off to the races.

🌐 API Endpoints
GET /bots
Returns a list of all bots.

📜 License
This project is for educational purposes only. All robot data and images are for demo use.

