<script lang="ts">
	import { cn } from '$lib';
	import { 
		Mic, 
		Wrench, 
		Users, 
		Gift 
	} from '@lucide/svelte';

	interface HighlightItem {
		icon: any;
		title: string;
		description: string;
		bgColor: string;
	}

	interface EventHighlightsProps {
		title?: string;
		subtitle?: string;
		highlights?: HighlightItem[];
	}

	// Dynamic gradient function
	function getDynamicGradient(index: number): string {
		const gradients = [
			'bg-gradient-to-b from-blue-300 to-blue-500',
			'bg-gradient-to-b from-green-300 to-green-500',
			'bg-gradient-to-b from-purple-300 to-purple-500',
			'bg-gradient-to-b from-orange-300 to-orange-500',
			'bg-gradient-to-b from-pink-300 to-pink-500',
			'bg-gradient-to-b from-indigo-300 to-indigo-500',
			'bg-gradient-to-b from-teal-300 to-teal-500',
			'bg-gradient-to-b from-red-300 to-red-500'
		];
		
		return gradients[index % gradients.length];
	}

	let {
		title = 'Event highlights',
		subtitle = 'Real impact, real community',
		highlights = [
			{
				icon: Mic,
				title: 'Expert Talks',
				description: 'Learn from industry leaders and Google Developer Experts',
				bgColor: 'bg-blue-100'
			},
			{
				icon: Wrench,
				title: 'Hands-on Workshops',
				description: 'Build real projects with latest Google technologies',
				bgColor: 'bg-green-100'
			},
			{
				icon: Users,
				title: 'Networking',
				description: 'Connect with fellow developers and potential employers',
				bgColor: 'bg-purple-100'
			},
			{
				icon: Gift,
				title: 'Swag & Prizes',
				description: 'Win amazing prizes and get exclusive Google swag',
				bgColor: 'bg-orange-100'
			}
		]
	}: EventHighlightsProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-2 flex flex-col gap-2 items-start justify-between">
<div class="flex flex-col gap-2">
		<h3 class="text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="text-2xl font-medium tracking-tight">{subtitle}</h4>
</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each highlights as highlight, index (highlight.title)}
			<div class="flex items-start space-x-4">
				<div
					class={cn(
						'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full',
						getDynamicGradient(index)
					)}
				>
					<highlight.icon size={24} class="text-white" />
				</div>
				<div>
					<h5 class="mb-2 font-medium">{highlight.title}</h5>
					<p class="text-gray-600">{highlight.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
