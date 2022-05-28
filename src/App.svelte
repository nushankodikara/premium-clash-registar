<script lang="ts">
    import { uid } from "./store.js";

    let userID;
    uid.subscribe((value) => {
        userID = value;
    });
    console.log("UID From App: ", userID);
</script>

<div class="row gx-5">
    {#if userID}
        <div class="card shadow mb-4 col">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                    Welcome {userID}
                </h6>
            </div>
            <div class="card-body">
                You can use this page to manage your clash configuration. But
                first let's do a speed test to identify your internet speed.
            </div>
        </div>
        <div class="card shadow mb-4 col-6">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Speed Tester</h6>
            </div>
            <div class="card-body">
                <h1 style="text-align: center ;">
                    <span id="result">0 / 0 Mb</span><br />
                    <span id="eta">0 sec</span>
                </h1>
                <br />
                <div class="progress">
                    <div
                        class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                        role="progressbar"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 10%"
                    />
                </div>
                <br />
                <div class="container">
                    <center>
                        <button class="btn btn-primary " data-file="5mb.bin"
                            >5M</button
                        >
                        <button class="btn btn-primary " data-file="10mb.bin"
                            >10M</button
                        >
                        <button class="btn btn-primary " data-file="100mb.bin"
                            >100M</button
                        >
                        <button class="btn btn-primary " data-file="200mb.bin"
                            >200M</button
                        >
                        <button class="btn btn-primary " data-file="500mb.bin"
                            >500M</button
                        >
                        <button class="btn btn-primary " data-file="1000mb.bin"
                            >1G</button
                        ></center
                    >
                </div>
            </div>
        </div>
    {:else}
        <div class="card shadow mb-4 col-6">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Hello There!</h6>
            </div>
            <div class="card-body">
                Please use the "Log in with Telegram" button top right to login
                to your telegram account
            </div>
        </div>
    {/if}
</div>
