<script>
	import { fade } from 'svelte/transition';
	let visible = true; // or false, depending on your logic
</script>


<!-- DASHBOARD SECTION -->

<section class="bg-grid relative flex h-screen snap-start flex-col bg-black">
    
	<!-- NAV BAR -->

	<nav class="mx-8 mb-4 mt-10 rounded-[20px] bg-white p-2 shadow-md">
		<div class="flex items-center justify-between pl-2 pr-2">
			<div class="flex items-center">
				<img src="/logo.png" alt="Logo" class="-my-1 mr-2 h-12" />
				<span class="font-montserrat text-2xl font-bold">MICHAEL DAYANDANTE</span>
			</div>
			<div class="font-montserrat flex items-center space-x-4 text-lg">
				<span
					class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white"
					>Dashboard View</span
				>
				<span
					class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white"
					>About</span
				>
				<span
					class="cursor-pointer rounded-[30px] px-3 py-1 transition-colors hover:bg-black hover:text-white"
					>Projects</span
				>
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
        <div class="absolute bottom-0 left-1/2 z-10 h-auto w-[800px] -translate-x-1/2 transform">
            <div class="glitter-container">
                {#each Array(40) as _, i}
                    <div 
                        class="glitter" 
                        style="left: {20 + Math.random() * 60}%; top: {30 + Math.random() * 70}%;"
                    ></div>
                {/each}
            </div>
            <img
                src="/profile.png"
                alt="Profile"
                class="glow-effect h-auto w-full object-contain transition-transform duration-300 hover:scale-110 relative z-10"
            />
        </div>
    </div>

	
</section>



