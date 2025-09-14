<script lang="ts">
	import { Button } from '$lib/components/ui/button';

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
		subtitle = 'Share your expertise',
		ctaText = 'Apply as Speaker',
		onCtaClick = () => {},
		speakers = []
	}: SpeakersProps = $props();
</script>

<div class="rounded-3xl bg-white p-6 lg:col-span-3 lg:p-10">
	<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h3
				class="mb-2 text-3xl font-medium tracking-tight"
				style="font-family: 'Caveat', sans-serif;"
			>
				{title}
			</h3>
			<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
		</div>
		<Button
			size="lg"
			target="_blank"
			href="https://docs.google.com/forms/d/e/1FAIpQLSf2tZ_LjDWZP_fX1R3GX3E0vUTA05iGlXF0-iPMD_w1SR_8FQ/viewform?usp=dialog"
		>
			Apply as Speaker
		</Button>
	</div>
	<!-- Speaker Application Content -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<!-- Why Speak Section -->
		<div class="space-y-6">
			<div class="rounded-xl border border-white bg-gray-50 p-6">
				<h5 class="mb-6 text-xl font-medium tracking-tight text-gray-900">
					Why Speak at DevFest Chennai?
				</h5>
				<div class="grid grid-cols-1 gap-6">
					<div
						class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
						style="animation-delay: 0ms;"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-purple-300 to-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
						>
							<svg
								size={24}
								class="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110"
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
						<div class="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
							<h6 class="font-medium transition-all duration-300 group-hover:text-gray-800">
								Share Your Knowledge
							</h6>
							<p class="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
								Inspire 500+ developers with your expertise
							</p>
						</div>
					</div>
					<div
						class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
						style="animation-delay: 150ms;"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-blue-300 to-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
						>
							<svg
								size={24}
								class="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								></path>
							</svg>
						</div>
						<div class="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
							<h6 class="font-medium transition-all duration-300 group-hover:text-gray-800">
								Build Your Network
							</h6>
							<p class="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
								Connect with industry leaders and peers
							</p>
						</div>
					</div>
					<div
						class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
						style="animation-delay: 300ms;"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-green-300 to-green-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
						>
							<svg
								size={24}
								class="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<div class="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
							<h6 class="font-medium transition-all duration-300 group-hover:text-gray-800">
								Grow Your Brand
							</h6>
							<p class="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
								Establish yourself as a thought leader
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Application Info Section -->
		<div class="space-y-6">
			<div class="rounded-xl bg-gray-50 p-6">
				<h5 class="mb-4 text-xl font-medium tracking-tight text-gray-900">Speaker Application</h5>
				<div class="space-y-4">
					<div>
						<h6 class="font-medium text-gray-900">Topics We're Looking For:</h6>
						<ul class="mt-2 space-y-1 text-sm text-gray-600">
							<li>• Web Development & Modern Frameworks</li>
							<li>• Mobile Development (iOS/Android)</li>
							<li>• AI/ML & Data Science</li>
							<li>• Cloud Computing & DevOps</li>
							<li>• Career Growth & Leadership</li>
							<li>• Open Source & Community</li>
						</ul>
					</div>
					<div>
						<h6 class="font-medium text-gray-900">Session Formats:</h6>
						<ul class="mt-2 space-y-1 text-sm text-gray-600">
							<li>• 30-minute technical talks</li>
							<li>• 60-minute hands-on workshops</li>
							<li>• Lightning talks (10 minutes)</li>
						</ul>
					</div>
					<div class="pt-4">
						<Button
							size="lg"
							href="https://docs.google.com/forms/d/e/1FAIpQLSf2tZ_LjDWZP_fX1R3GX3E0vUTA05iGlXF0-iPMD_w1SR_8FQ/viewform?usp=dialog"
							target="_blank"
						>
							Apply as Speaker
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	div[class*='group'] {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
