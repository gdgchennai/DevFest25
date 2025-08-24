<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	interface Speaker {
		name: string;
		title: string;
		image?: string;
	}

	interface SpeakersProps {
		title?: string;
		subtitle?: string;
		ctaText?: string;
		onCtaClick?: () => void;
		speakers?: Speaker[];
	}

	let {
		title = 'Speakers',
		subtitle = 'People of craft',
		ctaText = 'View full',
		onCtaClick = () => {},
		speakers = [
			{
				name: 'Sanju Sivalingam',
				title: 'Founder & CEO @ Dun',
				image: 'https://avatars.githubusercontent.com/u/23400022?v=4'
			},
			{
				name: 'Somasundaram M',
				title: 'Lead Engineer @ JioHotstar',
				image:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszAXpfCLOd5XLvd3qdcutHHACeHK6UpXz5w&s'
			},
			{
				name: 'Varun M',
				title: 'Co–founder & CTO @ Skcript',
				image: 'https://assets.production.skcript.com/skcript/site-assets/images/people/varun.jpg'
			},
			{
				name: 'Ramachandran S',
				title: 'AI Engineer @ Bitwarden',
				image:
					'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/ram_prof.jpg'
			},
			{
				name: 'Naveen Kumar',
				title: 'Head of Engineering @ Freshworks',
				image:
					'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/naveen_s_MPrgpdH.jpg'
			},
			{
				name: 'Srinivasan S',
				title: 'Q&A Moderator',
				image: 'https://avatars.githubusercontent.com/u/23400022?v=4'
			}
		]
	}: SpeakersProps = $props();

	// Drag scroll functionality
	let isDragging = $state(false);
	let startX = $state(0);
	let scrollLeft = $state(0);
	let scrollContainer: HTMLElement;

	function handleMouseDown(e: MouseEvent) {
		isDragging = true;
		startX = e.pageX - scrollContainer.offsetLeft;
		scrollLeft = scrollContainer.scrollLeft;
		scrollContainer.style.cursor = 'grabbing';
		scrollContainer.style.userSelect = 'none';
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2; // Scroll speed multiplier
		scrollContainer.scrollLeft = scrollLeft - walk;
	}

	function handleMouseUp() {
		isDragging = false;
		scrollContainer.style.cursor = 'grab';
		scrollContainer.style.removeProperty('user-select');
	}

	function handleMouseLeave() {
		if (isDragging) {
			handleMouseUp();
		}
	}
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
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={scrollContainer}
		class="scrollbar-hidden flex cursor-grab flex-row gap-12 overflow-x-auto select-none"
		onmousedown={handleMouseDown}
		onmousemove={handleMouseMove}
		onmouseup={handleMouseUp}
		onmouseleave={handleMouseLeave}
		style="cursor: grab;"
	>
		{#each speakers as speaker (speaker.name)}
			<div
				class="flex min-w-[320px] flex-shrink-0 cursor-pointer flex-col items-center text-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1"
			>
				<div class="group relative">
					<img
						src={speaker.image}
						alt={speaker.name}
						class="mb-6 aspect-square w-72 border-4 border-white bg-gray-200 shadow-lg transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-6"
					/>
				</div>
				<h5
					class="mb-2 text-2xl font-bold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
					style="font-family: 'Caveat', sans-serif;"
				>
					{speaker.name}
				</h5>
				<p
					class="text-lg text-gray-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-gray-800"
				>
					{speaker.title}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.scrollbar-hidden {
		overflow: -moz-scrollbars-none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer and Edge */
	}
	.scrollbar-hidden::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
