<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Button } from '@/components/ui/button/index.js';

	interface FinalCTAProps {
		title?: string;
		subtitle?: string;
	}

	let { title = 'DevFest 2025', subtitle = 'Ready to join?' }: FinalCTAProps = $props();

	const showFallback = writable(false);

	onMount(() => {
		const container = document.getElementById('register-container');
		if (!container) return;

		const script = document.createElement('script');
		script.src = 'https://widget.konfhub.com/widget.js';
		script.async = true;

		let widgetRendered = false;

		script.onload = () => {
			console.log('KonfHub script loaded');

			// Initialize the widget
			if (window.KonfHub && typeof window.KonfHub.Widget === 'function') {
				window.KonfHub.Widget({ button_id: 'btn_0667ead42a4d' });
			}

			// Poll for the button element
			const interval = setInterval(() => {
				const button = container.querySelector('#btn_0667ead42a4d');
				if (button) {
					widgetRendered = true;
					clearInterval(interval);
					console.log('KonfHub widget rendered');
				}
			}, 200);
		};

		script.onerror = () => {
			console.log('KonfHub script failed to load');
			showFallback.set(true);
		};

		container.appendChild(script);

		// Timeout fallback: if widget hasn't rendered after 3 seconds
		setTimeout(() => {
			if (!widgetRendered) {
				console.log('Widget did not render, showing fallback');
				showFallback.set(true);
			}
		}, 3000);
	});
</script>

<div class="rounded-3xl bg-white p-8 text-center lg:col-span-3 lg:p-20">
	<h3 class="mb-4 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="text-5xl font-medium">{subtitle}</h4>

	<div class="mt-12 flex justify-center" id="register-container">
		{#if $showFallback}
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
</div>
