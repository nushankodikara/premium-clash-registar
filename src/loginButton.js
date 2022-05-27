import { uid } from "./store.js";

export function onTelegramAuth(user) {
    alert(user.id);
    console.log("onTelegramAuth", user);
    uid.set(user.id);
}
