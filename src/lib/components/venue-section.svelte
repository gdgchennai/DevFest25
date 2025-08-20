<script lang="ts">
	interface VenueFeature {
		emoji: string;
		title: string;
		description: string;
		bgColor: string;
	}

	interface VenueProps {
		title?: string;
		subtitle?: string;
		venueName?: string;
		address?: string;
		mapsUrl?: string;
		features?: VenueFeature[];
		transportationTips?: string[];
	}

	let {
		title = 'Venue',
		subtitle = 'Easy to reach',
		venueName = 'Anna University',
		address = 'Department of Computer Science & Engineering<br />Sardar Patel Rd, Guindy<br />Chennai, Tamil Nadu 600025',
		mapsUrl = 'https://maps.google.com/?q=Anna+University,+Chennai',
		features = [
			{
				emoji: '🚇',
				title: 'Metro Access',
				description: 'Guindy Station - 5 min walk',
				bgColor: 'bg-blue-50'
			},
			{
				emoji: '🅿️',
				title: 'Free Parking',
				description: 'On-campus availability',
				bgColor: 'bg-green-50'
			},
			{
				emoji: '🍽️',
				title: 'Food Court',
				description: 'Multiple dining options',
				bgColor: 'bg-purple-50'
			},
			{
				emoji: '📶',
				title: 'Free WiFi',
				description: 'High-speed internet',
				bgColor: 'bg-orange-50'
			}
		],
		transportationTips = [
			'By Metro: Take Green Line to Guindy Station (Exit 1)',
			'By Bus: Routes 18G, 21G, 70 stop near the campus',
			'By Car: Use main entrance on Sardar Patel Road'
		]
	}: VenueProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-2">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="text-4xl font-medium">{subtitle}</h4>
	</div>

	<!-- Venue details -->
	<div class="mb-6">
		<div class="mb-4 rounded-lg bg-gray-50 p-6">
			<h5 class="mb-2 text-lg font-medium text-gray-900">{venueName}</h5>
			<p class="mb-3 text-sm text-gray-600">{@html address}</p>
			<a
				href={mapsUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
			>
				<span>📍</span>
				Open in Google Maps
			</a>
		</div>
	</div>

	<!-- Venue features -->
	<div class="mb-6 grid grid-cols-2 gap-4">
		{#each features as feature (feature.title)}
			<div class="rounded-lg {feature.bgColor} p-4 text-center">
				<div class="mb-2 text-2xl">{feature.emoji}</div>
				<p class="text-sm font-medium text-gray-800">{feature.title}</p>
				<p class="text-xs text-gray-600">{feature.description}</p>
			</div>
		{/each}
	</div>

	<!-- Transportation tips -->
	<div class="rounded-lg bg-gray-50 p-4">
		<h6 class="mb-2 text-sm font-medium text-gray-900">Getting There</h6>
		<div class="space-y-2 text-xs text-gray-600">
			{#each transportationTips as tip (tip)}
				<p><strong>{tip.split(':')[0]}:</strong> {tip.split(':')[1]}</p>
			{/each}
		</div>
	</div>
</div>
