Books Chatbot (18k) - package
----------------------------
Files:
- index.html        : Frontend that loads books.json and talks to /api/gemini
- server.js         : Node/Express proxy example (replace Gemini endpoint & model as needed)
- convert.js        : Convert Excel (books.xlsx) to books.json using xlsx
- .env.example      : Example environment variables
- books.json        : (NOT included) Put your converted books.json here (18,000 records)

Quick start:
1. Put your books.xlsx next to convert.js and run: npm i xlsx && node convert.js
2. Copy .env.example to .env and set GEMINI_API_KEY
3. Run the server: npm init -y && npm i express node-fetch dotenv cors && node server.js
4. Open index.html in a browser (or serve it) and ensure the server is reachable at the same origin or adjust fetch URL.

Note: Do NOT put your API key in frontend. This package assumes you will run server.js locally or on a private host.
