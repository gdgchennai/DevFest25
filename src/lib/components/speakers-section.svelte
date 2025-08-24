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
			},
			{
				name: 'Ramachandran S',
				title: 'AI Engineer @ Bitwarden'
			},
			{
				name: 'Srinivasan S',
				title: 'Q&A Moderator'
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
			onclick={onCtaClick}
		>
			{ctaText}
		</button>
	</div>
	<div class="flex flex-row gap-12 overflow-x-auto scrollbar-hidden">
		{#each speakers as speaker (speaker.name)}
			<div class="text-center flex flex-col items-center">
				<div class="mb-6 size-72 bg-gray-200 shadow-lg border-4 border-white"></div>
				<h5 class="mb-2 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
					{speaker.name}
				</h5>
				<p class="text-lg text-gray-600">{speaker.title}</p>
			</div>
		{/each}
	</div>


</div>

	<style>
		.scrollbar-hidden {
			overflow: -moz-scrollbars-none; /* Firefox */
			-ms-overflow-style: none; /* Internet Explorer and Edge */
		}
		.scrollbar-hidden::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	</style>