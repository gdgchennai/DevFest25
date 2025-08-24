<script lang="ts">
	import {
		Target,
		Clock,
		Users,
		Battery,
		Calendar,
		Download,
		MessageCircle,
		Hash,
		Utensils
	} from '@lucide/svelte';

	interface TipItem {
		text: string;
		bgColor: string;
		textColor: string;
		rotation: string;
		icon: any;
	}

	interface InsiderTipsProps {
		title?: string;
		subtitle?: string;
		tips?: TipItem[];
	}

	let {
		title = 'Insider tips',
		subtitle = 'Make most of your day',
		tips = [
			{
				text: 'Pick one track & go deep!',
				bgColor: 'bg-blue-100',
				textColor: 'text-blue-700',
				rotation: 'rotate-[-2deg]',
				icon: Target
			},
			{
				text: 'Book workshop seats early, they fill up fast!',
				bgColor: 'bg-orange-100',
				textColor: 'text-orange-700',
				rotation: 'rotate-[1deg]',
				icon: Clock
			},
			{
				text: 'Leave space to meet people & make connections',
				bgColor: 'bg-purple-100',
				textColor: 'text-purple-700',
				rotation: 'rotate-[2deg]',
				icon: Users
			},
			{
				text: "Bring business cards & don't forgot to charge your laptop",
				bgColor: 'bg-red-100',
				textColor: 'text-red-700',
				rotation: 'rotate-[-1deg]',
				icon: Battery
			},
			{
				text: 'Arrive 30 mins early to grab the best seats & free swag',
				bgColor: 'bg-green-100',
				textColor: 'text-green-700',
				rotation: 'rotate-[3deg]',
				icon: Calendar
			},
			{
				text: 'Download session slides & speaker contact info during breaks',
				bgColor: 'bg-yellow-100',
				textColor: 'text-yellow-700',
				rotation: 'rotate-[-2deg]',
				icon: Download
			},
			{
				text: 'Ask questions! Speakers love engaged audiences',
				bgColor: 'bg-pink-100',
				textColor: 'text-pink-700',
				rotation: 'rotate-[1deg]',
				icon: MessageCircle
			},
			{
				text: 'Follow #DevFestChennai on social for live updates & photos',
				bgColor: 'bg-indigo-100',
				textColor: 'text-indigo-700',
				rotation: 'rotate-[-3deg]',
				icon: Hash
			},
			{
				text: "Lunch break = prime networking time, don't eat alone!",
				bgColor: 'bg-teal-100',
				textColor: 'text-teal-700',
				rotation: 'rotate-[2deg]',
				icon: Utensils
			}
		]
	}: InsiderTipsProps = $props();
</script>

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-6 lg:p-10">
	<div>
		<h3
			class="mb-2 text-3xl font-bold transition-all duration-300 hover:scale-105"
			style="font-family: 'Caveat', sans-serif;"
		>
			{title}
		</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
	</div>
	<div class="flex flex-col gap-3 space-y-3">
		{#each tips as tip, index (tip.text)}
			<div
				class="group transform rounded-full px-6 py-3 text-center {tip.bgColor} {tip.textColor} {tip.rotation} flex cursor-pointer items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-105 hover:rotate-0 hover:shadow-sm"
				style="animation-delay: {index * 100}ms;"
			>
				<div class="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
					<tip.icon size={24} />
				</div>
				<span
					class="ml-3 text-start leading-tight transition-all duration-300 group-hover:font-medium"
				>
					{tip.text}
				</span>
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
