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
		description = 'Join us on Nov 8, 2025 for one crisp day of real talks, hands-on builds, and friendly people. Come ship something new and meet your crew.',
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
		<div class="mb-4 flex items-center gap-2">
			<svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				></path>
			</svg>
			<p class="text-lg font-semibold text-gray-900">November 8, 2025</p>
		</div>
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
