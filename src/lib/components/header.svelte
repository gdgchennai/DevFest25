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

	<Button href="https://konfhub.com/devfest-2025-chennai#tickets" target="_blank">
		Get Tickets
	</Button>
</header>
