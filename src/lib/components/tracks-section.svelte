<script lang="ts">
	import { Ai, Cloud, Mobile, Web } from '$lib/components/misc/shape';

	interface TrackItem {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		icon: any;
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
		tracks?: TrackItem[];
	}

	let {
		title = 'Tracks',
		subtitle = '4 clear lanes',
		description = 'Choose your path and dive deep into the technologies that matter to you',
		tracks = [
			{
				icon: Ai,
				title: 'AI',
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
				icon: Cloud,
				title: 'Cloud',
				description:
					'Master cloud infrastructure, containerization, and deployment strategies for scalable applications',
				topics: ['AWS & Google Cloud', 'Docker & Kubernetes', 'CI/CD Pipelines'],
				sessions: '🎯 3 Sessions • 1 Workshop',
				bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
				iconBg: 'bg-blue-200',
				badgeBg: 'bg-blue-200',
				badgeText: 'Cloud Track',
				textColor: 'text-blue-900',
				descriptionColor: 'text-blue-700',
				topicColor: 'text-blue-600',
				sessionBadgeBg: 'bg-blue-100',
				sessionBadgeText: 'text-blue-700'
			},
			{
				icon: Mobile,
				title: 'Mobile',
				description:
					'Build powerful mobile apps with Kotlin, Jetpack Compose, and the latest Android technologies',
				topics: ['Jetpack Compose UI', 'Kotlin Multiplatform', 'Architecture Patterns'],
				sessions: '🎯 3 Sessions • 1 Workshop',
				bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
				iconBg: 'bg-orange-200',
				badgeBg: 'bg-orange-200',
				badgeText: 'Mobile Track',
				textColor: 'text-orange-900',
				descriptionColor: 'text-orange-700',
				topicColor: 'text-orange-600',
				sessionBadgeBg: 'bg-orange-100',
				sessionBadgeText: 'text-orange-700'
			},
			{
				icon: Web,
				title: 'Web',
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
			}
		]
	}: TracksProps = $props();
</script>

<div
	class="flex flex-col items-start justify-between gap-10 rounded-3xl bg-white p-6 lg:col-span-3 lg:p-10"
>
	<!-- Title and subtitle -->
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">{title}</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
		<p class="text-gray-600">{description}</p>
	</div>

	<!-- Large SVG Icons Display -->
	<div class="mb-12 flex flex-wrap justify-center gap-16">
		{#each tracks as track (track.title)}
			<div
				class="flex cursor-pointer flex-col items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1"
			>
				<div class="group relative">
					<div
						class="h-48 w-48 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-12"
					>
						<track.icon />
					</div>
					<div class="absolute inset-0 flex items-center justify-center">
						<span class="text-lg font-medium text-black">{track.title.split(' ')[0]}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
