const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>page-v8iw7ka6</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
      color: #e2e8f0;
      display: flex;
      flex-direction: column;
    }
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .hero-content {
      text-align: center;
      max-width: 640px;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      border: 1px solid rgba(59, 130, 246, 0.3);
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(to right, #fff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      font-size: 1.125rem;
      color: #94a3b8;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 1.25rem;
      text-align: left;
      transition: border-color 0.2s;
    }
    .card:hover {
      border-color: rgba(59, 130, 246, 0.4);
    }
    .card-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .card h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #e2e8f0;
    }
    .card p {
      font-size: 0.75rem;
      color: #64748b;
      line-height: 1.5;
    }
    footer {
      padding: 1.5rem;
      text-align: center;
      font-size: 0.75rem;
      color: #475569;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    footer a {
      color: #60a5fa;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="hero-content">
      <span class="badge">Live</span>
      <h1>page-v8iw7ka6</h1>
      <p class="subtitle">
        This project is running on <strong>page-v8iw7ka6.pavlin.dev</strong>.<br>
        Push changes to the repository to deploy updates automatically.
      </p>
      <div class="cards">
        <div class="card">
          <div class="card-icon">&#x1f680;</div>
          <h3>Auto Deploy</h3>
          <p>Push to main and changes go live in seconds.</p>
        </div>
        <div class="card">
          <div class="card-icon">&#x1f433;</div>
          <h3>Docker Ready</h3>
          <p>Runs in a container. Change to any stack.</p>
        </div>
        <div class="card">
          <div class="card-icon">&#x1f310;</div>
          <h3>Custom Domain</h3>
          <p>Your project is live at page-v8iw7ka6.pavlin.dev.</p>
        </div>
      </div>
    </div>
  </div>
  <footer>
    Powered by <a href="#">Project Creator</a>
  </footer>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
