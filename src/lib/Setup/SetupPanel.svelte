<script>
	import { fade } from 'svelte/transition';
    import { isSetup } from "../../stores.js";
    import Window from "../Window.svelte"

    function byebyesetup() {
        console.log("hi")
        isSetup.set(false)
    }
</script>

<div class="setupPanel" transition:fade>
    <Window width={600} height={400} x={50} y={50} title="Welcome to notReallyAnOS">
        <p>setup goes here</p>
        <button on:click={byebyesetup}>okay</button>
    </Window>
</div>

<style>
    .setupPanel {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        backdrop-filter: blur(10px) brightness(1.2);
    }
</style>