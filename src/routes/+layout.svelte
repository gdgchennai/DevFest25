<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Primary Meta Tags -->
	<title>DevFest Chennai 2025 - GDG Chennai Developer Conference</title>
	<meta name="title" content="DevFest Chennai 2025 - GDG Chennai Developer Conference" />
	<meta
		name="description"
		content="Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation. Connect with industry experts and fellow developers in the heart of Tamil Nadu."
	/>
	<meta
		name="keywords"
		content="DevFest Chennai, GDG Chennai, developer conference, tech conference, programming, software development, technology, workshops, networking, innovation, Chennai, Tamil Nadu, India"
	/>
	<meta name="author" content="GDG Chennai" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://devfest.gdgchennai.in/" />
	<meta property="og:title" content="DevFest Chennai 2025 - GDG Chennai Developer Conference" />
	<meta
		property="og:description"
		content="Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation. Connect with industry experts and fellow developers in the heart of Tamil Nadu."
	/>
	<meta property="og:image" content="https://devfest.gdgchennai.in/og-image.jpg" />
	<meta property="og:site_name" content="DevFest Chennai 2025" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://devfest.gdgchennai.in/" />
	<meta
		property="twitter:title"
		content="DevFest Chennai 2025 - GDG Chennai Developer Conference"
	/>
	<meta
		property="twitter:description"
		content="Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation."
	/>
	<meta property="twitter:image" content="https://devfest.gdgchennai.in/twitter-image.jpg" />

	<!-- Additional SEO Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#3B82F6" />
	<meta name="msapplication-TileColor" content="#3B82F6" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="DevFest Chennai 2025" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://devfest.gdgchennai.in/" />

	<!-- Structured Data / JSON-LD -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Event",
			"name": "DevFest Chennai 2025",
			"description": "Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation.",
			"startDate": "2025-01-01T09:00:00",
			"endDate": "2025-01-01T18:00:00",
			"location": {
				"@type": "Place",
				"name": "Chennai Conference Center",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Chennai, Tamil Nadu",
					"addressLocality": "Chennai",
					"addressRegion": "Tamil Nadu",
					"addressCountry": "IN"
				}
			},
			"organizer": {
				"@type": "Organization",
				"name": "GDG Chennai",
				"url": "https://devfest.gdgchennai.in"
			},
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "INR",
				"availability": "https://schema.org/InStock"
			}
		}
	</script>
</svelte:head>

{@render children?.()}
