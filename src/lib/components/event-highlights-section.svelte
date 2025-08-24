<script lang="ts">
	import { cn } from '$lib';
	import { Mic, Wrench, Users, Gift } from '@lucide/svelte';
	import type { ComponentType } from 'svelte';

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

<div
	class="flex flex-col items-start justify-between gap-2 rounded-3xl bg-white p-6 lg:col-span-2 lg:p-10"
>
	<div class="flex flex-col gap-2">
		<h3
			class="text-xl font-bold transition-all duration-300 hover:scale-105"
			style="font-family: 'Caveat', sans-serif;"
		>
			{title}
		</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
	</div>

	<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each highlights as highlight, index (highlight.title)}
			<div
				class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
				style="animation-delay: {index * 150}ms;"
			>
				<div
					class={cn(
						'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg',
						getDynamicGradient(index)
					)}
				>
					<highlight.icon
						size={24}
						class="text-white transition-transform duration-300 group-hover:scale-110"
					/>
				</div>
				<div class="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
					<h5 class="font-medium transition-all duration-300 group-hover:text-gray-800">
						{highlight.title}
					</h5>
					<p class="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
						{highlight.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	div[class*='group'] {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
