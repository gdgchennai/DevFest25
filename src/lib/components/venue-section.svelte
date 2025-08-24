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
	class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-10 lg:col-span-2"
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
			<h4
				class="text-2xl font-medium tracking-tight transition-all duration-300 hover:text-gray-700"
			>
				{subtitle}
			</h4>
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

	<!-- Ride-sharing section -->
	<div class="flex w-full flex-col gap-4">
		<h5 class="text-xl font-medium text-black">Book your ride now</h5>
		<div
			class="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start"
		>
			<a
				href="https://m.uber.com/go/home?drop%5B0%5D=%7B%22addressLine1%22%3A%22IITM%20RESEARCH%20PARK%22%2C%22addressLine2%22%3A%22Kanagam%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%22%2C%22id%22%3A%22ChIJN7eu5YdnUjoRMpX4pNFN7tw%22%2C%22source%22%3A%22SEARCH%22%2C%22latitude%22%3A12.99105%2C%22longitude%22%3A80.2429354%2C%22provider%22%3A%22google_places%22%7D&marketing_vistor_id=d28b19e6-3212-4721-aa79-0dddc9a59fa4&uclick_id=476d268c-032c-4939-942e-37c4199af308"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-[69px] w-full items-center justify-center rounded-full bg-gray-100 p-4 transition-colors hover:bg-gray-200 sm:w-40"
			>
				<img src="/cabs/uber.png" alt="Uber" class="h-8 w-auto" />
			</a>

			<a
				href="https://book.olacabs.com/?drop=12.9909029%2C80.2427187&pickup=my_location&drop_lat=12.991&drop_lng=80.2429&drop_name=IITM%20Research%20Park%2C%20Kanagam%20Tharamani%20Chennai%20Tamil%20Nadu%20600113%20India"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-[69px] w-full items-center justify-center rounded-full bg-gray-100 p-4 transition-colors hover:bg-gray-200 sm:w-40"
			>
				<img src="/cabs/ola.png" alt="Ola" class="h-9 w-auto" />
			</a>

			<a
				href="https://rapido.bike/?drop=12.9909029,80.2427187&pickup=my_location"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-[69px] w-full items-center justify-center rounded-full bg-gray-100 p-4 transition-colors hover:bg-gray-200 sm:w-40"
			>
				<img src="/cabs/rapido.png" alt="Rapido" class="h-11 w-auto" />
			</a>
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
