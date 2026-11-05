const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NovOS</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #050505;
      color: #fff;
      font-family: Arial, sans-serif;
    }
    .launch-card {
      text-align: center;
      padding: 40px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      background: #111;
    }
    .launch-button {
      padding: 15px 30px;
      font-size: 16px;
      font-weight: bold;
      background: #eee;
      color: #000;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 20px;
    }
    .launch-button:hover {
      background: #fff;
    }
  </style>
</head>
<body>
  <div class="launch-card">
    <h1>NovOS</h1>
    <p>Cloaking moved to main OS</p>
    <button class="launch-button" id="launchBtn">Launch →</button>
  </div>

  <script>
    const RAW_URL = "https://raw.githubusercontent.com/riaannn/NovOS/refs/heads/main/index.html";

    document.getElementById("launchBtn").addEventListener("click", async () => {
      const btn = document.getElementById("launchBtn");
      btn.textContent = "Launching...";
      
      const win = window.open("about:blank", "_blank");

      try {
        const response = await fetch(RAW_URL, { mode: "cors", cache: "no-store" });
        if (!response.ok) throw new Error("HTTP " + response.status);
        const html = await response.text();

        if (win) {
          win.document.open();
          win.document.write(html);
          win.document.title = "NovOS";
          win.document.close();
        }
        btn.textContent = "Launch →";
      } catch (error) {
        if (win) win.close();
        alert("Failed to load NovOS: " + error.message);
        btn.textContent = "Launch →";
      }
    });
  </script>
</body>
</html>`;

document.open();
document.write(htmlContent);
document.close();
