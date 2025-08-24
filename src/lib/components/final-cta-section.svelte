<script lang="ts">
	import { Button } from '@/components/ui/button/index.js';

	interface FinalCTAProps {
		title?: string;
		subtitle?: string;
	}

	let { title = 'DevFest 2025', subtitle = 'Ready to join?' }: FinalCTAProps = $props();
</script>

<div class="rounded-3xl bg-white p-8 text-center lg:col-span-3 lg:p-20">
	<h3 class="mb-4 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
		{title}
	</h3>
	<h4 class="text-5xl font-medium">{subtitle}</h4>

	<div class="mt-12">
		<Button size="lg">Register now</Button>
	</div>
</div>
