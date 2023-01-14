<script>
  import Desktop from "./lib/Desktop.svelte";
  import Taskbar from "./lib/Taskbar.svelte";
  import { isSetup } from "./stores.js";
  import Setup from "./lib/Setup/SetupPanel.svelte"
  document.addEventListener('contextmenu', event => event.preventDefault());

  let displaySetup;

  isSetup.subscribe(value => {
    displaySetup = value;
  });
</script>

<div class="main">
  {#if displaySetup}
    <Setup />
  {:else}
    <Desktop />
    <Taskbar />
  {/if}
</div>

<style>
  .main {
    height: 100vh;
    width: 100vw;
    background-image: url("./assets/wallpaper.svg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>


