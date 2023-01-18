<script>
   import Titlebar from "./WindowTitlebar.svelte";
   export let x = 0;
   export let y = 0;
   export let height = 360;
   export let width = 480;
   export let title = "Window";

   function moveWindow(event) {
      x += event.detail.x;
      y += event.detail.y;
   }
   import { scale } from "svelte/transition";
</script>

<div
   class="window"
   style="top: {y}px; left: {x}px; width: {width}px;"
   transition:scale
>
   <div class="titlebar">
      <Titlebar {title} on:moveWindow={moveWindow} />
   </div>
   <div class="content" style="width: {width}px; height: {height}px;">
      <slot />
   </div>
</div>

<style>
   .content {
      overflow: scroll;
      background-color: rgb(37, 37, 37);
      color: white;
   }
   .window {
      position: absolute;
      background-color: rgb(37, 37, 37);
      overflow: hidden;
      border-radius: 5px;
      clip-path: border-box;
   }
</style>
