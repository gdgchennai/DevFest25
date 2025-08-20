<script lang="ts">
	interface AgendaItem {
		time: string;
		title: string;
		description?: string;
		speaker?: string;
		track?: string;
		borderColor: string;
		bgColor: string;
		textColor: string;
		badgeText?: string;
		badgeColor?: string;
	}

	interface AgendaProps {
		title?: string;
		subtitle?: string;
		date?: string;
		location?: string;
		items?: AgendaItem[];
	}

	let {
		title = 'Agenda',
		subtitle = 'One crisp day',
		date = 'December 15, 2024',
		location = 'Chennai',
		items = [
			{
				time: '8:30 AM',
				title: 'Registration & Breakfast',
				description: 'Check-in, networking, and morning refreshments',
				borderColor: 'border-blue-500',
				bgColor: 'bg-blue-50',
				textColor: 'text-blue-900'
			},
			{
				time: '9:30 AM',
				title: 'Opening Keynote',
				description: 'Welcome to DevFest Chennai 2025',
				borderColor: 'border-purple-500',
				bgColor: 'bg-purple-50',
				textColor: 'text-purple-900'
			},
			{
				time: '10:15 AM',
				title: 'Building the Future with AI',
				description: 'Latest developments in machine learning and AI applications',
				speaker: 'Sanju Sivalingam',
				track: 'AI Track',
				borderColor: 'border-green-500',
				bgColor: 'bg-green-50',
				textColor: 'text-green-900',
				badgeText: 'AI Track • Sanju Sivalingam',
				badgeColor: 'bg-green-100 text-green-700'
			},
			{
				time: '11:00 AM',
				title: 'Coffee Break',
				borderColor: 'border-yellow-500',
				bgColor: 'bg-yellow-50',
				textColor: 'text-yellow-900'
			},
			{
				time: '11:30 AM',
				title: 'Modern Web Development',
				description: 'Progressive Web Apps and modern frameworks',
				speaker: 'Somasundaram M',
				track: 'Web Track',
				borderColor: 'border-orange-500',
				bgColor: 'bg-orange-50',
				textColor: 'text-orange-900',
				badgeText: 'Web Track • Somasundaram M',
				badgeColor: 'bg-orange-100 text-orange-700'
			},
			{
				time: '12:15 PM',
				title: 'Hands-on Android Workshop',
				description: 'Build your first Kotlin app with Jetpack Compose',
				speaker: 'Varun M',
				track: 'Android Track',
				borderColor: 'border-red-500',
				bgColor: 'bg-red-50',
				textColor: 'text-red-900',
				badgeText: 'Android Track • Varun M',
				badgeColor: 'bg-red-100 text-red-700'
			},
			{
				time: '1:00 PM',
				title: 'Lunch & Networking',
				description: 'Food, conversations, and community building',
				borderColor: 'border-gray-500',
				bgColor: 'bg-gray-50',
				textColor: 'text-gray-900'
			},
			{
				time: '2:00 PM',
				title: 'Career Panel Discussion',
				description: 'Industry experts share career insights and hiring tips',
				borderColor: 'border-indigo-500',
				bgColor: 'bg-indigo-50',
				textColor: 'text-indigo-900'
			},
			{
				time: '3:00 PM',
				title: 'Closing & Prize Distribution',
				description: 'Thank you, prizes, and see you next year!',
				borderColor: 'border-purple-500',
				bgColor: 'bg-purple-50',
				textColor: 'text-purple-900'
			}
		]
	}: AgendaProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-2">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="mb-4 text-4xl font-medium">{subtitle}</h4>
		<p class="text-gray-600">{date} • {location}</p>
	</div>

	<!-- Calendar-style schedule -->
	<div class="space-y-2">
		{#each items as item (item.time)}
			<div class="flex items-start gap-4">
				<div class="w-16 flex-shrink-0 pt-2 text-right">
					<div class="text-xs font-medium text-gray-900">{item.time}</div>
				</div>
				<div class="flex-1">
					<div class="rounded-lg border-l-4 {item.borderColor} {item.bgColor} p-3">
						<h5 class="mb-1 font-medium {item.textColor}">{item.title}</h5>
						{#if item.badgeText}
							<div class="mb-1">
								<span
									class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium {item.badgeColor}"
								>
									{item.badgeText}
								</span>
							</div>
						{/if}
						{#if item.description}
							<p class="text-xs {item.textColor.replace('900', '700')}">
								{item.description}
							</p>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
