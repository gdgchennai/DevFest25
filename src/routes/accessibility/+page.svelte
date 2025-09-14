<script lang="ts">
	import { SEO } from '$lib/components';

	const seoConfig = {
		title: 'Accessibility - DevFest Chennai 2025',
		description:
			'Accessibility information for DevFest Chennai 2025. Our commitment to making the event accessible to everyone.',
		keywords: 'DevFest Chennai, accessibility, inclusive event, disability access, GDG Chennai',
		url: 'https://devfest.gdgchennai.in/accessibility',
		type: 'website' as const
	};
</script>

<SEO config={seoConfig} />

<div class="min-h-screen bg-gray-100 p-4">
	<div class="mx-auto max-w-4xl">
		<div class="rounded-3xl bg-white p-8 lg:p-12">
			<h1 class="mb-8 text-4xl font-bold text-gray-900" style="font-family: 'Caveat', sans-serif;">
				Accessibility
			</h1>

			<div class="prose prose-lg max-w-none">
				<div class="mb-8 border-l-4 border-purple-400 bg-purple-50 p-6">
					<div class="flex">
						<div class="flex-shrink-0">
							<svg class="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<p class="text-sm text-purple-700">
								<strong>Our Commitment:</strong> DevFest Chennai 2025 is committed to ensuring that our
								event is accessible to all participants, regardless of their abilities or disabilities.
								We strive to create an inclusive environment where everyone can fully participate and
								enjoy the event.
							</p>
						</div>
					</div>
				</div>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Venue Accessibility</h2>
					<div class="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Physical Access</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• Wheelchair accessible entrances</li>
								<li>• Accessible parking spaces</li>
								<li>• Elevator access to all floors</li>
								<li>• Accessible restrooms</li>
								<li>• Wide aisles and doorways</li>
							</ul>
						</div>
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Seating</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• Reserved accessible seating areas</li>
								<li>• Companion seating available</li>
								<li>• Flexible seating arrangements</li>
								<li>• Clear sightlines to presentations</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Communication & Information</h2>
					<div class="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Visual Accessibility</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• Large print materials available</li>
								<li>• High contrast signage</li>
								<li>• Screen reader compatible website</li>
								<li>• Alt text for all images</li>
								<li>• Clear visual indicators</li>
							</ul>
						</div>
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Hearing Accessibility</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• Sign language interpreters (on request)</li>
								<li>• Live captioning for presentations</li>
								<li>• Assistive listening devices</li>
								<li>• Visual alerts for announcements</li>
								<li>• Written materials for audio content</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Technology & Digital Access</h2>
					<ul class="mb-4 list-disc pl-6 text-gray-700">
						<li>Our website is designed to meet WCAG 2.1 AA standards</li>
						<li>All digital materials are screen reader compatible</li>
						<li>Presentations will be made available in accessible formats</li>
						<li>Live streaming with closed captions</li>
						<li>Mobile app with accessibility features</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						Dietary & Medical Accommodations
					</h2>
					<div class="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Food & Beverages</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• Vegetarian and vegan options</li>
								<li>• Gluten-free alternatives</li>
								<li>• Allergen-free options</li>
								<li>• Clear ingredient labeling</li>
								<li>• Special dietary requests honored</li>
							</ul>
						</div>
						<div class="rounded-lg bg-gray-50 p-4">
							<h3 class="mb-2 font-semibold text-gray-900">Medical Support</h3>
							<ul class="space-y-1 text-sm text-gray-700">
								<li>• First aid station on-site</li>
								<li>• Emergency medical contacts</li>
								<li>• Quiet spaces for rest</li>
								<li>• Medical equipment storage</li>
								<li>• Trained medical personnel</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Requesting Accommodations</h2>
					<p class="mb-4 text-gray-700">
						We encourage attendees to request accommodations in advance to ensure we can provide the
						best possible support. Please contact us at least 2 weeks before the event.
					</p>
					<div class="rounded-lg bg-blue-50 p-6">
						<h3 class="mb-3 font-semibold text-gray-900">How to Request Accommodations:</h3>
						<ol class="list-decimal space-y-2 pl-6 text-gray-700">
							<li>
								Email us at <a
									href="mailto:accessibility@gdgchennai.in"
									class="text-blue-600 hover:underline">accessibility@gdgchennai.in</a
								>
							</li>
							<li>Include your specific accommodation needs</li>
							<li>Provide your contact information</li>
							<li>Specify any equipment or services required</li>
							<li>We'll confirm your accommodations within 48 hours</li>
						</ol>
					</div>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">On-Site Support</h2>
					<p class="mb-4 text-gray-700">
						During the event, our accessibility team will be available to assist with any needs or
						concerns:
					</p>
					<ul class="mb-4 list-disc pl-6 text-gray-700">
						<li>Accessibility desk at the registration area</li>
						<li>Dedicated accessibility volunteers</li>
						<li>Real-time assistance for any issues</li>
						<li>Emergency accessibility support</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						Feedback & Continuous Improvement
					</h2>
					<p class="mb-4 text-gray-700">
						We value feedback from our community to help us improve accessibility at future events.
						Please share your experiences and suggestions with us.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Contact Information</h2>
					<div class="rounded-lg bg-gray-50 p-6">
						<p class="mb-4 text-gray-700">
							<strong>Accessibility Team</strong>
						</p>
						<p class="mb-2 text-gray-700">
							Email: <a
								href="mailto:accessibility@gdgchennai.in"
								class="text-blue-600 hover:underline">accessibility@gdgchennai.in</a
							>
						</p>
						<p class="mb-2 text-gray-700">Phone: Available during event hours</p>
						<p class="text-gray-700">
							<strong>Emergency Accessibility Support:</strong> Available 24/7 during the event
						</p>
					</div>
				</section>

				<div class="mt-8 border-l-4 border-green-400 bg-green-50 p-6">
					<div class="flex">
						<div class="flex-shrink-0">
							<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<p class="text-sm text-green-700">
								<strong>Our Promise:</strong> We are committed to making DevFest Chennai 2025 accessible
								to everyone. If you have any accessibility needs or concerns, please don't hesitate to
								reach out to us. We're here to help ensure you have the best possible experience at our
								event.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
