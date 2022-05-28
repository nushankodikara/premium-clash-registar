import App from "./App.svelte";
import { uid } from "./store.js";

const app = new App({
    target: document.getElementById("app"),
});

let cookies = document.cookie.split("; ");

// check if the cookie exists
if (cookies.includes("telegram_user_id")) {
    // get the uid from the cookie
    let token = parseInt(
        cookies
            .find((cookie) => cookie.startsWith("telegram_user_id="))
            .split("=")[1]
    );

    // set the uid in the app
    uid.set(token);
}

export default app;
