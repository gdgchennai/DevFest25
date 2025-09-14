<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	interface CommunityPartner {
		name: string;
		logo: string;
		alt?: string;
	}

	interface SponsorsProps {
		title?: string;
		subtitle?: string;
		ctaText?: string;
		onCtaClick?: () => void;
		titleSponsorText?: string;
		titleSponsorDescription?: string;
		goldSponsorsCount?: number;
		communityPartners?: CommunityPartner[];
	}

	let {
		title = 'Sponsors',
		subtitle = 'Community powered',
		ctaText = 'Become a Sponsor',
		onCtaClick = () => {},
		titleSponsorText = 'Your Logo Here',
		titleSponsorDescription = 'Premium partnership opportunity available',
		goldSponsorsCount = 3,
		communityPartners = [
			{
				name: 'Woman Techmakers Chennai',
				logo: '/sponsors/community/wtm.png',
				alt: 'GDG Chennai Logo'
			},
			{
				name: 'Kotlin Users Group Chennai',
				logo: '/sponsors/community/kugc.png',
				alt: 'KUG Chennai Logo'
			},
			{
				name: 'JS Lovers Chennai',
				logo: '/sponsors/community/jslovers.png',
				alt: 'DSC Chennai Logo'
			},
			{
				name: 'Chennai ReactJS',
				logo: '/sponsors/community/chennaireactjs.png',
				alt: 'Chennai ReactJS Logo'
			}
		]
	}: SponsorsProps = $props();
</script>

<div class="rounded-3xl bg-white p-6 lg:col-span-3 lg:p-10">
	<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
				{title}
			</h3>
			<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
		</div>
		<Button
			size="lg"
			href="https://devfest25.gdgchennai.in/Sponsorship_Brochure.pdf"
			target="_blank"
		>
			Become a Sponsor
		</Button>
	</div>

	<!-- Sponsorship Benefits -->
	<div class="mb-8">
		<div class="rounded-xl border border-white bg-gray-50 p-6 lg:p-8">
			<h5 class="mb-4 text-lg font-medium text-gray-900">Why Sponsor DevFest Chennai 2025?</h5>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div class="flex items-start gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
						<svg
							class="h-4 w-4 text-blue-600"
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
					<div>
						<h6 class="font-medium text-gray-900">Reach 500+ Developers</h6>
						<p class="text-sm text-gray-600">Connect with Chennai's top tech talent</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
						<svg
							class="h-4 w-4 text-purple-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<div>
						<h6 class="font-medium text-gray-900">Brand Visibility</h6>
						<p class="text-sm text-gray-600">Logo placement and booth space</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
						<svg
							class="h-4 w-4 text-green-600"
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
					<div>
						<h6 class="font-medium text-gray-900">Recruitment</h6>
						<p class="text-sm text-gray-600">Direct access to skilled developers</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Title Sponsor -->
	<!-- <div class="mb-8">
		<h5 class="mb-4 text-lg font-medium text-gray-900">Title Sponsor</h5>
		<div class="rounded-xl border-2 border-dashed border-gray-300 p-4 text-center lg:p-8">
			<div class="mx-auto mb-3 flex h-16 w-32 items-center justify-center rounded-lg bg-gray-100">
				<span class="text-sm text-gray-500">{titleSponsorText}</span>
			</div>
			<p class="text-sm text-gray-600">{titleSponsorDescription}</p>
		</div>
	</div> -->

	<!-- Gold Sponsors -->
	<!-- <div class="mb-8">
		<h5 class="mb-4 text-lg font-medium text-gray-900">Gold Sponsors</h5>
		<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
			{#each Array.from({ length: goldSponsorsCount }, (_, i) => i) as i (i)}
				<div class="rounded-xl border-2 border-dashed border-gray-300 p-4 text-center lg:p-6">
					<div class="mx-auto mb-2 flex h-12 w-24 items-center justify-center rounded bg-gray-100">
						<span class="text-xs text-gray-500">Logo</span>
					</div>
					<p class="text-xs text-gray-600">Available</p>
				</div>
			{/each}
		</div>
	</div> -->

	<!-- Community Partners -->
	<div class="mb-8">
		<h5 class="mb-4 text-lg font-medium text-gray-900">Community Partners</h5>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each communityPartners as partner (partner.name)}
				<div class="rounded-lg bg-gray-50 p-3 text-center lg:p-4">
					<div class="mx-auto mb-2 flex h-16 w-16 items-center justify-center">
						<img
							src={partner.logo}
							alt={partner.alt || partner.name}
							class="h-full w-full object-contain"
						/>
					</div>
					<p class="text-xs font-medium text-gray-700">{partner.name}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
