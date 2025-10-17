<script lang="ts">
	import { Button } from '@/components/ui/button/index.js';
	import { page } from '$app/stores';

	interface HeaderProps {
		title?: string;
		subtitle?: string;
		ctaText?: string;
		onCtaClick?: () => void;
	}

	let {
		title = 'DevFest Chennai',
		subtitle = '25',
		ctaText = 'Register now',
		onCtaClick = () => {}
	}: HeaderProps = $props();

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="mx-auto mb-8 flex max-w-7xl items-center justify-between leading-snug">
	<div class="flex items-center gap-8">
		<img src="/core/logo.png" alt="DevFest Chennai" class="aspect-auto h-10" />

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-6 md:flex">
			<a
				href="/"
				class="text-gray-700 transition-colors duration-200 hover:text-blue-600 {$page.url
					.pathname === '/'
					? 'font-medium text-blue-600'
					: ''}"
			>
				Home
			</a>
			<a
				href="/agenda"
				class="text-gray-700 transition-colors duration-200 hover:text-blue-600 {$page.url
					.pathname === '/agenda'
					? 'font-medium text-blue-600'
					: ''}"
			>
				Agenda
			</a>
			<a
				href="/contact"
				class="text-gray-700 transition-colors duration-200 hover:text-blue-600 {$page.url
					.pathname === '/contact'
					? 'font-medium text-blue-600'
					: ''}"
			>
				Contact
			</a>
		</nav>
	</div>

	<div class="flex items-center gap-4">
		<Button href="https://konfhub.com/devfest-2025-chennai#tickets" target="_blank">
			Get Tickets
		</Button>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 md:hidden"
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if isMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if isMenuOpen}
		<div
			class="absolute top-full right-0 left-0 z-50 border-t border-gray-200 bg-white shadow-lg md:hidden"
		>
			<nav class="space-y-2 px-4 py-4">
				<a
					href="/"
					class="block rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 {$page
						.url.pathname === '/'
						? 'bg-blue-50 font-medium text-blue-600'
						: ''}"
					onclick={() => (isMenuOpen = false)}
				>
					Home
				</a>
				<a
					href="/agenda"
					class="block rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 {$page
						.url.pathname === '/agenda'
						? 'bg-blue-50 font-medium text-blue-600'
						: ''}"
					onclick={() => (isMenuOpen = false)}
				>
					Agenda
				</a>
				<a
					href="/contact"
					class="block rounded-lg px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 {$page
						.url.pathname === '/contact'
						? 'bg-blue-50 font-medium text-blue-600'
						: ''}"
					onclick={() => (isMenuOpen = false)}
				>
					Contact
				</a>
			</nav>
		</div>
	{/if}
</header>
