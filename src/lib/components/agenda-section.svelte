<script lang="ts">
	interface AgendaItem {
		time: string;
		title: string;
		description?: string;
		speaker?: string;
		track?: string;
		type: 'session' | 'break' | 'keynote' | 'workshop';
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
		date = 'November 8, 2025',
		location = 'Chennai, India',
		items = [
			{
				time: '8:30 AM',
				title: 'Registration & Breakfast',
				description: 'Check-in and morning refreshments',
				type: 'break'
			},
			{
				time: '9:30 AM',
				title: 'Opening Keynote',
				description: 'Welcome to DevFest Chennai 2025',
				type: 'keynote'
			},
			{
				time: '10:15 AM',
				title: 'Building the Future with AI',
				description: 'Latest developments in machine learning and AI applications',
				speaker: 'Sanju Sivalingam',
				track: 'AI Track',
				type: 'session'
			},
			{
				time: '11:00 AM',
				title: 'Coffee Break',
				type: 'break'
			},
			{
				time: '11:30 AM',
				title: 'Modern Web Development',
				description: 'Progressive Web Apps and modern frameworks',
				speaker: 'Somasundaram M',
				track: 'Web Track',
				type: 'session'
			},
			{
				time: '12:15 PM',
				title: 'Hands-on Android Workshop',
				description: 'Build your first Kotlin app with Jetpack Compose',
				speaker: 'Varun M',
				track: 'Android Track',
				type: 'workshop'
			},
			{
				time: '1:00 PM',
				title: 'Lunch & Networking',
				description: 'Food and community building',
				type: 'break'
			},
			{
				time: '2:00 PM',
				title: 'Career Panel Discussion',
				description: 'Industry experts share career insights',
				type: 'session'
			},
			{
				time: '3:00 PM',
				title: 'Closing & Prize Distribution',
				description: 'Thank you and see you next year!',
				type: 'keynote'
			}
		]
	}: AgendaProps = $props();

	function getTypeStyles(type: string) {
		switch (type) {
			case 'keynote':
				return {
					borderColor: 'border-purple-200',
					bgColor: 'bg-purple-25',
					textColor: 'text-purple-800',
					badgeColor: 'bg-purple-100 text-purple-700'
				};
			case 'session':
				return {
					borderColor: 'border-blue-200',
					bgColor: 'bg-blue-25',
					textColor: 'text-blue-800',
					badgeColor: 'bg-blue-100 text-blue-700'
				};
			case 'workshop':
				return {
					borderColor: 'border-orange-200',
					bgColor: 'bg-orange-25',
					textColor: 'text-orange-800',
					badgeColor: 'bg-orange-100 text-orange-700'
				};
			case 'break':
			default:
				return {
					borderColor: 'border-gray-200',
					bgColor: 'bg-gray-25',
					textColor: 'text-gray-700',
					badgeColor: 'bg-gray-100 text-gray-600'
				};
		}
	}
</script>

<div class="rounded-3xl bg-white p-6 lg:col-span-2 lg:p-10">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
		<p class="text-gray-600">{date} • {location}</p>
	</div>

	<!-- Timeline schedule with blur and overlay -->
	<div class="relative">
		<!-- Blurred agenda content -->
		<div class="space-y-3 blur-sm">
			{#each items as item (item.time)}
				{@const styles = getTypeStyles(item.type)}
				<div class="flex items-start gap-2 sm:gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right sm:w-20">
						<div class="text-sm font-medium text-gray-900">{item.time}</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-3 {styles.borderColor} {styles.bgColor} p-3 lg:p-4">
							<div class="flex items-start justify-between">
								<div class="flex-1">
									<h5 class="mb-1 font-medium {styles.textColor}">{item.title}</h5>
									{#if item.description}
										<p class="text-sm text-gray-600">{item.description}</p>
									{/if}
								</div>
								{#if item.speaker || item.track}
									<span class="ml-3 rounded-full px-2 py-1 text-xs font-medium {styles.badgeColor}">
										{item.track ? item.track : item.speaker}
									</span>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Coming Soon Overlay -->
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="rounded-2xl border border-white/20 p-8 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-gray-50"
				>
					<svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
				<h5 class="mb-2 text-xl font-bold text-gray-900">Coming Soon</h5>
				<p class="text-sm text-gray-600">
					We're crafting an amazing agenda for you. Stay tuned for updates!
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-purple-25 {
		background-color: #faf5ff;
	}
	.bg-blue-25 {
		background-color: #eff6ff;
	}
	.bg-orange-25 {
		background-color: #fff7ed;
	}
	.bg-gray-25 {
		background-color: #f9fafb;
	}
</style>
