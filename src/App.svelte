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
                    speed.<br /><br />Please Notice: These configurations cannot
                    speed up your internet connection if you don't have enough
                    coverage or if your area is crowded. Please check with your
                    carrier before buying a plan.<br /><br />You can only use
                    these configurations to unlock carrier based website locks (
                    for an example if you bought a facebook package you will
                    only be able to use it for facebook. When using this
                    configuration that limitation will get removed. )
                </div>
            </div>
            <div class="card shadow mb-4 col-md-6">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Speed Tester
                    </h6>
                </div>
                <div class="card-body">
                    <div id="sc-container">
                        <div id="sc-branding" class="sc-bb">
                            <a
                                target="_blank"
                                href="https://www.speedcheck.org/"
                            >
                                <img
                                    src="https://cdn.speedcheck.org/branding/speedcheck-logo-18.png"
                                    alt="Speedcheck"
                                />
                            </a>
                        </div>
                    </div>
                    <script
                        src="https://cdn.speedcheck.org/basic/scbjs.min.js"
                        async></script>
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
