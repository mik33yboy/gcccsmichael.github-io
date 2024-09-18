<script>
	import { fade } from 'svelte/transition';
	let visible = true; // or false, depending on your logic
</script>


<!-- DASHBOARD SECTION -->

<section class="bg-grid relative flex h-screen snap-start flex-col bg-black">
	


	<div class="flex flex-grow flex-col items-center justify-center overflow-hidden p-8">
		{#if visible}
			<div
				class="molex-shoora-bold mb-8 mt-32 w-full overflow-hidden text-[700px] leading-none text-white"
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
        <div class="absolute bottom-0 left-1/2 z-10 h-auto w-[900px] -translate-x-1/2 transform">
            <div class="glitter-container">
                {#each Array(40) as _, i}
                    <div 
                        class="glitter" 
                        style="left: {20 + Math.random() * 60}%; top: {30 + Math.random() * 70}%;"
                    ></div>
                {/each}
            </div>
            <div class="image-container overflow-hidden">
                <img
                    src="/profile.png"
                    
                    alt="Profile"
                    class="glow-effect h-auto w-full object-contain transition-transform duration-300 hover:scale-110 relative z-10"
                />
            </div>
        </div>
    </div>

	
</section>




<style>
    .image-container {
        position: relative;
    }

    .image-container img {
        transition: transform 0.3s ease;
    }

    .image-container:hover img {
        transform: scale(1.1);
    }
</style>

