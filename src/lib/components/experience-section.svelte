<script lang="ts">
	interface ExperienceItem {
		text: string;
		bgColor: string;
		textColor: string;
		rotation: string;
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
				rotation: 'rotate-[-3deg]'
			},
			{
				text: 'Hiring',
				bgColor: 'bg-purple-100',
				textColor: 'text-purple-700',
				rotation: 'rotate-[-3deg]'
			},
			{
				text: 'Workshops',
				bgColor: 'bg-orange-100',
				textColor: 'text-orange-700',
				rotation: 'rotate-[3deg]'
			},
			{
				text: 'Community',
				bgColor: 'bg-green-100',
				textColor: 'text-green-700',
				rotation: 'rotate-[3deg]'
			}
		]
	}: ExperienceProps = $props();
</script>

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10">
	<div>
		<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
			{title}
		</h3>
		<h4 class="mb-6 text-2xl font-medium tracking-tight">{subtitle}</h4>
	</div>
	<div class="space-y-3">
		{#each items as item (item.text)}
			<div
				class="transform rounded-full px-6 py-3 text-center {item.bgColor} {item.textColor} {item.rotation}"
			>
				{item.text}
			</div>
		{/each}
	</div>
</div>
