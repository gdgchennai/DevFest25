<script lang="ts">
	import { cn } from '$lib';
	import {
		Rocket,
		Handshake,
		Briefcase,
		Wrench,
		Users,
		Code,
		Award,
		Globe,
		Zap,
		Heart,
		Star,
		Target
	} from '@lucide/svelte';
	import { onMount } from 'svelte';

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
				title: 'Level Up Your Skills',
				description: "Seriously, you'll learn stuff that actually matters in the real world",
				bgColor: 'bg-blue-50'
			},
			{
				icon: Handshake,
				title: 'Meet Your People',
				description: "1500+ developers who get what you're going through",
				bgColor: 'bg-green-50'
			},
			{
				icon: Briefcase,
				title: 'Land That Job',
				description: 'Companies are literally hiring here. No kidding.',
				bgColor: 'bg-purple-50'
			},
			{
				icon: Wrench,
				title: 'Build Cool Stuff',
				description: 'Stop just reading about it - actually build something',
				bgColor: 'bg-orange-50'
			},
			{
				icon: Users,
				title: 'Find Your Tribe',
				description: 'Developers who actually want to help each other',
				bgColor: 'bg-pink-50'
			},
			{
				icon: Code,
				title: "See What's Next",
				description: "AI, cloud, mobile - see it all before it's everywhere",
				bgColor: 'bg-indigo-50'
			},
			{
				icon: Award,
				title: 'Get Noticed',
				description: 'Show off what you can do and get the recognition you deserve',
				bgColor: 'bg-teal-50'
			},
			{
				icon: Globe,
				title: 'Go Global',
				description: 'Connect with devs from everywhere. The world is smaller than you think',
				bgColor: 'bg-red-50'
			},
			{
				icon: Zap,
				title: 'Skip the Boring Parts',
				description: 'Learn the shortcuts that took others years to figure out',
				bgColor: 'bg-yellow-50'
			},
			{
				icon: Heart,
				title: 'Remember Why You Started',
				description: 'Reconnect with that feeling when you first wrote "Hello World"',
				bgColor: 'bg-rose-50'
			},
			{
				icon: Star,
				title: 'Learn from the Best',
				description: "People who actually know what they're talking about",
				bgColor: 'bg-amber-50'
			},
			{
				icon: Target,
				title: 'Make It Happen',
				description: 'Stop dreaming about it. Start doing it.',
				bgColor: 'bg-cyan-50'
			}
		]
	}: WhyJoinProps = $props();

	// Create duplicated benefits for seamless scrolling
	let duplicatedBenefits = $state([...benefits, ...benefits, ...benefits, ...benefits]);
	let scrollPosition = $state(0);
	let containerRef: HTMLDivElement;

	onMount(() => {
		const scrollSpeed = 1; // pixels per frame

		const animate = () => {
			scrollPosition += scrollSpeed;

			// Let it scroll continuously through all duplicated content
			// No reset needed - it will naturally loop through the duplicated array

			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);
	});
</script>

<div class="relative overflow-hidden rounded-3xl bg-white p-6 lg:p-10">
	<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>

	<!-- Gradient overlays for fade effect -->
	<div
		class="pointer-events-none absolute top-24 right-0 left-0 z-10 h-20 bg-gradient-to-b from-white via-white to-transparent"
	></div>

	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-20 bg-gradient-to-t from-white via-white to-transparent"
	></div>

	<!-- Marquee container -->
	<div bind:this={containerRef} class="relative h-80 overflow-hidden">
		<div
			class="space-y-4 transition-transform duration-1000 ease-linear"
			style="transform: translateY(-{scrollPosition}px)"
		>
			{#each duplicatedBenefits as benefit, index (index)}
				<div class="flex h-20 items-start gap-3">
					<div
						class={cn(
							'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
							getDynamicGradient(index % benefits.length)
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
</div>
