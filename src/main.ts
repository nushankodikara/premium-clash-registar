import App from "./App.svelte";
import { uid } from "./store.js";

// Get cookies from the browser
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// check if the cookie exists
try {
    uid.set(parseInt(getCookie("telegram_user_id")));
} catch (e) {
    console.log("Cookie not found");
}

const app = new App({
    target: document.getElementById("app"),
});

export default app;
