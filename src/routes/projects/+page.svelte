	<!-- PROJECT SECTION -->


	<section class="flex h-screen snap-start items-center justify-start bg-black p-8">
		<div class="text-left ml-8 w-full">
			<h3 class="mb-8 text-xl uppercase text-[#FF5733] tracking-[0.5em]">MY PROJECTS</h3>
			<div class="relative w-full">
				{#each projects as { name, description, year }, i}
					<div class="project-container relative w-full flex items-center mb-4">
						<div class="project-item w-full flex items-center transition-all duration-300 ease-in-out hover:bg-[#FF5733] hover:-translate-x-2 p-2">
							<div class="flex flex-col items-end mr-4 text-right">
								<span class="text-4xl font-bold text-[#D3D3D3]">{year.split(' ')[0]}</span>
								<span class="text-2xl text-[#D3D3D3]">YEAR</span>
							</div>
							<h2 class="text-8xl font-bold text-[#D3D3D3] leading-[1.2] flex-1">
								{name}
							</h2>
							<p class="text-black text-xl w-1/3 ml-4">
								{description}
							</p>
						</div>
						{#if i < projects.length - 1}
							<div class="absolute bottom-0 left-0 w-full h-[1px] bg-[#333333]"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<style>
		section, h2 {
			font-family: 'Avant Garde', 'Century Gothic', 'AppleGothic', sans-serif;
		}
		
		.project-container:hover .project-item {
			background-color: #FF5733;
			transform: translateX(-0.5rem);
		}

		.project-container:hover h2 {
			color: black;
		}

		.project-container p {
			opacity: 0;
			transition: opacity 300ms ease-in-out;
		}

		.project-container:hover p {
			opacity: 1;
		}
	</style>

	<script>
		const projects = [
			{ name: 'EDUC-SYSTEM', description: 'An educational portal similar to GCLAMP, providing students and teachers with resources, course management, assignments, and grade tracking.', year: '2ND' },
			{ name: 'ONLINE FLOWERSHOP', description: 'A virtual flower store offering a wide selection of flowers, bouquets, and arrangements with online ordering and delivery options.', year: '2ND' },
            { name: 'GCAMS', description: 'An RFID-based attendance management system for Gordon College, streamlining student check-ins, record-keeping, and real-time attendance tracking.', year: '2ND' },
			{ name: 'KANBAN-BOARD', description: 'A task management tool using visual boards, columns, and cards to help teams organize workflow, track progress, and enhance productivity.', year: '2ND' },
			{ name: 'WEATHER-APP', description: 'A user-friendly weather application displaying current weather conditions, forecasts, temperature, humidity, and other meteorological data for various locations.', year: '2ND' },
			{ name: 'POS-SYSTEM', description: 'A comprehensive point-of-sale system enabling businesses to process transactions, manage inventory, track sales, and generate reports efficiently.', year: '3RD' },
		];
	</script>