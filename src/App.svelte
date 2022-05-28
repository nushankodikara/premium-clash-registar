<script lang="ts">
    import { uid } from "./store.js";

    let userID;
    uid.subscribe((value) => {
        userID = value;
    });
    console.log("UID From App: ", userID);
</script>
