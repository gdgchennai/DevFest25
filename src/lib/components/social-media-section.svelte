<script lang="ts">
	import { cn } from '$lib';
	import { Twitter, Linkedin, Instagram, Youtube, Github, MessageCircle } from '@lucide/svelte';

	interface SocialMediaLink {
		name: string;
		url: string;
		icon: any;
		color: string;
		gradient: string;
	}

	interface SocialMediaProps {
		title?: string;
		subtitle?: string;
		links?: SocialMediaLink[];
	}

	const socialMediaLinks: SocialMediaLink[] = [
		{
			name: 'Twitter/X',
			url: 'https://twitter.com/gdgchennai',
			icon: Twitter,
			color: 'hover:text-blue-400',
			gradient: 'bg-gradient-to-b from-blue-300 to-blue-500'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/company/gdgchennai',
			icon: Linkedin,
			color: 'hover:text-blue-600',
			gradient: 'bg-gradient-to-b from-blue-400 to-blue-600'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/gdgchennai',
			icon: Instagram,
			color: 'hover:text-pink-500',
			gradient: 'bg-gradient-to-b from-pink-300 to-pink-500'
		},
		{
			name: 'YouTube',
			url: 'https://youtube.com/@gdgchennai',
			icon: Youtube,
			color: 'hover:text-red-500',
			gradient: 'bg-gradient-to-b from-red-300 to-red-500'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/gdgchennai',
			icon: Github,
			color: 'hover:text-gray-700',
			gradient: 'bg-gradient-to-b from-gray-300 to-gray-500'
		},
		{
			name: 'Discord',
			url: 'https://discord.gg/gdgchennai',
			icon: MessageCircle,
			color: 'hover:text-indigo-500',
			gradient: 'bg-gradient-to-b from-indigo-300 to-indigo-500'
		}
	];

	let {
		title = 'Connect With GDG Chennai',
		subtitle = 'Stay updated with the latest tech events, workshops, and community news',
		links = socialMediaLinks
	}: SocialMediaProps = $props();

	function handleSocialClick(url: string, platform: string) {
		// Analytics tracking
		console.log(`Social media clicked: ${platform}`);
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<div class="rounded-3xl bg-white p-6 lg:p-10">
	<div class="mb-8">
		<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
			{title}
		</h3>
		<h4 class="mb-6 text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
	</div>

	<!-- Social Media Links -->
	<div class="flex flex-wrap gap-3">
		{#each links as link, index}
			<button
				onclick={() => handleSocialClick(link.url, link.name)}
				class="group flex transform cursor-pointer items-center justify-center rounded-full px-6 py-3 text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-105 hover:rotate-0 hover:shadow-sm {link.gradient} text-white"
				title={`Follow us on ${link.name}`}
				style="animation-delay: {index * 100}ms;"
			>
				<div class="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
					<link.icon size={24} />
				</div>
				<span class="ml-3 text-start transition-all duration-300 group-hover:font-medium">
					{link.name}
				</span>
			</button>
		{/each}
	</div>
</div>

<style>
	div[class*='group'] {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
