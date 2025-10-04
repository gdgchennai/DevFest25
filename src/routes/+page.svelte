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
		MemoriesSection,
		FinalCTASection,
		SEO,
		SocialMediaSection
	} from '$lib/components';

	function handleRegisterClick() {
		// Handle registration click
		console.log('Register clicked');
	}

	function handleAgendaClick() {
		// Handle agenda click
		console.log('Agenda clicked');
	}

	function handleApplyAsSpeaker() {
		// Handle apply as speaker
		console.log('Apply as speaker clicked');
	}

	function handleBecomeSponsor() {
		// Handle become sponsor
		console.log('Become sponsor clicked');
	}

	// SEO configuration for the homepage
	const seoConfig = {
		title: 'DevFest Chennai 2025 - GDG Chennai Premier Developer Conference',
		description:
			'Join GDG Chennai for DevFest Chennai 2025, the ultimate developer conference in Chennai featuring cutting-edge tech talks, hands-on workshops, networking opportunities, and innovation showcases. Connect with industry experts, learn from thought leaders, and discover the latest in software development in the heart of Tamil Nadu.',
		keywords:
			'DevFest Chennai, GDG Chennai, developer conference, tech conference, programming, software development, technology, workshops, networking, innovation, web development, mobile development, AI, machine learning, cloud computing, Chennai, Tamil Nadu, India',
		image: 'https://devfest.gdgchennai.in/og-image.jpg',
		url: 'https://devfest.gdgchennai.in/',
		type: 'event' as const,
		tags: [
			'DevFest Chennai',
			'GDG Chennai',
			'developer conference',
			'tech event',
			'programming',
			'software development',
			'networking',
			'innovation',
			'Chennai',
			'Tamil Nadu'
		]
	};
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
		<SpeakersSection onCtaClick={handleApplyAsSpeaker} />
		<SponsorsSection onCtaClick={handleBecomeSponsor} />
		<VenueSection />
		<FAQSection />
	</div>

	<!-- Memories Section (Full Width) -->
	<MemoriesSection />

	<!-- Final CTA Section (Full Width) -->
	<div class="mx-auto max-w-7xl">
		<FinalCTASection />
	</div>

	<!-- Social Media Section (Full Width) -->
	<SocialMediaSection />
</div>
