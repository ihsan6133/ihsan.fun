<script lang="ts">
    const gliderStages = [
        [
            0, 1, 0,
            0, 0, 1,
            1, 1, 1
        ],
        [
            1, 0, 1,
            0, 1, 1,
            0, 1, 0
        ],
        [
            0, 0, 1,
            1, 0, 1,
            0, 1, 1
        ],
        [
            1, 0, 0,
            0, 1, 1,
            1, 1, 0,
        ]

    ]

    let currentState = $state(0);
    let posX = $state(0);
    let posY = $state(1);

    $effect(()=>{
        setInterval(()=>{

            if (currentState === 0) {
                posY+=1 
            } else if (currentState === 2) {
                posX+=1
            }

            currentState = (currentState + 1) % gliderStages.length;
        }, 100)
    });
</script>

<div class="w-10 h-10  absolute" style="transform: translate(calc(100%/3 * {posX}), calc(100%/3 * {posY}))">
    {#each gliderStages[currentState] as cell,i}
        {@const x = i % 3}
        {@const y = Math.trunc(i / 3)}

        <div class="absolute w-1/3 h-1/3 opacity-40" style="left: {x/3 *100}%; top: {y/3 * 100}%" class:bg-zinc-800={cell>0}></div>
    {/each}
</div>