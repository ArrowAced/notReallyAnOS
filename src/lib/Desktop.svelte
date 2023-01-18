<script>
  import Window from './Window.svelte'
</script>

<div class="desktop">
  <Window width={400} height={300}>
    <p>this is paragraph</p>
    <textarea>this is input</textarea>
  </Window>
</div>

<style>
  .desktop {
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: hidden;
  }
</style>
