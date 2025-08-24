export interface SEOConfig {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: 'website' | 'article' | 'event';
	author?: string;
	publishedTime?: string;
	modifiedTime?: string;
	section?: string;
	tags?: string[];
}

export function generateSEOTags(config: SEOConfig) {
	const {
		title = 'DevFest Chennai 2025 - GDG Chennai Developer Conference',
		description = 'Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation. Connect with industry experts and fellow developers in the heart of Tamil Nadu.',
		keywords = 'DevFest Chennai, GDG Chennai, developer conference, tech conference, programming, software development, technology, workshops, networking, innovation, Chennai, Tamil Nadu, India',
		image = 'https://devfest.gdgchennai.in/og-image.jpg',
		url = 'https://devfest.gdgchennai.in/',
		type = 'website',
		author = 'GDG Chennai',
		publishedTime,
		modifiedTime,
		section,
		tags = []
	} = config;

	const metaTags = [
		// Primary Meta Tags
		{ name: 'title', content: title },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'author', content: author },
		{ name: 'robots', content: 'index, follow' },
		{ name: 'language', content: 'English' },
		{ name: 'revisit-after', content: '7 days' },

		// Open Graph / Facebook
		{ property: 'og:type', content: type },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:image', content: image },
		{ property: 'og:site_name', content: 'DevFest Chennai 2025' },
		{ property: 'og:locale', content: 'en_US' },

		// Twitter
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: url },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description },
		{ property: 'twitter:image', content: image },

		// Additional SEO Meta Tags
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		{ name: 'theme-color', content: '#3B82F6' },
		{ name: 'msapplication-TileColor', content: '#3B82F6' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
		{ name: 'apple-mobile-web-app-title', content: 'DevFest Chennai 2025' }
	];

	// Add optional meta tags
	if (publishedTime) {
		metaTags.push({ property: 'article:published_time', content: publishedTime });
	}
	if (modifiedTime) {
		metaTags.push({ property: 'article:modified_time', content: modifiedTime });
	}
	if (section) {
		metaTags.push({ property: 'article:section', content: section });
	}
	if (tags.length > 0) {
		tags.forEach((tag) => {
			metaTags.push({ property: 'article:tag', content: tag });
		});
	}

	return {
		title,
		metaTags,
		canonical: url
	};
}

export function generateStructuredData(config: SEOConfig) {
	const {
		title = 'DevFest Chennai 2025',
		description = 'Join GDG Chennai for DevFest Chennai 2025, the premier developer conference in Chennai featuring cutting-edge tech talks, workshops, networking, and innovation.',
		url = 'https://devfest.gdgchennai.in/',
		type = 'website'
	} = config;

	if (type === 'event') {
		return {
			'@context': 'https://schema.org',
			'@type': 'Event',
			name: title,
			description,
			startDate: '2025-01-01T09:00:00',
			endDate: '2025-01-01T18:00:00',
			location: {
				'@type': 'Place',
				name: 'Chennai Conference Center',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Chennai, Tamil Nadu',
					addressLocality: 'Chennai',
					addressRegion: 'Tamil Nadu',
					addressCountry: 'IN'
				}
			},
			organizer: {
				'@type': 'Organization',
				name: 'GDG Chennai',
				url
			},
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'INR',
				availability: 'https://schema.org/InStock'
			}
		};
	}

	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url,
		publisher: {
			'@type': 'Organization',
			name: 'GDG Chennai',
			url
		}
	};
}
