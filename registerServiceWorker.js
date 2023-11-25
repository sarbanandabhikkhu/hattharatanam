async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./serviceWorker.js");
      console.log(`ServiceWorker successfully registered.`);
    } catch (e) {
      console.error(`ServiceWorker registration failed!`);
    }
  }
}

export default registerServiceWorker;
