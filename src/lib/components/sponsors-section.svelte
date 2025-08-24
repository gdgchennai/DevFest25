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
				name: 'Google Developer Groups Chennai',
				logo: '/sponsors/community/gdgchennai.png',
				alt: 'GDG Chennai Logo'
			},
			{
				name: 'Women Techmakers Chennai',
				logo: '/sponsors/community/gdgchennai.png',
				alt: 'WTM Chennai Logo'
			},
			{
				name: 'Developer Student Clubs Chennai',
				logo: '/sponsors/community/gdgchennai.png',
				alt: 'DSC Chennai Logo'
			},
			{
				name: 'Chennai TechHub',
				logo: '/sponsors/community/gdgchennai.png',
				alt: 'Chennai TechHub Logo'
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
		<Button size="lg" onclick={onCtaClick}>{ctaText}</Button>
	</div>

	<!-- Title Sponsor -->
	<div class="mb-8">
		<h5 class="mb-4 text-lg font-medium text-gray-900">Title Sponsor</h5>
		<div class="rounded-xl border-2 border-dashed border-gray-300 p-4 text-center lg:p-8">
			<div class="mx-auto mb-3 flex h-16 w-32 items-center justify-center rounded-lg bg-gray-100">
				<span class="text-sm text-gray-500">{titleSponsorText}</span>
			</div>
			<p class="text-sm text-gray-600">{titleSponsorDescription}</p>
		</div>
	</div>

	<!-- Gold Sponsors -->
	<div class="mb-8">
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
	</div>

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
