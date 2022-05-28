<script lang="ts">
    import { uid } from "./store.js";

    let userID;
    uid.subscribe((value) => {
        userID = value;
    });
    console.log("UID From App: ", userID);
</script>

<div class="container">
    <div class="row">
        {#if userID}
            <div class="card shadow mb-4 col-md-6">
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
            <div class="card shadow mb-4 col-md-6">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Speed Tester
                    </h6>
                </div>
                <div class="card-body">
                    <div style="text-align:right;">
                        <div style="min-height:360px;">
                            <div
                                style="width:100%;height:0;padding-bottom:50%;position:relative;"
                            >
                                <iframe
                                    style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;min-height:360px;border:none;overflow:hidden !important;"
                                    src="//www.metercustom.net/plugin/?th=w"
                                    title="Speed Test"
                                />
                            </div>
                        </div>
                    </div>
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
