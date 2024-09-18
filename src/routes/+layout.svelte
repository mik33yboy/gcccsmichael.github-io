<script lang="ts">
	import '../app.css';
	import Dashboard from './dashboard/+page.svelte';
	import About from './about/+page.svelte';
	import Projects from './projects/+page.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;
	let isBottom = false;
	let scrollContainer: HTMLElement | null = null;
	let cursor: HTMLElement | null = null;
	let loading = true;
	let isDarkMode = false;
	let prevScrollY = 0;
	let isPointer = false;

	onMount(() => {
		// Simulate loading time (remove this in production and use actual loading logic)
		setTimeout(() => {
			loading = false;
			visible = true;
			handleScroll();
		}, 2000);

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll);
		}
		window.addEventListener('mousemove', updateCursorPosition);
		checkBackgroundColor();
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll);
			}
			window.removeEventListener('mousemove', updateCursorPosition);
		};
	});

	afterUpdate(() => {
		checkBackgroundColor();
	});

	function handleScroll() {
		if (!scrollContainer) return;

		const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
		isBottom = scrollHeight - scrollTop - clientHeight < 1; // 1px threshold

		// Check background color more frequently
		if (Math.abs(scrollTop - prevScrollY) > 10) {
			checkBackgroundColor();
			prevScrollY = scrollTop;
		}
	}

	function scrollToTop() {
		scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function updateCursorPosition(event: MouseEvent) {
		if (cursor) {
			cursor.style.left = `${event.clientX}px`;
			cursor.style.top = `${event.clientY}px`;
			const target = event.target as HTMLElement;
			isPointer = target.matches('a, button, [role="button"]');
		}
	}

	function checkBackgroundColor() {
		if (!scrollContainer) return;
		const rect = scrollContainer.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + 10; // Check near the top where the navbar is
		const element = document.elementFromPoint(x, y);
		if (element) {
			const bgColor = window.getComputedStyle(element).backgroundColor;
			const rgb = bgColor.match(/\d+/g);
			if (rgb) {
				const brightness =
					(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
				isDarkMode = brightness < 128; // Change this line
			}
		}
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<div class="custom-cursor" class:pointer={isPointer} bind:this={cursor}></div>

<!-- Add the navbar here, outside of the loading condition -->
{#if loading}
	<div class="loader-container" transition:fade={{ duration: 300 }}>
		<div class="loader-wrapper">
				<div class="loader"></div>
				<div class="loader-border"></div>
		</div>
	</div>
{:else}
	<!-- Move the navbar inside the else block -->
	<nav class="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full px-6 py-2 z-50 transition-colors duration-150 pointer-events-none"
     class:bg-white={isDarkMode} class:bg-black={!isDarkMode}>
    <ul class="flex space-x-6">
        <li><a href="/" class="transition-colors duration-150 rounded-full p-2 pointer-events-auto"
           class:text-white={!isDarkMode} class:text-black={isDarkMode}
           class:hover:text-black={!isDarkMode} class:hover:text-white={isDarkMode}
           class:hover:bg-white={!isDarkMode} class:hover:bg-black={isDarkMode}>
           <i class="fas fa-home text-xl"></i>
        </a></li>
        <li><a href="/about" class="transition-colors duration-150 rounded-full p-2 pointer-events-auto"
           class:text-white={!isDarkMode} class:text-black={isDarkMode}
           class:hover:text-black={!isDarkMode} class:hover:text-white={isDarkMode}
           class:hover:bg-white={!isDarkMode} class:hover:bg-black={isDarkMode}>
           <i class="fas fa-user text-xl"></i>
        </a></li>
        <li><a href="/projects" class="transition-colors duration-150 rounded-full p-2 pointer-events-auto"
           class:text-white={!isDarkMode} class:text-black={isDarkMode}
           class:hover:text-black={!isDarkMode} class:hover:text-white={isDarkMode}
           class:hover:bg-white={!isDarkMode} class:hover:bg-black={isDarkMode}>
           <i class="fas fa-project-diagram text-xl"></i>
        </a></li>
        <li><a href="/contact" class="transition-colors duration-150 rounded-full p-2 pointer-events-auto"
           class:text-white={!isDarkMode} class:text-black={isDarkMode}
           class:hover:text-black={!isDarkMode} class:hover:text-white={isDarkMode}
           class:hover:bg-white={!isDarkMode} class:hover:bg-black={isDarkMode}>
           <i class="fas fa-envelope text-xl"></i>
        </a></li>
    </ul>
</nav>

	<div
		class="scrollbar-custom h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
		bind:this={scrollContainer}
	>
		<main>
			<Dashboard />
			<About />
			<Projects />
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
{/if}

<style>
	.custom-cursor {
		pointer-events: none;
		position: fixed;
		width: 32px;
		height: 32px;
		background-image: url('/cursor.png');
		background-size: contain;
		background-repeat: no-repeat;
		transform: translate(-50%, -50%);
		z-index: 9999;
	}

	.custom-cursor.pointer {
		background-image: url('/pointer.png');
	}

	:global(body) {
		cursor: none;
	}

	:global(a, button, [role="button"]) {
		cursor: none;
	}
</style>

<!-- ... rest of the existing HTML ... -->
