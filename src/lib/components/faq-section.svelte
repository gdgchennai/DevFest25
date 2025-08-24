<script lang="ts">
	interface FAQItem {
		question: string;
		answer: string;
	}

	interface FAQProps {
		title?: string;
		subtitle?: string;
		items?: FAQItem[];
	}

	let {
		title = 'FAQ',
		subtitle = 'Quick answers',
		items = [
			{
				question: 'When is DevFest Chennai 2025?',
				answer: 'Date will be announced soon.'
			},
			{
				question: 'Is this event free?',
				answer: 'Yes, DevFest is free for all attendees.'
			},
			{
				question: 'Who can attend?',
				answer: 'Developers, students, and tech enthusiasts are welcome.'
			},
			{
				question: 'Can I access the content after the event?',
				answer: 'YES! Get recordings, slides, and resources to continue learning.'
			},
			{
				question: 'Can I get help with travel and accommodation?',
				answer: 'YES! We provide information and support for travel arrangements.'
			}
		]
	}: FAQProps = $props();
</script>

<div class="rounded-3xl bg-white p-10">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="text-2xl font-medium">{subtitle}</h4>
	</div>
	<div class="space-y-4">
		{#each items as item, index (item.question)}
			<div class={index < items.length - 1 ? 'border-b border-gray-200 pb-4' : ''}>
				<h5 class="mb-2 text-lg font-medium">{item.question}</h5>
				<p class="text-gray-600">{item.answer}</p>
			</div>
		{/each}
	</div>
</div>
