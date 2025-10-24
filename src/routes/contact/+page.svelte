<script lang="ts">
	import {
		Header,
		SEO
	} from '$lib/components';

	function handleRegisterClick() {
		// Handle registration click
		console.log('Register clicked');
	}

	const seoConfig = {
		title: 'Contact Us - DevFest Chennai 2025',
		description:
			'Get in touch with the DevFest Chennai 2025 team. Contact information, social media, and support channels.',
		keywords: 'DevFest Chennai, contact, support, GDG Chennai, help, information',
		url: 'https://devfest.gdgchennai.in/contact',
		type: 'website' as const
	};
</script>

<SEO config={seoConfig} />

<div class="min-h-screen bg-gray-100 p-4">
	<Header onCtaClick={handleRegisterClick} />

	<div class="mx-auto max-w-6xl">
		<div class="rounded-3xl bg-white p-8 lg:p-12">
			<h1 class="mb-8 text-4xl font-bold text-gray-900" style="font-family: 'Caveat', sans-serif;">
				Contact Us
			</h1>

			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<!-- Contact Information -->
				<div>
					<h2 class="mb-6 text-2xl font-semibold text-gray-900">Get in Touch</h2>

					<div class="space-y-6">
						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
									<svg
										class="h-6 w-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-medium text-gray-900">General Inquiries</h3>
								<p class="text-gray-600">For general questions about the event</p>
								<a href="mailto:contact@gdgchennai.in" class="text-blue-600 hover:underline"
									>contact@gdgchennai.in</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
									<svg
										class="h-6 w-6 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-medium text-gray-900">Speaker Applications</h3>
								<p class="text-gray-600">Interested in speaking at DevFest?</p>
								<a href="mailto:speakers@gdgchennai.in" class="text-blue-600 hover:underline"
									>speakers@gdgchennai.in</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
									<svg
										class="h-6 w-6 text-purple-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-medium text-gray-900">Sponsorship</h3>
								<p class="text-gray-600">Become a sponsor of DevFest Chennai</p>
								<a href="mailto:sponsors@gdgchennai.in" class="text-blue-600 hover:underline"
									>sponsors@gdgchennai.in</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
									<svg
										class="h-6 w-6 text-orange-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-medium text-gray-900">Accessibility</h3>
								<p class="text-gray-600">Accessibility accommodations and support</p>
								<a href="mailto:accessibility@gdgchennai.in" class="text-blue-600 hover:underline"
									>accessibility@gdgchennai.in</a
								>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
									<svg
										class="h-6 w-6 text-red-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-medium text-gray-900">Code of Conduct</h3>
								<p class="text-gray-600">Report violations or concerns</p>
								<a href="mailto:coc@gdgchennai.in" class="text-blue-600 hover:underline"
									>coc@gdgchennai.in</a
								>
							</div>
						</div>
					</div>
				</div>

				<!-- Social Media & Community -->
				<div>
					<h2 class="mb-6 text-2xl font-semibold text-gray-900">Connect With Us</h2>

					<div class="space-y-6">
						<div class="rounded-lg bg-gray-50 p-6">
							<h3 class="mb-4 text-lg font-medium text-gray-900">Social Media</h3>
							<div class="space-y-3">
								<a
									href="https://twitter.com/gdgchennai"
									class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
										/>
									</svg>
									<span>@gdgchennai</span>
								</a>
								<a
									href="https://linkedin.com/company/gdgchennai"
									class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
										/>
									</svg>
									<span>GDG Chennai</span>
								</a>
								<a
									href="https://github.com/gdgchennai"
									class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
									<span>gdgchennai</span>
								</a>
							</div>
						</div>

						<div class="rounded-lg bg-gray-50 p-6">
							<h3 class="mb-4 text-lg font-medium text-gray-900">Community</h3>
							<div class="space-y-3">
								<a
									href="https://gdg.community.dev/gdg-chennai/"
									class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
										/>
									</svg>
									<span>GDG Community Platform</span>
								</a>
								<a
									href="https://discord.gg/gdgchennai"
									class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600"
								>
									<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
										/>
									</svg>
									<span>Discord Server</span>
								</a>
							</div>
						</div>

						<div class="rounded-lg bg-gray-50 p-6">
							<h3 class="mb-4 text-lg font-medium text-gray-900">Event Information</h3>
							<div class="space-y-2 text-gray-700">
								<p><strong>Date:</strong> November 8, 2025</p>
								<p><strong>Location:</strong> Chennai, India</p>
								<p><strong>Venue:</strong> <a href="https://maps.app.goo.gl/WdwRgJE3fJtpXFpK6" class="flex items-center space-x-3 text-gray-700 transition-colors hover:text-blue-600">IIT-M Research Park</a></p>
								<p><strong>Time:</strong> 9:00 AM - 6:00 PM IST</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Emergency Contact -->
			<!-- <div class="mt-12 border-l-4 border-red-400 bg-red-50 p-6">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<h3 class="text-sm font-medium text-red-800">Emergency Contact</h3>
						<div class="mt-2 text-sm text-red-700">
							<p>For urgent matters during the event, please contact our emergency hotline:</p>
							<p class="mt-1"><strong>Emergency Hotline:</strong> +91-XXXXXXXXXX</p>
							<p><strong>Available:</strong> 24/7 during event days</p>
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</div>
