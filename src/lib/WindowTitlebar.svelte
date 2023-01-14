<script>
    import closeIcon from "../assets/close.svg"
    import maximizeIcon from "../assets/maximize.svg"
    import minimizeIcon from "../assets/minimize.svg"

    export let title = "Window";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let isDragged = false
    onmouseup = function() {
        isDragged = false
    }
    onmousemove = function(event) {
        if (isDragged) {
            dispatch('moveWindow', {"x": event.movementX, "y": event.movementY})
        }
    }
</script>

<div class="titlebar" on:mousedown={e => isDragged = true}>
    <p class="title">{title}</p>
    <img class="close button" src={closeIcon} alt="Close">
    <img class="max button" src={maximizeIcon} alt="Maximize">
    <img class="min button" src={minimizeIcon} alt="Minimize">
</div>

<style>
    .titlebar {
        width: 100%;
        height: 25px;
        background-color: rgb(54, 54, 54);

        display: flex;
		align-items: center;
		flex-direction: row-reverse;
		flex-wrap: nowrap;
        user-select: none;
        -webkit-user-select: none;
    }
    .title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-family: 'Rubik', sans-serif;
        font-weight: bold;
        font-size: 16px;
    }
    .button {
        position: relative;
        line-height: 0;
        height: 15px;
        padding-right: 8px;
    }
</style>