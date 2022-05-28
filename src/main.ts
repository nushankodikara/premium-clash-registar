import App from "./App.svelte";
import { uid } from "./store.js";

let cookies = document.cookie.split("; ");

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    console.log("Cookie got");
}

// check if the cookie exists
if (cookies.includes("telegram_user_id")) {
    console.log("cookie exists");
    uid.set(parseInt(getCookie("telegram_user_id")));
}

const app = new App({
    target: document.getElementById("app"),
});

export default app;
