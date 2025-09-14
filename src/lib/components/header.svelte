<script lang="ts">
	import { Button } from '@/components/ui/button/index.js';

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

<header class="mx-auto mb-8 flex max-w-7xl items-center justify-between leading-snug">
	<h1 class="text-2xl font-medium text-gray-600">
		{title}<span class="text-gray-400">/{subtitle}</span>
	</h1>
	<div>
		<script src="https://widget.konfhub.com/widget.js" button_id="btn_0667ead42a4d"></script>
	</div>
</header>
