<!-- src/routes/technologies/+page.svelte -->
<style>
    .moving {
        animation: move 60s linear infinite;
        display: flex; /* Ensure cards are in a row */
        width: calc(700px * 5); /* Adjust based on the number of cards */
        gap: 16px; /* Add gap between cards */
    }

    @keyframes move {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%); /* Adjust based on the number of cards */
        }
    }

    .card {
        min-width: 700px; /* Ensure cards have a fixed width */
    }
</style>

<div class="flex flex-col space-y-4 h-screen justify-start"> <!-- Changed 'justify-end' to 'justify-start' -->
    <div class="moving"> <!-- Removed 'mt-auto' to allow continuous movement -->
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">1</div>
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">2</div>
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">3</div>
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">4</div>
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">5</div>
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">1</div> <!-- Duplicate for infinite effect -->
        <div class="card bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md rounded-[20px] h-[400px] border-[0.5px]">2</div> <!-- Duplicate for infinite effect -->
    </div>
</div>


