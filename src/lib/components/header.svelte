<script lang="ts">
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
</script>

<header class="mx-auto mb-8 flex max-w-7xl items-center justify-between">
	<h1 class="text-2xl font-medium text-gray-600">
		{title}<span class="text-gray-400">/{subtitle}</span>
	</h1>
	<button
		class="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
		onclick={onCtaClick}
	>
		{ctaText}
	</button>
</header>
