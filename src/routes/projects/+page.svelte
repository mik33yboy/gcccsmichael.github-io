<section class="w-full h-screen p-8 flex items-center">
  <div>
    <div class="space-y-2">
      {#each ['3D', 'VISUAL', 'MOTION', 'PRODUCT', 'TUTORIAL'] as text, index}
        <div class="group">
          <h2 class="text-6xl font-bold transition-colors duration-300 
                     {index === 0 ? 'text-orange-500' : 'text-neutral-200 group-hover:text-orange-500'}">
            {text}
          </h2>
        </div>
      {/each}
    </div>
  </div>
</section>
