<script lang="ts">
	import { cn } from '$lib';
	import { FileText, Shield, Users, Accessibility, Phone, HelpCircle } from '@lucide/svelte';
	import { goto } from '$app/navigation';

	interface FooterLink {
		name: string;
		url: string;
		description: string;
		icon: any;
		gradient: string;
	}

	interface FooterLinksProps {
		title?: string;
		links?: FooterLink[];
	}

	const footerLinks: FooterLink[] = [
		{
			name: 'Terms of Service',
			url: '/terms',
			description: 'Event terms and conditions',
			icon: FileText,
			gradient: 'bg-gradient-to-b from-blue-300 to-blue-500'
		},
		{
			name: 'Privacy Policy',
			url: '/privacy',
			description: 'How we handle your data',
			icon: Shield,
			gradient: 'bg-gradient-to-b from-green-300 to-green-500'
		},
		{
			name: 'Code of Conduct',
			url: '/conduct',
			description: 'Community guidelines',
			icon: Users,
			gradient: 'bg-gradient-to-b from-purple-300 to-purple-500'
		},
		{
			name: 'Accessibility',
			url: '/accessibility',
			description: 'Accessibility information',
			icon: Accessibility,
			gradient: 'bg-gradient-to-b from-orange-300 to-orange-500'
		},
		{
			name: 'Contact Us',
			url: '/contact',
			description: 'Get in touch with us',
			icon: Phone,
			gradient: 'bg-gradient-to-b from-pink-300 to-pink-500'
		},
		{
			name: 'FAQ',
			url: '/faq',
			description: 'Frequently asked questions',
			icon: HelpCircle,
			gradient: 'bg-gradient-to-b from-indigo-300 to-indigo-500'
		}
	];

	let { title = 'More Info', links = footerLinks }: FooterLinksProps = $props();

	function handleLinkClick(url: string, linkName: string) {
		// Analytics tracking
		console.log(`Footer link clicked: ${linkName}`);

		// Navigate to the page
		if (url.startsWith('/')) {
			// Internal navigation using SvelteKit's goto
			goto(url);
		} else {
			// External link
			window.open(url, '_blank', 'noopener,noreferrer');
		}
	}
</script>

<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-6 lg:p-10">
	<div>
		<h3
			class="mb-2 text-3xl font-bold transition-all duration-300 hover:scale-105"
			style="font-family: 'Caveat', sans-serif;"
		>
			{title}
		</h3>
	</div>
	<div class="flex flex-wrap gap-3">
		{#each links as link, index}
			<button
				onclick={() => handleLinkClick(link.url, link.name)}
				class="group flex transform cursor-pointer items-center justify-center rounded-full px-6 py-3 text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-105 hover:rotate-0 hover:shadow-sm {link.gradient} text-white"
				title={link.description}
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
