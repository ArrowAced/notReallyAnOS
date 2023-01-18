<script>
  import { fly } from 'svelte/transition'
</script>

<div class="taskbar" transition:fly={{ y: 50, duration: 1000, delay: 250 }} />

<style>
  .taskbar {
    width: 100vw;
    height: 50px;
    backdrop-filter: blur(5px) brightness(0.75) contrast(0.9);
  }
</style>
