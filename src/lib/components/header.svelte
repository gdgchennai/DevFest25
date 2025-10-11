<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Button } from '@/components/ui/button/index.js';

	let showFallback = writable(false);

	onMount(() => {
		const container = document.getElementById('konfhub-container');
		if (!container) return;

		// Inject KonfHub script dynamically
		const script = document.createElement('script');
		script.src = 'https://widget.konfhub.com/wiget.js'; // replace with real URL
		script.async = true;
		script.setAttribute('button_id', 'btn_0667ead42a4d');

		// script.onload = () => console.log('KonfHub script loaded');
		script.onerror = () => {
			// console.log('KonfHub script failed');
			showFallback = true;
		};

		container.appendChild(script);

		// Fallback after 2 seconds
		setTimeout(() => {
			console.log('Timessout called');
			showFallback = true;
		}, 2000);
	});
</script>

<header class="mx-auto mb-8 flex max-w-7xl items-center justify-between leading-snug">
	<img src="/core/logo.png" alt="DevFest Chennai" class="aspect-auto h-10" />

	<div id="konfhub-container">
		{#if showFallback}
			<a
				href="https://konfhub.com/devfest-2025-chennai"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button
					class="bg-black hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md shadow-md transition-colors"
				>
					Register now
				</Button>
			</a>
		{:else}
			<Button
				disabled
				class="opacity-70 cursor-wait bg-black text-white font-medium px-4 py-2 rounded-md shadow-md flex items-center gap-2"
			>
				<svg
					class="animate-spin h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
					></path>
				</svg>
				Loading…
			</Button>
		{/if}
	</div>
</header>
