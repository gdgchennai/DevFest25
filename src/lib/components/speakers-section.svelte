<script lang="ts">
	interface Speaker {
		name: string;
		title: string;
		image?: string;
	}

	interface SpeakersProps {
		title?: string;
		subtitle?: string;
		ctaText?: string;
		onCtaClick?: () => void;
		speakers?: Speaker[];
	}

	let {
		title = 'Speakers',
		subtitle = 'People of craft',
		ctaText = 'View full',
		onCtaClick = () => {},
		speakers = [
			{
				name: 'Sanju Sivalingam',
				title: 'Founder & CEO @ Dun'
			},
			{
				name: 'Somasundaram M',
				title: 'Lead Engineer @ JioHotstar'
			},
			{
				name: 'Varun M',
				title: 'Co–founder & CTO @ Skcript'
			}
		]
	}: SpeakersProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-3">
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
				{title}
			</h3>
			<h4 class="text-4xl font-medium">{subtitle}</h4>
		</div>
		<button
			class="rounded-full bg-gray-200 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-300"
			on:click={onCtaClick}
		>
			{ctaText}
		</button>
	</div>
	<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
		{#each speakers as speaker (speaker.name)}
			<div class="text-center">
				<div class="mb-6 h-60 rounded-lg bg-gray-200 shadow-lg"></div>
				<h5 class="mb-2 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
					{speaker.name}
				</h5>
				<p class="text-lg text-gray-600">{speaker.title}</p>
			</div>
		{/each}
	</div>
</div>
