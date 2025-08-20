<script lang="ts">
	interface TipItem {
		text: string;
		bgColor: string;
		textColor: string;
		rotation: string;
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
				rotation: 'rotate-[-2deg]'
			},
			{
				text: 'Book workshop seats early, they fill up fast!',
				bgColor: 'bg-orange-100',
				textColor: 'text-orange-700',
				rotation: 'rotate-[1deg]'
			},
			{
				text: 'Leave space to meet people & make connections',
				bgColor: 'bg-purple-100',
				textColor: 'text-purple-700',
				rotation: 'rotate-[2deg]'
			},
			{
				text: "Bring business cards & don't forgot to charge your laptop",
				bgColor: 'bg-red-100',
				textColor: 'text-red-700',
				rotation: 'rotate-[-1deg]'
			},
			{
				text: 'Arrive 30 mins early to grab the best seats & free swag',
				bgColor: 'bg-green-100',
				textColor: 'text-green-700',
				rotation: 'rotate-[3deg]'
			},
			{
				text: 'Download session slides & speaker contact info during breaks',
				bgColor: 'bg-yellow-100',
				textColor: 'text-yellow-700',
				rotation: 'rotate-[-2deg]'
			},
			{
				text: 'Ask questions! Speakers love engaged audiences',
				bgColor: 'bg-pink-100',
				textColor: 'text-pink-700',
				rotation: 'rotate-[1deg]'
			},
			{
				text: 'Follow #DevFestChennai on social for live updates & photos',
				bgColor: 'bg-indigo-100',
				textColor: 'text-indigo-700',
				rotation: 'rotate-[-3deg]'
			},
			{
				text: "Lunch break = prime networking time, don't eat alone!",
				bgColor: 'bg-teal-100',
				textColor: 'text-teal-700',
				rotation: 'rotate-[2deg]'
			}
		]
	}: InsiderTipsProps = $props();
</script>

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10">
	<div>
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
			{title}
		</h3>
		<h4 class="mb-6 text-2xl font-medium tracking-tight">{subtitle}</h4>
	</div>
	<div class="space-y-3">
		{#each tips as tip (tip.text)}
			<div
				class="transform rounded-full px-6 py-3 text-center {tip.bgColor} {tip.textColor} {tip.rotation}"
			>
				{tip.text}
			</div>
		{/each}
	</div>
</div>
