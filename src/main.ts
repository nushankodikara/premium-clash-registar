import App from "./App.svelte";

let uid = 0;

const app = new App({
    target: document.getElementById("app"),
});

export default app;
