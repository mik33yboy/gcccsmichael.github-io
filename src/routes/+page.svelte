<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;
	let isBottom = false;
	let scrollContainer: HTMLElement | null = null;

	onMount(() => {
			visible = true;
			handleScroll(); // Check initial scroll position
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

		console.log(
				'Scroll position:',
				scrollTop,
				'Scroll height:',
				scrollHeight,
				'Client height:',
				clientHeight,
				'Is bottom:',
				isBottom
		);
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap"
		rel="stylesheet"
	/>
	<!-- Add Molex Shoora font link here if it's a web font -->
</svelte:head>

<div
	class="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
	bind:this={scrollContainer}
	on:scroll={handleScroll}
>

<!-- DASHBOARD SECTION -->

	<section class="bg-grid relative flex h-screen snap-start flex-col bg-black">

		<!-- NAV BAR -->
	
		<nav class="mx-8 mt-10 mb-4 rounded-[20px] bg-white p-2 shadow-md">
			<div class="flex items-center justify-between pl-2 pr-2">
				<div class="flex items-center">
					<img src="/logo.png" alt="Logo" class="-my-1 mr-2 h-12" />
					<span class="font-montserrat text-2xl font-bold">MICHAEL DAYANDANTE</span>
				</div>
				<div class="flex items-center space-x-4 font-montserrat text-lg">
					<span class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white">Dashboard View</span>
					<span class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white">About</span>
					<span class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white">Projects</span>
				</div>
			</div>
		</nav>

		
		<div class="flex flex-grow flex-col items-center justify-center overflow-hidden p-8">
			{#if visible}
				<div
					class="molex-shoora-bold mb-8 mt-16 w-full overflow-hidden text-[700px] leading-none text-white"
					transition:fade={{ duration: 1000 }}
				>
					<div class="animate-left-right">
							<span>MICHAEL DAYANDANTE</span>
							<span>&nbsp;MICHAEL DAYANDANTE</span>
							<span>&nbsp;MICHAEL DAYANDANTE</span>
							<span>&nbsp;MICHAEL DAYANDANTE</span>
					</div>
				</div>
			{/if}
		</div>
		<div class="relative h-[200px]">
			<img
				src="/profile.png"
				alt="Profile"
				class="glow-effect absolute bottom-0 left-1/2 z-10 h-auto w-[800px] -translate-x-1/2 transform object-contain"
			/>
		</div>

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
	</section>



	<!-- ABOUT SECTION -->

	<section class="flex h-screen snap-start items-center justify-center bg-white p-8">
		<div>
			<h2 class="mb-4 text-4xl text-black">Second Section</h2>
			<p class="text-gray-800">This is the second section with a white background.</p>
		</div>
	</section>


	<!-- PROJECT SECTION -->


	<section class="flex h-screen snap-start items-center justify-center bg-black p-8">
		<div>
			<h2 class="mb-4 text-4xl text-white">Third Section</h2>
			<p class="text-gray-300">This is the third section with a black background.</p>
		</div>
	</section>
</div>






 <!-- MY ADDITIONAL STYLES -->

<style>

	/* TEXT ANIMATION */

	@keyframes moveLeftRight {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-left-right {
		animation: moveLeftRight 70s linear infinite;
		display: inline-flex;
		white-space: nowrap;
	}

	.animate-left-right span {
		flex-shrink: 0;
		padding-right: 20px; /* Add some space between repetitions */
	}

	
	/* SCROLL BAR */

	::-webkit-scrollbar {
		height: 4px;
		width: 4px;
	}
	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.1);
	}
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 2px;
	}


	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
	}

	/* DASHBOARD GRIDS */

	.bg-grid {
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size: 10px 10px;
	}


	/* MY FONTS */

	.font-montserrat {
		font-family: 'Montserrat', sans-serif;
	}

	@font-face {
		font-family: 'Molex Shoora';
		src: url('/path-to-your-font/MolexShoora-Bold.woff2') format('woff2'),
			 url('/path-to-your-font/MolexShoora-Bold.woff') format('woff');
		font-weight: bold;
		font-style: normal;
	}

	.molex-shoora-bold {
		font-family: 'Molex Shoora', sans-serif;
		font-weight: bold;
	}


	/* SCROLL DOWN ANIMATION */

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	

	.animate-bounce {
		animation: bounce 2s infinite;
	}


	
</style>
