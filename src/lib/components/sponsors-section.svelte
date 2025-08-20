<script lang="ts">
	interface CommunityPartner {
		name: string;
		shortName: string;
		bgColor: string;
		textColor: string;
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
		benefitsText?: string;
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
			{ name: 'Chennai', shortName: 'GDG', bgColor: 'bg-red-100', textColor: 'text-red-600' },
			{ name: 'Chennai', shortName: 'WTM', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
			{ name: 'Chennai', shortName: 'DSC', bgColor: 'bg-green-100', textColor: 'text-green-600' },
			{
				name: 'Chennai',
				shortName: 'TechHub',
				bgColor: 'bg-purple-100',
				textColor: 'text-purple-600'
			}
		],
		benefitsText = 'Interested in sponsoring? 500+ developers • Direct talent access • Brand visibility • Community impact'
	}: SponsorsProps = $props();
</script>

<div class="rounded-3xl bg-white p-10 lg:col-span-3">
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
				{title}
			</h3>
			<h4 class="text-4xl font-medium">{subtitle}</h4>
		</div>
		<button
			class="rounded-full bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
			on:click={onCtaClick}
		>
			{ctaText}
		</button>
	</div>

	<!-- Title Sponsor -->
	<div class="mb-8">
		<h5 class="mb-4 text-lg font-medium text-gray-900">Title Sponsor</h5>
		<div class="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
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
			{#each Array(goldSponsorsCount) as _, i (i)}
				<div class="rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
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
			{#each communityPartners as partner (partner.shortName)}
				<div class="rounded-lg bg-gray-50 p-4 text-center">
					<div
						class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full {partner.bgColor}"
					>
						<span class="text-xs font-bold {partner.textColor}">{partner.shortName}</span>
					</div>
					<p class="text-xs font-medium text-gray-700">{partner.name}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Partnership benefits -->
	<div class="rounded-lg bg-gray-50 p-6">
		<p class="text-center text-sm text-gray-600">
			{benefitsText}
		</p>
	</div>
</div>
