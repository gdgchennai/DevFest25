<script lang="ts">
	import { SEO } from '$lib/components';

	const seoConfig = {
		title: 'FAQ - DevFest Chennai 2025',
		description:
			'Frequently Asked Questions about DevFest Chennai 2025. Find answers to common questions about the event.',
		keywords: 'DevFest Chennai, FAQ, frequently asked questions, event information, GDG Chennai',
		url: 'https://devfest.gdgchennai.in/faq',
		type: 'website' as const
	};

	// FAQ data
	const faqCategories = [
		{
			title: 'General Information',
			questions: [
				{
					question: 'What is DevFest Chennai 2025?',
					answer:
						"DevFest Chennai 2025 is the premier developer conference organized by GDG Chennai, featuring cutting-edge tech talks, hands-on workshops, networking opportunities, and innovation showcases. It's a one-day event bringing together 500+ developers, tech enthusiasts, and industry leaders."
				},
				{
					question: 'When and where is the event?',
					answer:
						'DevFest Chennai 2025 will be held on November 8, 2025, in Chennai, India. The exact venue details will be announced soon. The event runs from 9:00 AM to 6:00 PM IST.'
				},
				{
					question: 'Who can attend DevFest Chennai?',
					answer:
						"DevFest Chennai is open to all developers, tech enthusiasts, students, and professionals interested in technology. Whether you're a beginner or an experienced developer, there's something for everyone at our event."
				},
				{
					question: 'Is there a registration fee?',
					answer:
						'DevFest Chennai 2025 is a free event! Registration is completely free, but spaces are limited. We encourage early registration to secure your spot.'
				}
			]
		},
		{
			title: 'Registration & Attendance',
			questions: [
				{
					question: 'How do I register for the event?',
					answer:
						"Registration will open soon! You can register through our website or the official GDG Chennai community platform. We'll send out notifications when registration opens."
				},
				{
					question: 'Can I transfer my registration to someone else?',
					answer:
						'No, registrations are non-transferable. Each registration is tied to the individual who registered and cannot be transferred to another person.'
				},
				{
					question: 'What should I bring to the event?',
					answer:
						"Please bring a valid ID for check-in, your laptop/device for hands-on workshops, a notebook for taking notes, and your enthusiasm for learning! We'll provide lunch and refreshments."
				},
				{
					question: "What if I can't attend after registering?",
					answer:
						"If you can't attend, please let us know as soon as possible so we can offer your spot to someone on the waiting list. You can contact us at contact@gdgchennai.in."
				}
			]
		},
		{
			title: 'Sessions & Content',
			questions: [
				{
					question: 'What topics will be covered?',
					answer:
						'We cover a wide range of topics including Web Development, Mobile Development (iOS/Android), AI/ML & Data Science, Cloud Computing & DevOps, Career Growth & Leadership, and Open Source & Community. The detailed agenda will be announced soon.'
				},
				{
					question: 'Will sessions be recorded?',
					answer:
						"Some sessions may be recorded for later viewing. However, not all sessions will be recorded due to speaker preferences and technical limitations. We'll announce which sessions will be available online after the event."
				},
				{
					question: 'Are there hands-on workshops?',
					answer:
						'Yes! We have several hands-on workshops where you can build real projects with the latest technologies. These workshops are interactive and provide hands-on experience with Google technologies and modern development tools.'
				},
				{
					question: 'Can I ask questions during sessions?',
					answer:
						'Absolutely! We encourage audience participation. Most sessions will have Q&A time, and you can also ask questions through our event app or by raising your hand during the session.'
				}
			]
		},
		{
			title: 'Networking & Community',
			questions: [
				{
					question: 'How can I network with other attendees?',
					answer:
						'We have dedicated networking sessions, lunch breaks, and coffee breaks designed for networking. You can also use our event app to connect with other attendees, join discussion groups, and schedule meetups.'
				},
				{
					question: 'Will there be sponsor booths?',
					answer:
						"Yes, we'll have sponsor booths where you can learn about job opportunities, new technologies, and connect with industry representatives. This is a great way to explore career opportunities."
				},
				{
					question: 'Can I share my contact information?',
					answer:
						'Yes, networking is encouraged! You can exchange business cards, connect on LinkedIn, or use our event app to share contact information with other attendees.'
				}
			]
		},
		{
			title: 'Accessibility & Accommodations',
			questions: [
				{
					question: 'Is the venue accessible?',
					answer:
						"Yes, we're committed to making DevFest Chennai accessible to everyone. The venue will have wheelchair access, accessible restrooms, and other accessibility features. Please contact us at accessibility@gdgchennai.in if you need specific accommodations."
				},
				{
					question: 'What dietary options are available?',
					answer:
						'We provide vegetarian, vegan, and gluten-free meal options. Please let us know about any specific dietary requirements during registration or contact us at accessibility@gdgchennai.in.'
				},
				{
					question: 'Is there parking available?',
					answer:
						"Yes, parking will be available at the venue. We'll provide detailed parking information closer to the event date, including accessible parking spaces."
				}
			]
		},
		{
			title: 'Technical & Logistics',
			questions: [
				{
					question: 'Will there be WiFi available?',
					answer:
						"Yes, free WiFi will be available throughout the venue for all attendees. We'll provide the network details at the event."
				},
				{
					question: 'What if I have technical issues during workshops?',
					answer:
						'Our technical support team will be available throughout the event to help with any technical issues. You can also ask for help from workshop facilitators or volunteers.'
				},
				{
					question: 'Is there a mobile app for the event?',
					answer:
						"Yes, we'll have a mobile app that includes the agenda, speaker information, networking features, and real-time updates. The app will be available for download before the event."
				},
				{
					question: "What's the dress code?",
					answer:
						"The dress code is casual and comfortable. Most attendees wear business casual attire. We recommend comfortable shoes as you'll be moving between sessions throughout the day."
				}
			]
		}
	];

	// State for managing expanded FAQ items
	let expandedItems = $state(new Set<string>());

	function toggleExpanded(categoryIndex: number, questionIndex: number) {
		const key = `${categoryIndex}-${questionIndex}`;
		if (expandedItems.has(key)) {
			expandedItems.delete(key);
		} else {
			expandedItems.add(key);
		}
		expandedItems = new Set(expandedItems);
	}
</script>

<SEO config={seoConfig} />

<div class="min-h-screen bg-gray-100 p-4">
	<div class="mx-auto max-w-4xl">
		<div class="rounded-3xl bg-white p-8 lg:p-12">
			<h1 class="mb-8 text-4xl font-bold text-gray-900" style="font-family: 'Caveat', sans-serif;">
				Frequently Asked Questions
			</h1>

			<div class="mb-8">
				<p class="text-lg text-gray-600">
					Can't find the answer you're looking for?
					<a href="/contact" class="text-blue-600 hover:underline">Contact us</a> and we'll be happy
					to help!
				</p>
			</div>

			<div class="space-y-8">
				{#each faqCategories as category, categoryIndex}
					<section>
						<h2 class="mb-6 text-2xl font-semibold text-gray-900">{category.title}</h2>
						<div class="space-y-4">
							{#each category.questions as question, questionIndex}
								{@const key = `${categoryIndex}-${questionIndex}`}
								{@const isExpanded = expandedItems.has(key)}
								<div class="rounded-lg border border-gray-200 bg-white">
									<button
										class="w-full px-6 py-4 text-left transition-colors hover:bg-gray-50"
										onclick={() => toggleExpanded(categoryIndex, questionIndex)}
									>
										<div class="flex items-center justify-between">
											<h3 class="pr-4 text-lg font-medium text-gray-900">
												{question.question}
											</h3>
											<svg
												class="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 {isExpanded
													? 'rotate-180'
													: ''}"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 9l-7 7-7-7"
												></path>
											</svg>
										</div>
									</button>
									{#if isExpanded}
										<div class="px-6 pb-4">
											<div class="border-t border-gray-200 pt-4">
												<p class="leading-relaxed text-gray-700">
													{question.answer}
												</p>
											</div>
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>
</div>
