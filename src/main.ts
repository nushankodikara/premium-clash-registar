import App from "./App.svelte";

let uid = 0;

function onTelegramAuth(user) {
    alert(
        "Logged in as " +
            user.first_name +
            " " +
            user.last_name +
            " (" +
            user.id +
            (user.username ? ", @" + user.username : "") +
            ")"
    );

    uid = user.id;
}

const app = new App({
    target: document.getElementById("app"),
});

export default app;
