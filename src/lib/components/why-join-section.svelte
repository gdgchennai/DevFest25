<script lang="ts">
	interface BenefitItem {
		emoji: string;
		title: string;
		description: string;
		bgColor: string;
	}

	interface WhyJoinProps {
		title?: string;
		subtitle?: string;
		benefits?: BenefitItem[];
	}

	let {
		title = 'Why join us?',
		subtitle = 'Your developer journey awaits',
		benefits = [
			{
				emoji: '🚀',
				title: 'Learn & Grow',
				description: 'Master cutting-edge Google technologies',
				bgColor: 'bg-blue-50'
			},
			{
				emoji: '🤝',
				title: 'Connect',
				description: 'Network with 500+ like-minded developers',
				bgColor: 'bg-green-50'
			},
			{
				emoji: '💼',
				title: 'Career Boost',
				description: 'Access exclusive hiring opportunities',
				bgColor: 'bg-purple-50'
			},
			{
				emoji: '🛠️',
				title: 'Build Real Projects',
				description: 'Hands-on workshops with expert guidance',
				bgColor: 'bg-orange-50'
			}
		]
	}: WhyJoinProps = $props();
</script>

<div class="rounded-3xl bg-white p-10">
	<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="mb-6 text-2xl font-medium tracking-tight">{subtitle}</h4>

	<div class="space-y-4">
		{#each benefits as benefit (benefit.title)}
			<div class="flex items-start gap-3">
				<div
					class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full {benefit.bgColor}"
				>
					<span class="text-sm">{benefit.emoji}</span>
				</div>
				<div>
					<h5 class="mb-1 font-medium text-gray-900">{benefit.title}</h5>
					<p class="text-sm text-gray-600">{benefit.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
