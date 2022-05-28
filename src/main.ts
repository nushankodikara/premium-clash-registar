import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app"),
});

let cookies = document.cookie.split("; ");
console.log(cookies);

export default app;
