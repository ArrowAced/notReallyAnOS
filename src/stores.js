import { writable } from 'svelte/store';

export let windows = writable([])
export let isSetup = writable(true)