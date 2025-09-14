<script lang="ts">
	import { SEO } from '$lib/components';

	const seoConfig = {
		title: 'Code of Conduct - DevFest Chennai 2025',
		description:
			'Code of Conduct for DevFest Chennai 2025. Our commitment to providing a harassment-free experience for everyone.',
		keywords: 'DevFest Chennai, code of conduct, harassment-free, inclusive event, GDG Chennai',
		url: 'https://devfest.gdgchennai.in/conduct',
		type: 'website' as const
	};
</script>

<SEO config={seoConfig} />

<div class="min-h-screen bg-gray-100 p-4">
	<div class="mx-auto max-w-4xl">
		<div class="rounded-3xl bg-white p-8 lg:p-12">
			<h1 class="mb-8 text-4xl font-bold text-gray-900" style="font-family: 'Caveat', sans-serif;">
				Code of Conduct
			</h1>

			<div class="prose prose-lg max-w-none">
				<div class="mb-8 border-l-4 border-green-400 bg-green-50 p-6">
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
								<strong>Our Commitment:</strong> DevFest Chennai 2025 is dedicated to providing a harassment-free
								experience for everyone, regardless of gender, gender identity and expression, age, sexual
								orientation, disability, physical appearance, body size, race, ethnicity, religion (or
								lack thereof), or technology choices.
							</p>
						</div>
					</div>
				</div>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Expected Behavior</h2>
					<p class="mb-4 text-gray-700">All participants are expected to:</p>
					<ul class="mb-4 list-disc pl-6 text-gray-700">
						<li>Be respectful and inclusive in their interactions</li>
						<li>Use welcoming and inclusive language</li>
						<li>Be respectful of differing viewpoints and experiences</li>
						<li>Gracefully accept constructive criticism</li>
						<li>Focus on what is best for the community</li>
						<li>Show empathy towards other community members</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Unacceptable Behavior</h2>
					<p class="mb-4 text-gray-700">
						The following behaviors are considered harassment and are unacceptable:
					</p>
					<ul class="mb-4 list-disc pl-6 text-gray-700">
						<li>
							Violence, threats of violence, or violent language directed against another person
						</li>
						<li>
							Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes
							and language
						</li>
						<li>Posting or displaying sexually explicit or violent material</li>
						<li>
							Posting or threatening to post other people's personally identifying information
							("doxing")
						</li>
						<li>
							Personal insults, particularly those related to gender, sexual orientation, race,
							religion, or disability
						</li>
						<li>Inappropriate photography or recording</li>
						<li>Inappropriate physical contact</li>
						<li>Unwelcome sexual attention</li>
						<li>Advocating for, or encouraging, any of the above behavior</li>
						<li>Sustained disruption of talks or other events</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						Consequences of Unacceptable Behavior
					</h2>
					<p class="mb-4 text-gray-700">
						Unacceptable behavior from any community member, including sponsors and those with
						decision-making authority, will not be tolerated. Anyone asked to stop unacceptable
						behavior is expected to comply immediately.
					</p>
					<p class="mb-4 text-gray-700">
						If a community member engages in unacceptable behavior, the community organizers may
						take any action they deem appropriate, up to and including a temporary ban or permanent
						expulsion from the community without warning.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Reporting Guidelines</h2>
					<p class="mb-4 text-gray-700">
						If you are subject to or witness unacceptable behavior, or have any other concerns,
						please notify a community organizer as soon as possible. You can report incidents by:
					</p>
					<ul class="mb-4 list-disc pl-6 text-gray-700">
						<li>Speaking directly to any event organizer or volunteer</li>
						<li>
							Emailing us at <a
								href="mailto:conduct@gdgchennai.in"
								class="text-blue-600 hover:underline">conduct@gdgchennai.in</a
							>
						</li>
						<li>Using our anonymous reporting form (available at the event)</li>
					</ul>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Addressing Grievances</h2>
					<p class="mb-4 text-gray-700">
						If you feel you have been falsely or unfairly accused of violating this Code of Conduct,
						you should notify one of the event organizers with a concise description of your
						grievance. Your grievance will be handled in accordance with our existing governing
						policies.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Scope</h2>
					<p class="mb-4 text-gray-700">
						We expect all community participants (contributors, paid or otherwise; sponsors; and
						other guests) to abide by this Code of Conduct in all community venues—online and
						in-person—as well as in all one-on-one communications pertaining to community business.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">Contact Information</h2>
					<div class="rounded-lg bg-gray-50 p-6">
						<p class="mb-4 text-gray-700">
							<strong>Code of Conduct Team</strong>
						</p>
						<p class="mb-2 text-gray-700">
							Email: <a href="mailto:conduct@gdgchennai.in" class="text-blue-600 hover:underline"
								>conduct@gdgchennai.in</a
							>
						</p>
						<p class="mb-2 text-gray-700">Phone: Available at the event registration desk</p>
						<p class="text-gray-700">
							<strong>Emergency Contact:</strong> Available 24/7 during the event
						</p>
					</div>
				</section>

				<div class="mt-8 border-l-4 border-blue-400 bg-blue-50 p-6">
					<div class="flex">
						<div class="flex-shrink-0">
							<svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<p class="text-sm text-blue-700">
								<strong>Remember:</strong> This Code of Conduct is designed to ensure that everyone can
								enjoy DevFest Chennai 2025 in a safe, welcoming, and inclusive environment. We're all
								here to learn, network, and have fun together!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
