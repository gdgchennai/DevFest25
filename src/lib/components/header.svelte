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
	<img src="/core/logo.png" alt="DevFest Chennai" class="aspect-auto h-10" />
	<div>
		<script src="https://widget.konfhub.com/widget.js" button_id="btn_0667ead42a4d" defer></script>
	</div>
</header>
