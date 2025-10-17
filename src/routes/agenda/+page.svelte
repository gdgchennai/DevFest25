<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		tracks,
		getTrackById,
		getSessionTypeStyles,
		type Session,
		type Track
	} from '$lib/data/agenda';
	import { SEO } from '$lib/components';

	let selectedTrackId: 'track1' | 'track2' | 'track3' = $state('track1');

	let currentTrack = $derived(getTrackById(selectedTrackId));

	// SEO configuration for the agenda page
	const seoConfig = {
		title: 'DevFest Chennai 2025 - Agenda & Schedule',
		description:
			'Explore the complete agenda for DevFest Chennai 2025. View sessions across AI & ML, Mobile & Web Development, and Workshops tracks. Join us for an amazing day of learning and networking.',
		keywords:
			'DevFest Chennai agenda, conference schedule, AI sessions, mobile development, web development, workshops, lightning talks, GDG Chennai',
		image: 'https://devfest.gdgchennai.in/agenda-og.jpg',
		url: 'https://devfest.gdgchennai.in/agenda',
		type: 'website' as const,
		tags: [
			'DevFest Chennai',
			'agenda',
			'schedule',
			'conference',
			'AI',
			'mobile development',
			'web development',
			'workshops'
		]
	};

	function selectTrack(trackId: 'track1' | 'track2' | 'track3') {
		selectedTrackId = trackId;
	}

	function formatTime(time: string): string {
		const [hours, minutes] = time.split(':');
		const hour = parseInt(hours);
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
		return `${displayHour}:${minutes} ${ampm}`;
	}

	function getSessionHeight(session: Session): string {
		// Base height for different session types
		const baseHeights = {
			break: 60,
			keynote: 80,
			session: 100,
			lightning: 80,
			workshop: 120,
			panel: 100
		};

		const baseHeight = baseHeights[session.type] || 100;
		const durationMultiplier = session.duration / 30; // 30 minutes as base unit
		return `${Math.max(baseHeight, baseHeight * durationMultiplier)}px`;
	}

	function getSessionAtTime(time: string): Session | undefined {
		return currentTrack?.sessions.find((session) => session.startTime === time);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- SEO Component -->
<SEO config={seoConfig} />

<div class="min-h-screen bg-gray-50">
	<!-- Header Section -->
	<div class="bg-white shadow-sm">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1
					class="text-4xl font-bold text-gray-900 sm:text-5xl"
					style="font-family: 'Caveat', sans-serif;"
				>
					DevFest Chennai 2025
				</h1>
				<h2 class="mt-2 text-2xl font-semibold text-gray-700">Agenda & Schedule</h2>
				<p class="mt-4 text-lg text-gray-600">November 8, 2025 • Chennai, India</p>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Track Selection Tabs -->
		<div class="mb-8">
			<div class="border-b border-gray-200">
				<div class="overflow-x-auto">
					<nav class="-mb-px flex space-x-4 sm:space-x-8" aria-label="Tabs">
						{#each tracks as track (track.id)}
							<button
								onclick={() => selectTrack(track.id)}
								class="flex-shrink-0 border-b-2 px-2 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 {selectedTrackId ===
								track.id
									? 'border-blue-500 text-blue-600'
									: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
								aria-current={selectedTrackId === track.id ? 'page' : undefined}
							>
								<span class="block">{track.name}</span>
								<span class="ml-2 hidden text-xs text-gray-400 sm:inline"
									>({track.description})</span
								>
							</button>
						{/each}
					</nav>
				</div>
			</div>
		</div>

		<!-- Timeline View -->
		{#if currentTrack}
			<div class="rounded-2xl bg-white shadow-lg">
				<div class="p-6">
					<!-- Track Header -->
					<div class="mb-6">
						<h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Caveat', sans-serif;">
							{currentTrack.name}
						</h3>
						<p class="text-gray-600">{currentTrack.description}</p>
					</div>

					<!-- Timeline Grid -->
					<div class="space-y-4">
						{#each currentTrack.timeSlots as timeSlot (timeSlot.time)}
							{@const sessionAtTime = getSessionAtTime(timeSlot.time)}
							<div class="flex items-start gap-6">
								<!-- Time Column -->
								<div class="w-24 flex-shrink-0 pt-2 text-start w-auto sm:text-right">
									<div class="text-sm font-medium text-gray-900">{timeSlot.label}</div>
								</div>

								<!-- Session Column -->
								<div class="flex-1">
									{#if sessionAtTime}
										{@const styles = getSessionTypeStyles(sessionAtTime.type)}
										<div
											class="rounded-lg border-l-4 {styles.borderColor} {styles.bgColor} p-4 shadow-sm transition-all duration-200 hover:shadow-md"
											style="min-height: {getSessionHeight(sessionAtTime)}"
										>
											<div class="flex items-start justify-between">
												<div class="flex-1">
													<div class="mb-2 flex items-center gap-2">
														<h4 class="font-semibold {styles.textColor}">{sessionAtTime.title}</h4>
														<span
															class="rounded-full px-2 py-1 text-xs font-medium {styles.badgeColor}"
														>
															{sessionAtTime.type.charAt(0).toUpperCase() +
																sessionAtTime.type.slice(1)}
														</span>
													</div>

													{#if sessionAtTime.speaker}
														<p class="mb-1 text-sm font-medium text-gray-700">
															Speaker: {sessionAtTime.speaker}
														</p>
													{/if}

													{#if sessionAtTime.description}
														<p class="mb-2 text-sm text-gray-600">{sessionAtTime.description}</p>
													{/if}

													<div class="flex items-center gap-4 text-xs text-gray-500">
														<span>⏱️ {sessionAtTime.duration} min</span>
														<span
															>🕐 {formatTime(sessionAtTime.startTime)} - {formatTime(
																sessionAtTime.endTime
															)}</span
														>
													</div>
												</div>
											</div>
										</div>
									{:else}
										<!-- Empty time slot -->
										<div class="h-4 border-l-2 border-dashed border-gray-200"></div>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}

		<!-- Legend -->
		<div class="mt-8 rounded-lg bg-gray-50 p-6">
			<h4 class="mb-4 font-semibold text-gray-900">Session Types</h4>
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-blue-200 bg-blue-100"></div>
					<span class="text-sm text-gray-700">Sessions</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-orange-200 bg-orange-100"></div>
					<span class="text-sm text-gray-700">Workshops</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-green-200 bg-green-100"></div>
					<span class="text-sm text-gray-700">Lightning Talks</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-indigo-200 bg-indigo-100"></div>
					<span class="text-sm text-gray-700">Panels</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-purple-200 bg-purple-100"></div>
					<span class="text-sm text-gray-700">Keynotes</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-3 w-3 rounded-full border border-gray-200 bg-gray-100"></div>
					<span class="text-sm text-gray-700">Breaks</span>
				</div>
			</div>
		</div>

		<!-- Back to Home -->
		<div class="mt-8 text-center">
			<Button href="/" size="lg">Back to Home</Button>
		</div>
	</div>
</div>
