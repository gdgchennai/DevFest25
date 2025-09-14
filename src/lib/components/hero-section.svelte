<script lang="ts">
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
		title = 'Devfest chennai',
		subtitle = 'Build. Learn. Connect',
		description = 'One day. Real talks. Hands–on builds, Friendly people. Come ship something new and meet your crew.',
		primaryCtaText = 'Register now',
		secondaryCtaText = 'See agenda',
		onPrimaryCtaClick = () => {},
		onSecondaryCtaClick = () => {}
	}: HeroProps = $props();
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
	<div class="flex gap-4">
		<div>
			<script src="https://widget.konfhub.com/widget.js" button_id="btn_0667ead42a4d"></script>
		</div>
		<!-- <Button variant="secondary" size="lg" onclick={onSecondaryCtaClick}>
			{secondaryCtaText}
		</Button> -->
	</div>
</div>
