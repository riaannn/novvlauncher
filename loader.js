const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NovOS Launcher</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #050505;
      color: #ffffff;
      font-family: Arial, sans-serif;
      overflow: hidden;
    }
    .landing {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .launch-card {
      width: min(400px, 90vw);
      padding: 40px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      background: #0b0b0b;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    }
    h1 { font-size: 36px; margin-bottom: 10px; }
    p { color: #888; font-size: 14px; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 2px; }
    .launch-button {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 12px;
      background: #ffffff;
      color: #050505;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    .launch-button:hover { background: #d0d0d0; }
    #frame-container {
      display: none;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background: #000;
    }
    iframe { width: 100%; height: 100%; border: none; }
  </style>
</head>
<body>
  <div class="landing" id="landingScreen">
    <div class="launch-card">
      <h1>NovOS</h1>
      <p>Ready to Launch</p>
      <button class="launch-button" id="launchBtn">Launch</button>
    </div>
  </div>
  <div id="frame-container">
    <iframe id="osFrame" src=""></iframe>
  </div>
  <script>
    document.getElementById("launchBtn").addEventListener("click", () => {
      document.getElementById("osFrame").src = "https://riaannn.github.io/NovOS";
      document.getElementById("landingScreen").style.display = "none";
      document.getElementById("frame-container").style.display = "block";
    });
  </script>
</body>
</html>
`;

document.open();
document.write(htmlContent);
document.close();
