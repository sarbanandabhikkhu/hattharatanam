import icons from "./utils/icons.js";
import router from "./utils/router.js";
import registerServiceWorker from "./registerServiceWorker.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    <header>
      <div class="nav-opener">${icons.menu_burger}</div>
      <div class="tab__buttons">
        <a href="./" onclick="route()">Home</a>
        <a href="./about" onclick="route()">About</a>
        <a href="./contact" onclick="route()">Contact</a>
        <a href="./nothing" onclick="route()">Not Exist</a>
      </div>
      <div class="nav-items">${icons.menu_dots}</div>
    </header>
    <nav class="navigation">
      <div class="nav-closer"></div>
      <div class="nav-header">Navigation Header</div>
    </nav>
    <main>
    </main>
    <footer>
    </footer>
  `;

  router();
});

// registerServiceWorker();
