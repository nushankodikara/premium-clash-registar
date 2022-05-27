import App from "./App.svelte";
import { uid } from "./store.js";

function onTelegramAuth(user) {
    alert(user.id);
    console.log("onTelegramAuth", user);
    uid.set(user.id);
}

const app = new App({
    target: document.getElementById("app"),
});

export default app;
