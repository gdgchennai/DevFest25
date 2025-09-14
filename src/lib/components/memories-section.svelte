<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';

	interface Memory {
		id: string;
		image: string;
		title: string;
		description: string;
		year: string;
	}

	interface MemoriesProps {
		title?: string;
		subtitle?: string;
		memories?: Memory[];
	}

	let {
		title = 'Memories',
		subtitle = 'Past DevFest moments',
		memories = [
			{
				id: '1',
				image: '/memories/1.JPG',
				title: 'People collecting their ID',
				description: 'People collecting their ID cards for the event',
				year: '2024'
			},
			{
				id: '2',
				image: '/memories/2.JPG',
				title: 'Opening Ceremony',
				description: 'The opening ceremony of the event',
				year: '2024'
			},
			{
				id: '3',
				image: '/memories/3.JPG',
				title: 'Photo Booth',
				description: 'People enjoying the photo booth',
				year: '2024'
			},
			{
				id: '4',
				image: '/memories/4.JPG',
				title: 'Houseful ceremony',
				description: 'The houseful ceremony of the event',
				year: '2024'
			},
			{
				id: '5',
				image: '/memories/5.JPG',
				title: 'Women Techmakers Chennai hosting DevFest',
				description: 'Hema, WTM Chennai, hosting the event',
				year: '2024'
			},
			{
				id: '6',
				image: '/memories/6.JPG',
				title: 'Lunch & Networking',
				description: 'People enjoying the lunch and networking',
				year: '2024'
			},
			{
				id: '7',
				image: '/memories/7.JPG',
				title: 'Speaker Session',
				description: 'Speaker session with industry experts',
				year: '2024'
			},
			{
				id: '8',
				image: '/memories/8.JPG',
				title: 'Panel Discussions',
				description: 'Industry experts share career insights and industry trends',
				year: '2024'
			},
			{
				id: '9',
				image: '/memories/9.JPG',
				title: 'Prize Distribution',
				description: 'Prize distribution to the winners',
				year: '2024'
			},
			{
				id: '10',
				image: '/memories/10.JPG',
				title: 'Closing Ceremony',
				description: 'Naveen, hosting the closing ceremony',
				year: '2024'
			},
			{
				id: '11',
				image: '/memories/11.JPG',
				title: 'Volunteers Group Photo',
				description: 'These are the volunteers who made the event possible',
				year: '2024'
			}
		]
	}: MemoriesProps = $props();

	let api = $state<CarouselAPI>();
	let current = $state(0);
	const count = $derived(api ? api.scrollSnapList().length : 0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});
</script>

<div class="w-full bg-gray-100 p-4">
	<div class="mx-auto max-w-7xl">
		<div class="rounded-3xl bg-white p-8 lg:p-12">
			<div class="mb-8 text-center">
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
					{title}
				</h3>
				<h4 class="text-xl font-medium tracking-tight sm:text-2xl">{subtitle}</h4>
			</div>

			<div class="relative">
				<Carousel.Root
					setApi={(emblaApi) => (api = emblaApi)}
					opts={{
						align: 'start',
						loop: true
					}}
					class="w-full"
				>
					<Carousel.Content class="-ml-2 md:-ml-4">
						{#each memories as memory (memory.id)}
							<Carousel.Item class="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
								<div
									class="group relative overflow-hidden rounded-xl bg-white transition-all duration-300 hover:scale-105"
								>
									<div class="aspect-[4/3] overflow-hidden">
										<img src={memory.image} alt={memory.title} class="h-full w-full object-cover" />
									</div>
									<div class="p-4">
										<div class="mb-2">
											<span
												class="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
											>
												{memory.year}
											</span>
										</div>
										<h5 class="mb-2 text-lg font-semibold text-gray-900">{memory.title}</h5>
										<p class="text-sm text-gray-600">{memory.description}</p>
									</div>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="absolute top-1/2 left-4 -translate-y-1/2" />
					<Carousel.Next class="absolute top-1/2 right-4 -translate-y-1/2" />
				</Carousel.Root>

				<!-- Carousel Indicators -->
				<div class="mt-6 flex justify-center space-x-2">
					{#each Array.from({ length: count }, (_, i) => i) as i (i)}
						<button
							class="h-2 w-2 rounded-full transition-colors {current === i + 1
								? 'bg-blue-600'
								: 'bg-gray-300'}"
							onclick={() => api?.scrollTo(i)}
						></button>
					{/each}
				</div>

				<!-- Slide Counter -->
				<div class="mt-4 text-center text-sm text-gray-500">
					{current} of {count}
				</div>
			</div>
		</div>
	</div>
</div>
