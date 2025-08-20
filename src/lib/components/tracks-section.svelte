<script lang="ts">
	interface TrackItem {
		emoji: string;
		title: string;
		description: string;
		topics: string[];
		sessions: string;
		bgGradient: string;
		iconBg: string;
		badgeBg: string;
		badgeText: string;
		textColor: string;
		descriptionColor: string;
		topicColor: string;
		sessionBadgeBg: string;
		sessionBadgeText: string;
	}

	interface TracksProps {
		title?: string;
		subtitle?: string;
		description?: string;
		tipText?: string;
		tracks?: TrackItem[];
	}

	let {
		title = 'Tracks',
		subtitle = '3 clear lanes',
		description = 'Choose your path and dive deep into the technologies that matter to you',
		tipText = "💡 Pro tip: Can't decide? Most sessions are beginner-friendly, and you can mix tracks throughout the day!",
		tracks = [
			{
				emoji: '🤖',
				title: 'Artificial Intelligence',
				description:
					'Explore the future of AI with machine learning, neural networks, and intelligent applications',
				topics: [
					'Machine Learning Fundamentals',
					'TensorFlow & PyTorch',
					'AI Ethics & Best Practices'
				],
				sessions: '🎯 3 Sessions • 1 Workshop',
				bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
				iconBg: 'bg-red-200',
				badgeBg: 'bg-red-200',
				badgeText: 'AI Track',
				textColor: 'text-red-900',
				descriptionColor: 'text-red-700',
				topicColor: 'text-red-600',
				sessionBadgeBg: 'bg-red-100',
				sessionBadgeText: 'text-red-700'
			},
			{
				emoji: '🌐',
				title: 'Modern Web Development',
				description:
					'Master the latest web technologies, frameworks, and tools for building amazing user experiences',
				topics: ['Progressive Web Apps', 'React, Vue & Svelte', 'Performance Optimization'],
				sessions: '🎯 4 Sessions • 2 Workshops',
				bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
				iconBg: 'bg-purple-200',
				badgeBg: 'bg-purple-200',
				badgeText: 'Web Track',
				textColor: 'text-purple-900',
				descriptionColor: 'text-purple-700',
				topicColor: 'text-purple-600',
				sessionBadgeBg: 'bg-purple-100',
				sessionBadgeText: 'text-purple-700'
			},
			{
				emoji: '📱',
				title: 'Android Development',
				description:
					'Build powerful mobile apps with Kotlin, Jetpack Compose, and the latest Android technologies',
				topics: ['Jetpack Compose UI', 'Kotlin Multiplatform', 'Architecture Patterns'],
				sessions: '🎯 3 Sessions • 1 Workshop',
				bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
				iconBg: 'bg-orange-200',
				badgeBg: 'bg-orange-200',
				badgeText: 'Android Track',
				textColor: 'text-orange-900',
				descriptionColor: 'text-orange-700',
				topicColor: 'text-orange-600',
				sessionBadgeBg: 'bg-orange-100',
				sessionBadgeText: 'text-orange-700'
			}
		]
	}: TracksProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-3">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="mb-4 text-4xl font-medium tracking-tight">{subtitle}</h4>
		<p class="text-gray-600">{description}</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each tracks as track (track.title)}
			<div
				class="group relative overflow-hidden rounded-3xl {track.bgGradient} p-8 transition-all hover:shadow-lg"
			>
				<div class="mb-6 flex items-center justify-between">
					<div
						class="flex h-16 w-16 items-center justify-center rounded-full {track.iconBg} text-2xl"
					>
						{track.emoji}
					</div>
					<span
						class="rounded-full {track.badgeBg} px-3 py-1 text-sm font-medium {track.textColor}"
					>
						{track.badgeText}
					</span>
				</div>

				<h5 class="mb-3 text-2xl font-bold {track.textColor}">{track.title}</h5>
				<p class="mb-4 {track.descriptionColor}">
					{track.description}
				</p>

				<div class="space-y-2">
					{#each track.topics as topic (topic)}
						<div class="flex items-center gap-2 text-sm {track.topicColor}">
							<span class="text-xs">•</span>
							<span>{topic}</span>
						</div>
					{/each}
				</div>

				<div class="mt-6">
					<span
						class="inline-flex items-center rounded-full {track.sessionBadgeBg} px-3 py-1 text-xs font-medium {track.sessionBadgeText}"
					>
						{track.sessions}
					</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Track Selection Tip -->
	<div class="mt-8 rounded-2xl bg-gray-50 p-6 text-center">
		<p class="text-gray-600">
			{tipText}
		</p>
	</div>
</div>
