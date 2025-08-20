<script lang="ts">
	import {
		Header,
		HeroSection,
		ExperienceSection,
		WhyJoinSection,
		EventHighlightsSection,
		AgendaSection,
		InsiderTipsSection,
		TracksSection,
		SpeakersSection,
		SponsorsSection,
		VenueSection,
		FAQSection,
		FinalCTASection
	} from '$lib/components';

	function handleRegisterClick() {
		// Handle registration click
		console.log('Register clicked');
	}

	function handleAgendaClick() {
		// Handle agenda click
		console.log('Agenda clicked');
	}

	function handleViewFullSpeakers() {
		// Handle view full speakers
		console.log('View full speakers clicked');
	}

	function handleBecomeSponsor() {
		// Handle become sponsor
		console.log('Become sponsor clicked');
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

<div class="min-h-screen bg-gray-100 p-4">
	<Header onCtaClick={handleRegisterClick} />

	<!-- Main Content Grid -->
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
		<HeroSection onPrimaryCtaClick={handleRegisterClick} onSecondaryCtaClick={handleAgendaClick} />
		<ExperienceSection />
		<WhyJoinSection />
		<EventHighlightsSection />
		<AgendaSection />
		<InsiderTipsSection />
		<TracksSection />
		<SpeakersSection onCtaClick={handleViewFullSpeakers} />
		<SponsorsSection onCtaClick={handleBecomeSponsor} />
		<VenueSection />
		<FAQSection />
		<FinalCTASection />
	</div>
</div>
