<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		Drawer,
		DrawerContent,
		DrawerHeader,
		DrawerTitle,
		DrawerDescription,
		DrawerFooter,
		DrawerClose
	} from '$lib/components/ui/drawer';
	import { tracks, getTrackById, getSessionTypeStyles, type Session } from '$lib/data/agenda';
	import { SEO } from '$lib/components';
	import { downloadICS } from '$lib/utils/calendar';
	import { Calendar, Linkedin, Twitter, ExternalLink } from '@lucide/svelte';

	let selectedTrackId: 'track1' | 'track2' | 'track3' = $state('track1');
	let selectedSession: Session | null = $state(null);
	let drawerOpen = $state(false);

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

	function handleAddToCalendar(session: Session): void {
		downloadICS(session);
	}

	function handleSessionClick(session: Session, event: MouseEvent | KeyboardEvent): void {
		// Don't open drawer if clicking the calendar button
		if (event instanceof MouseEvent && (event.target as HTMLElement).closest('button')) {
			return;
		}
		if (session.type !== 'break') {
			selectedSession = session;
			drawerOpen = true;
		}
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
								<!-- Halls -->
								{#if track.id === 'track1'}
									<!-- content here -->
									<span>Main Hall D7</span>
								{:else if track.id === 'track2'}
									<!-- content here -->
									<span>Amphi D7</span>
								{:else if track.id === 'track3'}
									<!-- content here -->
									<span>Mini Hall D6</span>
								{/if}
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
					</div>

					<!-- Timeline Grid -->
					<div class="space-y-4">
						{#each currentTrack.timeSlots as timeSlot, index (timeSlot.time)}
							{@const sessionAtTime = getSessionAtTime(timeSlot.time)}
							{@const isLast = index === currentTrack.timeSlots.length - 1}
							{#if !(isLast && !sessionAtTime)}
								<div class="flex items-start gap-4 sm:gap-6">
									<!-- Time Column -->
									<div class="w-16 flex-shrink-0 pt-2 text-left sm:w-24 sm:text-right">
										<div class="text-xs font-medium text-gray-900 sm:text-sm">{timeSlot.label}</div>
									</div>

									<!-- Session Column -->
									<div class="flex-1">
										{#if sessionAtTime}
											{@const styles = getSessionTypeStyles(sessionAtTime.type)}
											{#if sessionAtTime.type !== 'break'}
												<div
													class="relative rounded-lg border-l-4 {styles.borderColor} {styles.bgColor} cursor-pointer p-4 shadow-sm transition-all duration-200 hover:shadow-md"
													style="min-height: {getSessionHeight(sessionAtTime)}"
													onclick={(e) => handleSessionClick(sessionAtTime, e)}
													onkeydown={(e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															e.preventDefault();
															handleSessionClick(sessionAtTime, e);
														}
													}}
													role="button"
													tabindex="0"
												>
													<div class="flex flex-col gap-3">
														<!-- Header with title -->
														<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
															<!-- Category badge - shows above title on mobile, after title on desktop -->
															<span
																class="w-fit rounded-full px-2 py-1 text-xs font-medium {styles.badgeColor} sm:order-2"
															>
																{sessionAtTime.type.charAt(0).toUpperCase() +
																	sessionAtTime.type.slice(1)}
															</span>
															<h4 class="font-semibold {styles.textColor} sm:order-1">
																{sessionAtTime.title}
															</h4>
														</div>

														<!-- Session details -->
														<div class="space-y-2">
															{#if sessionAtTime.speaker && sessionAtTime.type !== 'panel'}
																<p class="text-sm font-medium text-gray-700">
																	Speaker: {sessionAtTime.speaker}
																</p>
															{/if}

															{#if sessionAtTime.description}
																<p class="text-sm text-gray-600">{sessionAtTime.description}</p>
															{/if}

															<div
																class="flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:items-center sm:gap-4"
															>
																<span>⏱️ {sessionAtTime.duration} min</span>
																<span
																	>🕐 {formatTime(sessionAtTime.startTime)} - {formatTime(
																		sessionAtTime.endTime
																	)}</span
																>
															</div>

															<!-- Add to Calendar Button -->
															<Button
																variant="outline"
																size="sm"
																onclick={(e) => {
																	e.stopPropagation();
																	handleAddToCalendar(sessionAtTime);
																}}
																title="Add to Calendar"
																class="w-fit"
															>
																<Calendar size={14} />
																<span class="hidden sm:inline">Add to Calendar</span>
															</Button>
														</div>
													</div>
												</div>
											{:else}
												<div
													class="rounded-lg border-l-4 {styles.borderColor} {styles.bgColor} p-4 shadow-sm transition-all duration-200"
													style="min-height: {getSessionHeight(sessionAtTime)}"
												>
													<div class="flex flex-col gap-3">
														<!-- Header with title and calendar button -->
														<div class="flex items-start justify-between">
															<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
																<!-- Category badge - shows above title on mobile, after title on desktop -->
																<span
																	class="w-fit rounded-full px-2 py-1 text-xs font-medium {styles.badgeColor} sm:order-2"
																>
																	{sessionAtTime.type.charAt(0).toUpperCase() +
																		sessionAtTime.type.slice(1)}
																</span>
																<h4 class="font-semibold {styles.textColor} sm:order-1">
																	{sessionAtTime.title}
																</h4>
															</div>
														</div>

														<!-- Session details -->
														<div class="space-y-2">
															{#if sessionAtTime.speaker}
																<p class="text-sm font-medium text-gray-700">
																	Speaker: {sessionAtTime.speaker}
																</p>
															{/if}

															{#if sessionAtTime.description}
																<p class="text-sm text-gray-600">{sessionAtTime.description}</p>
															{/if}

															<div
																class="flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:items-center sm:gap-4"
															>
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
											{/if}
										{:else}
											<!-- Empty time slot -->
											<div class="h-4 border-l-2 border-dashed border-gray-200"></div>
										{/if}
									</div>
								</div>
							{/if}
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

<!-- Session Details Drawer -->
<Drawer bind:open={drawerOpen}>
	{#if selectedSession}
		<DrawerContent class="flex max-h-[90vh] flex-col">
			<DrawerHeader class="flex-shrink-0">
				<DrawerTitle class="text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
					{selectedSession.title}
				</DrawerTitle>
				<DrawerDescription class="mt-2">
					{@const styles = getSessionTypeStyles(selectedSession.type)}
					<span class="rounded-full px-3 py-1 text-xs font-medium {styles.badgeColor}">
						{selectedSession.type.charAt(0).toUpperCase() + selectedSession.type.slice(1)}
					</span>
				</DrawerDescription>
			</DrawerHeader>

			<div class="flex-1 space-y-6 overflow-y-auto px-4 pb-4">
				<!-- Speaker Info -->
				{#if selectedSession.type !== 'panel'}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">Speaker</h3>
						<div class="flex flex-col gap-2">
							<p class="text-base font-medium text-gray-700">{selectedSession.speaker}</p>
							{#if selectedSession.speakerBio}
								<p class="text-sm leading-relaxed text-gray-600">{selectedSession.speakerBio}</p>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Social Links -->
				{#if selectedSession.type === 'panel'}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">Panelists</h3>
						<div class="flex flex-col gap-2">
							{#each selectedSession.panelListLinkedin as panelist (panelist.name)}
								<a
									href={panelist.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<Linkedin size={16} />
									{panelist.name}
									<ExternalLink size={16} />
								</a>
							{/each}
						</div>
					</div>
				{:else if selectedSession.speakerLinks}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">Connect</h3>
						<div class="flex flex-wrap gap-3">
							{#if selectedSession.speakerLinks.linkedin}
								<a
									href={selectedSession.speakerLinks.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
								>
									<Linkedin size={16} />
									LinkedIn
								</a>
							{/if}
							{#if selectedSession.speakerLinks.twitter}
								<a
									href={selectedSession.speakerLinks.twitter}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
								>
									<Twitter size={16} />
									Twitter/X
								</a>
							{/if}
							{#if selectedSession.speakerLinks.website}
								<a
									href={selectedSession.speakerLinks.website}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<ExternalLink size={16} />
									Website
								</a>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Moderator Info -->
				{#if selectedSession.panelModerator}
					<div class="flex flex-col gap-2">
						<p class="text-base font-medium text-gray-700">Moderator</p>
						{#if selectedSession.panelModerator.linkedin}
							<a
								href={selectedSession.panelModerator.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
							>
								<Linkedin size={16} />
								{selectedSession.panelModerator.name}
							</a>
						{/if}
					</div>
				{/if}

				<!-- Time & Duration -->
				<div class="space-y-2">
					<h3 class="text-lg font-semibold text-gray-900">Schedule</h3>
					<div class="flex flex-col gap-1 text-sm text-gray-600">
						<span>⏱️ {selectedSession.duration} minutes</span>
						<span
							>🕐 {formatTime(selectedSession.startTime)} - {formatTime(
								selectedSession.endTime
							)}</span
						>
					</div>
				</div>

				<!-- Abstract -->
				{#if selectedSession.abstract}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">About This Session</h3>
						<div class="text-sm leading-relaxed whitespace-pre-line text-gray-700">
							{selectedSession.abstract}
						</div>
					</div>
				{:else if selectedSession.description}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">About This Session</h3>
						<p class="text-sm leading-relaxed text-gray-700">{selectedSession.description}</p>
					</div>
				{/if}

				<!-- Slides & Resources -->
				{#if selectedSession.slidesLink || selectedSession.resourcesLink}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">Resources</h3>
						<div class="flex flex-col gap-2">
							{#if selectedSession.slidesLink}
								<a
									href={selectedSession.slidesLink}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 text-sm text-blue-600 underline hover:text-blue-800"
								>
									<ExternalLink size={16} />
									View Slides
								</a>
							{/if}
							{#if selectedSession.resourcesLink}
								<a
									href={selectedSession.resourcesLink}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 text-sm text-blue-600 underline hover:text-blue-800"
								>
									<ExternalLink size={16} />
									Additional Resources
								</a>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Session Notes -->
				<!-- {#if selectedSession.sessionNotes}
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-gray-900">Notes</h3>
						<p class="text-sm leading-relaxed whitespace-pre-line text-gray-600">
							{selectedSession.sessionNotes}
						</p>
					</div>
				{/if} -->
			</div>

			<DrawerFooter class="flex-shrink-0 border-t">
				<DrawerClose>
					<Button variant="outline" class="w-full">Close</Button>
				</DrawerClose>
			</DrawerFooter>
		</DrawerContent>
	{/if}
</Drawer>
