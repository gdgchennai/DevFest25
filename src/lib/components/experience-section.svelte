<script lang="ts">
	import { Mic, Briefcase, Wrench, Users } from '@lucide/svelte';

	interface ExperienceItem {
		text: string;
		bgColor: string;
		textColor: string;
		rotation: string;
		icon: any;
	}

	interface ExperienceProps {
		title?: string;
		subtitle?: string;
		items?: ExperienceItem[];
	}

	let {
		title = "What you'll get",
		subtitle = 'Experience includes',
		items = [
			{
				text: 'Talks',
				bgColor: 'bg-red-100',
				textColor: 'text-red-700',
				rotation: 'rotate-[-3deg]',
				icon: Mic
			},
			{
				text: 'Hiring',
				bgColor: 'bg-purple-100',
				textColor: 'text-purple-700',
				rotation: 'rotate-[-3deg]',
				icon: Briefcase
			},
			{
				text: 'Workshops',
				bgColor: 'bg-orange-100',
				textColor: 'text-orange-700',
				rotation: 'rotate-[3deg]',
				icon: Wrench
			},
			{
				text: 'Community',
				bgColor: 'bg-green-100',
				textColor: 'text-green-700',
				rotation: 'rotate-[3deg]',
				icon: Users
			}
		]
	}: ExperienceProps = $props();
</script>

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-6 lg:p-10">
	<div>
		<h3
			class="mb-2 text-xl font-bold transition-all duration-300 hover:scale-105"
			style="font-family: 'Caveat', sans-serif;"
		>
			{title}
		</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
	</div>
	<div class="space-y-3">
		{#each items as item, index (item.text)}
			<div
				class="group transform rounded-full px-6 py-3 text-center {item.bgColor} {item.textColor} {item.rotation} flex cursor-pointer items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-105 hover:rotate-0 hover:shadow-sm"
				style="animation-delay: {index * 100}ms;"
			>
				<div class="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
					<item.icon size={24} />
				</div>
				<span class="ml-3 text-start transition-all duration-300 group-hover:font-medium"
					>{item.text}</span
				>
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
