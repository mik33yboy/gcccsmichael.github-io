<script lang="ts">
	import '../app.css';
	import Dashboard from './dashboard/+page.svelte';
	import About from './about/+page.svelte';
	import Projects from './projects/+page.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;
	let isBottom = false;
	let scrollContainer: HTMLElement | null = null;

	onMount(() => {
		visible = true;
		handleScroll(); // Check initial scroll position
		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll);
			}
		};
	});

	function handleScroll() {
		if (!scrollContainer) return;

		const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
		isBottom = scrollHeight - scrollTop - clientHeight < 1; // 1px threshold
	}

	function scrollToTop() {
		scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<!-- SCROLL BAR -->

<div
	class="scrollbar-custom h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
	bind:this={scrollContainer}
>
	<main>
		<Dashboard />
		<About />
		<Projects />
	</main>

	<!-- SCROLL ANIMATION -->

	<div class="font-montserrat fixed bottom-8 left-8 z-50 animate-bounce text-white">
		{#if visible}
			<div transition:fade={{ duration: 300 }}>
				{#if isBottom}
					<span class="mr-2">Scroll Up</span>
					<svg
						class="inline-block h-5 w-5 rotate-180 transform"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				{:else}
					<span class="mr-2">Scroll Down</span>
					<svg
						class="inline-block h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				{/if}
			</div>
		{/if}
	</div>
</div>
