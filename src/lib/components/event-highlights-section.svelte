<script lang="ts">
	interface HighlightItem {
		emoji: string;
		title: string;
		description: string;
		bgColor: string;
	}

	interface EventHighlightsProps {
		title?: string;
		subtitle?: string;
		highlights?: HighlightItem[];
	}

	let {
		title = 'Event highlights',
		subtitle = 'Real impact, real community',
		highlights = [
			{
				emoji: '🎤',
				title: 'Expert Talks',
				description: 'Learn from industry leaders and Google Developer Experts',
				bgColor: 'bg-blue-100'
			},
			{
				emoji: '🛠️',
				title: 'Hands-on Workshops',
				description: 'Build real projects with latest Google technologies',
				bgColor: 'bg-green-100'
			},
			{
				emoji: '🤝',
				title: 'Networking',
				description: 'Connect with fellow developers and potential employers',
				bgColor: 'bg-purple-100'
			},
			{
				emoji: '🎁',
				title: 'Swag & Prizes',
				description: 'Win amazing prizes and get exclusive Google swag',
				bgColor: 'bg-orange-100'
			}
		]
	}: EventHighlightsProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-2">
	<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="mb-8 text-2xl font-medium tracking-tight">{subtitle}</h4>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each highlights as highlight (highlight.title)}
			<div class="flex items-start space-x-4">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full {highlight.bgColor}"
				>
					<span class="text-2xl">{highlight.emoji}</span>
				</div>
				<div>
					<h5 class="mb-2 font-medium">{highlight.title}</h5>
					<p class="text-gray-600">{highlight.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
