<script lang="ts">
    import { uid } from "./store.js";

    let userID;
    uid.subscribe((value) => {
        userID = value;
    });
    console.log("UID From App: ", userID);
</script>

<div class="container">
    <div id="row">
        {#if userID}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Welcome {userID}
                    </h6>
                </div>
                <div class="card-body">
                    You can use this page to manage your clash configuration.
                    But first let's do a speed test to identify your internet
                    speed.
                </div>
            </div>
        {:else}
            <div class="card shadow mb-4 col-md-6">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Hello There!
                    </h6>
                </div>
                <div class="card-body">
                    Please use the "Log in with Telegram" button top right to
                    login to your telegram account
                </div>
            </div>
        {/if}
    </div>
</div>
