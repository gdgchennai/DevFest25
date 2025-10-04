<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';

	let isVisible = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isVisible = window.scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if isVisible}
	<Button
		variant="outline"
		size="icon"
		onclick={scrollToTop}
		class="fixed right-8 bottom-8 z-50 size-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
		aria-label="Scroll to top"
	>
		<ChevronUpIcon class="size-5" />
	</Button>
{/if}
