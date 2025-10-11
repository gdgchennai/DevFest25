<script lang="ts">
	import { onMount } from 'svelte';

	import { writable } from 'svelte/store';
	import { Button } from '@/components/ui/button/index.js';

	interface HeroProps {
		title?: string;
		subtitle?: string;
		description?: string;
		primaryCtaText?: string;
		secondaryCtaText?: string;
		onPrimaryCtaClick?: () => void;
		onSecondaryCtaClick?: () => void;
	}

	let {
		title = 'Build. Learn. Connect',
		subtitle = 'Devfest Chennai - Nov 8, 2025',
		description = 'One day. Real talks. Hands–on builds, Friendly people. Come ship something new and meet your crew.',
		primaryCtaText = 'Register now',
		secondaryCtaText = 'See agenda',
		onPrimaryCtaClick = () => {},
		onSecondaryCtaClick = () => {}
	}: HeroProps = $props();


	let showFallback = writable(false);
	
	onMount(() => {
		console.log('on mount')
		const container = document.getElementById('register-container');
		if (!container) return;

		console.log('on moun2')

		// Inject KonfHub script dynamically
		const script = document.createElement('script');
		script.src = 'https://widget.konfhub.com/widget.js';
		script.async = true;
		script.setAttribute('button_id', 'btn_0667ead42a4d');

		script.onload = () => {
			console.log('KonfHub scriptt loaded Hero');
			container.appendChild(script);
		}
		script.onerror = () => {
			// console.log('KonfHub script failed');
			showFallback = true;
		};

		// Fallback after 2 seconds
		setTimeout(() => {
			showFallback = true;
		}, 2000);
	});
</script>

<div
	class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-6 lg:col-span-2 lg:p-10"
>
	<div>
		<h2 class="mb-4 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
			{title}
		</h2>
		<h3 class="mb-4 text-5xl font-medium tracking-tight">{subtitle}</h3>
		<p class="text-xl leading-normal text-gray-600">
			{description}
		</p>
	</div>
	<div class="flex gap-4" id="register-container">
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
</div>
