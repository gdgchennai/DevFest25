<script lang="ts">
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

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10 lg:col-span-2">
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
		<button
			class="rounded-full bg-black px-6 py-4 font-medium text-white transition-colors hover:bg-gray-800"
			onclick={onPrimaryCtaClick}
		>
			{primaryCtaText}
		</button>
		<button
			class="rounded-full bg-gray-200 px-6 py-4 font-medium text-gray-700 transition-colors hover:bg-gray-300"
			onclick={onSecondaryCtaClick}
		>
			{secondaryCtaText}
		</button>
	</div>
</div>
