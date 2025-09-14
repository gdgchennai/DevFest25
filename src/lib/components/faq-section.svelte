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
				answer:
					'No, DevFest Chennai 2025 has two ticket categories: Student tickets and Professional tickets. Please check our registration page for current pricing.'
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
				question: 'Do you provide accommodation and travel assistance?',
				answer:
					'No, we do not provide accommodation or travel arrangements. Attendees are responsible for their own travel and accommodation arrangements.'
			}
		]
	}: FAQProps = $props();
</script>

<div class="rounded-3xl bg-white p-6 lg:p-10">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
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
