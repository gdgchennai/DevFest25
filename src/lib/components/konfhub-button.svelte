<script lang="ts">
	import { Button } from '@/components/ui/button/index.js';
	import { onMount } from 'svelte';

	interface KonfHubButtonProps {
		buttonId?: string;
		buttonText?: string;
		size?: 'default' | 'sm' | 'lg' | 'icon' | undefined;
		variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | undefined;
		class?: string;
	}

	let {
		buttonId = 'btn_0667ead42a4d',
		buttonText = 'Register now',
		size = 'lg',
		variant = 'default',
		class: className = ''
	}: KonfHubButtonProps = $props();

	let widgetLoaded = $state(false);
	let widgetFailed = $state(false);
	let scriptLoadAttempted = $state(false);

	onMount(() => {
		// Prevent multiple script loads
		if (scriptLoadAttempted) return;
		scriptLoadAttempted = true;

		// Check if script already exists
		const existingScript = document.querySelector('script[src*="widget.konfhub.com"]');

		if (existingScript) {
			// Widget script already loaded, wait a bit for it to initialize
			setTimeout(() => {
				widgetLoaded = true;
			}, 100);
			return;
		}

		// Create and load script asynchronously
		const script = document.createElement('script');
		script.src = 'https://widget.konfhub.com/widget.js';
		script.async = true;
		script.setAttribute('button_id', buttonId);

		script.onload = () => {
			widgetLoaded = true;
		};

		script.onerror = () => {
			widgetFailed = true;
			console.error('Failed to load KonfHub widget');
		};

		document.body.appendChild(script);
	});

	const handleFallbackClick = () => {
		// Direct link to KonfHub registration
		window.open('https://konfhub.com/devfest-chennai-2025', '_blank');
	};
</script>

{#if !widgetLoaded && !widgetFailed}
	<!-- Loading state -->
	<Button {size} {variant} class={className} disabled>
		<span class="flex items-center gap-2">
			<svg
				class="h-4 w-4 animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			Loading...
		</span>
	</Button>
{:else if widgetFailed}
	<!-- Fallback button if widget fails to load -->
	<Button {size} {variant} class={className} onclick={handleFallbackClick}>
		{buttonText}
	</Button>
{:else}
	<!-- KonfHub widget container -->
	<div class={className} data-konfhub-widget></div>
{/if}
