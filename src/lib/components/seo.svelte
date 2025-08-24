<script lang="ts">
	import { generateSEOTags, generateStructuredData, type SEOConfig } from '$lib/utils/seo.js';

	interface Props {
		config: SEOConfig;
	}

	let { config } = $props<Props>();

	$effect(() => {
		const seoData = generateSEOTags(config);
		const structuredData = generateStructuredData(config);

		// Update document title
		document.title = seoData.title;

		// Update meta tags
		seoData.metaTags.forEach((tag) => {
			const meta = document.querySelector(
				`meta[name="${tag.name}"], meta[property="${tag.property}"]`
			);
			if (meta) {
				meta.setAttribute('content', tag.content);
			} else {
				const newMeta = document.createElement('meta');
				if (tag.name) {
					newMeta.setAttribute('name', tag.name);
				}
				if (tag.property) {
					newMeta.setAttribute('property', tag.property);
				}
				newMeta.setAttribute('content', tag.content);
				document.head.appendChild(newMeta);
			}
		});

		// Update canonical URL
		let canonical = document.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.setAttribute('rel', 'canonical');
			document.head.appendChild(canonical);
		}
		canonical.setAttribute('href', seoData.canonical);

		// Update structured data
		let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
		if (!structuredDataScript) {
			structuredDataScript = document.createElement('script');
			structuredDataScript.setAttribute('type', 'application/ld+json');
			document.head.appendChild(structuredDataScript);
		}
		structuredDataScript.textContent = JSON.stringify(structuredData);
	});
</script>

<!-- This component doesn't render anything visible -->
