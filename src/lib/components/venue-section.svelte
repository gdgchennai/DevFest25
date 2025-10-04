<script lang="ts">
	import { Car, Accessibility, Wifi, Coffee } from '@lucide/svelte';

	interface VenueProps {
		title?: string;
		subtitle?: string;
		venueName?: string;
		address?: string;
		mapsUrl?: string;
		hasParking?: boolean;
		isAccessible?: boolean;
	}

	let {
		title = 'Venue',
		subtitle = 'Easy to reach',
		venueName = 'IITM Research Park',
		address = 'Kangam, Tharamani, Chennai – 600113',
		mapsUrl = 'https://maps.google.com/?q=IITM+Research+Park,+Chennai',
		hasParking = true,
		isAccessible = true
	}: VenueProps = $props();
</script>

<div
	class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-6 lg:col-span-2 lg:p-10"
>
	<!-- Grouped titles and venue address -->
	<div class="flex w-full flex-col gap-4">
		<div class="flex flex-col gap-2">
			<h3
				class="text-4xl font-bold transition-all duration-300 hover:scale-105"
				style="font-family: 'Caveat', sans-serif;"
			>
				{title}
			</h3>
			<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
		</div>

		<!-- Venue details and amenities grouped together -->
		<div class="mt-8 flex w-full flex-col gap-16">
			<!-- Venue details -->
			<div class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex flex-col gap-2">
					<h5
						class="text-2xl font-medium text-gray-900 transition-all duration-300 hover:text-gray-700"
					>
						{venueName}
					</h5>
					<p class="text-lg text-gray-500 transition-all duration-300 hover:text-gray-600">
						{address}
					</p>
				</div>
				<a
					href={mapsUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-3 text-lg text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-md"
				>
					Open maps
				</a>
			</div>

			<!-- Venue amenities -->
			<div class="flex flex-col gap-4">
				<h5 class="text-xl font-medium text-black transition-all duration-300 hover:text-gray-700">
					Venue includes
				</h5>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					{#if hasParking}
						<div
							class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
							style="animation-delay: 0ms;"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-green-300 to-green-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
							>
								<Car
									size={24}
									class="text-white transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							<div class="transition-all duration-300 group-hover:translate-x-1">
								<h6 class="mb-1 font-medium transition-all duration-300 group-hover:text-gray-800">
									Free parking available
								</h6>
								<p
									class="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700"
								>
									Convenient parking for all attendees
								</p>
							</div>
						</div>
					{/if}
					{#if isAccessible}
						<div
							class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
							style="animation-delay: 100ms;"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-blue-300 to-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
							>
								<Accessibility
									size={24}
									class="text-white transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
							<div class="transition-all duration-300 group-hover:translate-x-1">
								<h6 class="mb-1 font-medium transition-all duration-300 group-hover:text-gray-800">
									Wheelchair accessible
								</h6>
								<p
									class="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700"
								>
									Full accessibility support provided
								</p>
							</div>
						</div>
					{/if}
					<div
						class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
						style="animation-delay: 200ms;"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-purple-300 to-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
						>
							<Wifi
								size={24}
								class="text-white transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<div class="transition-all duration-300 group-hover:translate-x-1">
							<h6 class="mb-1 font-medium transition-all duration-300 group-hover:text-gray-800">
								High-speed Wi-Fi available
							</h6>
							<p
								class="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700"
							>
								Fast internet for seamless experience
							</p>
						</div>
					</div>
					<div
						class="group flex cursor-pointer items-start space-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
						style="animation-delay: 300ms;"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-300 to-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
						>
							<Coffee
								size={24}
								class="text-white transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<div class="transition-all duration-300 group-hover:translate-x-1">
							<h6 class="mb-1 font-medium transition-all duration-300 group-hover:text-gray-800">
								Food & beverages provided
							</h6>
							<p
								class="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700"
							>
								Refreshments and meals included
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Google Maps section -->
	<div class="flex w-full flex-col gap-4">
		<h5 class="text-xl font-medium text-black">Venue Location</h5>
		<div class="w-full overflow-hidden rounded-2xl">
			<iframe
				title="IITM Research Park Location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9847461891644!2d80.24074!3d12.99105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e5e56eb737%3A0xdceef44da4f895f2!2sIITM%20Research%20Park!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
				width="100%"
				height="400"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
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
