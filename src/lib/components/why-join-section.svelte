<script lang="ts">
	import { cn } from '$lib';
	import { 
		Rocket, 
		Handshake, 
		Briefcase, 
		Wrench 
	} from '@lucide/svelte';

	interface BenefitItem {
		icon: any;
		title: string;
		description: string;
		bgColor: string;
	}

	interface WhyJoinProps {
		title?: string;
		subtitle?: string;
		benefits?: BenefitItem[];
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
		title = 'Why join us?',
		subtitle = 'Your developer journey awaits',
		benefits = [
			{
				icon: Rocket,
				title: 'Learn & Grow',
				description: 'Master cutting-edge Google technologies',
				bgColor: 'bg-blue-50'
			},
			{
				icon: Handshake,
				title: 'Connect',
				description: 'Network with 500+ like-minded developers',
				bgColor: 'bg-green-50'
			},
			{
				icon: Briefcase,
				title: 'Career Boost',
				description: 'Access exclusive hiring opportunities',
				bgColor: 'bg-purple-50'
			},
			{
				icon: Wrench,
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
		{#each benefits as benefit, index (benefit.title)}
			<div class="flex items-start gap-3">
				<div
					class={cn(
						'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
						getDynamicGradient(index)
					)}
				>
					<benefit.icon size={20} class="text-white" />
				</div>
				<div>
					<h5 class="mb-1 font-medium text-gray-900">{benefit.title}</h5>
					<p class="text-sm text-gray-600">{benefit.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
