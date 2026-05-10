<script lang="ts">
    import { enhance } from "$app/forms";
    import { fly } from "svelte/transition";


    let lidOpen = $state(false);

    let dialog: HTMLDialogElement|null = $state(null);
    let textArea: HTMLTextAreaElement|null = $state(null);
    let messageValue = $state('');

    function timeStampString() {
        const date = new Date();
        const dateOptions: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }

        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

        return `${formattedDate}\n${formattedTime}\n`;
    }

    function openLetter() {

        if (messageValue.trim() == "") {
            
            let timeStamp = timeStampString();

            let finalString = `${timeStamp}\nFrom: `;

            messageValue = finalString;
              
        }  
        
        dialog?.show();
        textArea?.focus();
        

    }
</script>

<div  class="relative w-36" >
    <button class="cursor-pointer absolute w-[96%] h-[39%] top-0 left-0 rounded-t-xl" title="Send Letter"  onclick={openLetter} onmouseenter={()=>{lidOpen=true}} onmouseleave={()=>{lidOpen=false}}></button>

    <svg viewBox="0 0 364 522" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M174.5 519.5H216.5V200.5H174.5V519.5Z" fill="#DD820A"/>
    <path d="M216.5 200.5H347.5V77.5C347.5 66.2696 345.459 55.1265 341.38 45H136.88C140.959 55.1265 143 66.2696 143 77.5V200.5H174.5H216.5Z" fill="#FF4B4B"/>
    <path d="M11 71V186H43V71C43 33.4 61.3333 15.3556 70.5 11.0334C21.9477 12.3435 11 51.8248 11 71Z" fill="#FF4B4B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 200.5H143V77.5C143 66.2696 140.959 55.1265 136.88 45C127.157 20.8619 105.852 2.5 73 2.5C26 2.5 2.5 39.5 2.5 77.5V200.5ZM130.5 71V186H43H11V71C11 51.8248 21.9477 12.3435 70.5 11.0334C71.3225 11.0112 72.1558 11 73 11C120 11 130.5 51.5 130.5 71Z" fill="#FF8585"/>
    <path d="M277.5 2.5H73C105.852 2.5 127.157 20.8619 136.88 45H341.38C331.657 20.8619 310.352 2.5 277.5 2.5Z" fill="#FF8585"/>
    <path d="M130.5 186V71C130.5 51.5 120 11 73 11C72.1558 11 71.3225 11.0112 70.5 11.0334C61.3333 15.3556 43 33.4 43 71V186H130.5Z" fill="#BE2E2E"/>
    <path d="M216.5 200.5V519.5H174.5V200.5M216.5 200.5H347.5V77.5C347.5 66.2696 345.459 55.1265 341.38 45M216.5 200.5H174.5M174.5 200.5H143M143 200.5H2.5V77.5C2.5 39.5 26 2.5 73 2.5M73 2.5C105.852 2.5 127.157 20.8619 136.88 45C140.959 55.1265 143 66.2696 143 77.5V200.5M73 2.5H277.5C310.352 2.5 331.657 20.8619 341.38 45M43 186H130.5V71C130.5 51.5 120 11 73 11C72.1558 11 71.3225 11.0112 70.5 11.0334C21.9477 12.3435 11 51.8248 11 71V186H43ZM70.5 11.0334C61.3333 15.3556 43 33.4 43 71M43 71C43 108.6 43 163.333 43 186M43 71V186M136.88 45H341.38" stroke="black" stroke-width="5"/>
    
    <g>
        <path d="M325.5 111.5L331 135H357L361.5 92H238.548C239.807 95.0857 240.5 98.4619 240.5 102C240.5 105.348 239.879 108.551 238.746 111.5H325.5Z" fill="#FFB62E"/>
        <path d="M187.5 102C187.5 116.636 199.364 128.5 214 128.5C225.288 128.5 234.927 121.443 238.746 111.5C239.879 108.551 240.5 105.348 240.5 102C240.5 98.4619 239.807 95.0857 238.548 92C234.602 82.3214 225.097 75.5 214 75.5C199.364 75.5 187.5 87.3645 187.5 102Z" fill="#FFB62E"/>
        <path d="M238.548 92H361.5L357 135H331L325.5 111.5H238.746M238.746 111.5C239.879 108.551 240.5 105.348 240.5 102C240.5 98.4619 239.807 95.0857 238.548 92C234.602 82.3214 225.097 75.5 214 75.5C199.364 75.5 187.5 87.3645 187.5 102C187.5 116.636 199.364 128.5 214 128.5C225.288 128.5 234.927 121.443 238.746 111.5Z" stroke="black" stroke-width="4"/>
        <circle cx="214" cy="102" r="13" fill="#F87E2D" stroke="black" stroke-width="3"/>
    </g>


    {#if lidOpen}
    <g>

        <path d="M2.5 200.5H143V323.5C143 361.5 119.634 398.5 73 398.5C26 398.5 2.5 361.5 2.5 323.5V200.5Z" fill="#FF4B4B"/>
        <path d="M2.5 200.5H143V323.5C143 361.5 119.634 398.5 73 398.5C26 398.5 2.5 361.5 2.5 323.5V200.5Z" stroke="black" stroke-width="5"/>
    </g>
    {:else}
    <g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M143 200.5H2.5V77.5C2.5 39.5 26 2.5 73 2.5C105.852 2.5 127.157 20.8619 136.88 45C140.959 55.1265 143 66.2696 143 77.5V200.5ZM33.5 175.5V147H109V175.5H33.5Z" fill="#FF4B4B"/>
        <path d="M33.5 147V175.5H109V147H33.5Z" fill="#FF7070"/>
        <path d="M2.5 200.5H0V203H2.5V200.5ZM143 200.5V203H145.5V200.5H143ZM136.88 45L134.561 45.9341V45.9341L136.88 45ZM33.5 147V144.5L31 147H33.5ZM33.5 175.5H31L33.5 178V175.5ZM109 175.5V178L111.5 175.5H109ZM109 147H111.5L109 144.5V147ZM143 200.5V198H2.5V200.5V203H143V200.5ZM2.5 200.5H5V77.5H2.5H0V200.5H2.5ZM2.5 77.5H5C5 58.9871 10.7279 40.8353 22.0399 27.3572C33.3048 13.9353 50.2229 5 73 5V2.5V0C48.7771 0 30.4452 9.56474 18.2101 24.1428C6.02209 38.6647 0 58.0129 0 77.5H2.5ZM143 200.5H145.5V77.5H143H140.5V200.5H143ZM143 77.5H145.5C145.5 65.9723 143.406 54.5097 139.199 44.0659L136.88 45L134.561 45.9341C138.512 55.7432 140.5 66.5668 140.5 77.5H143ZM136.88 45L139.199 44.0659C129.135 19.0822 106.976 0 73 0V2.5V5C104.728 5 125.178 22.6416 134.561 45.9341L136.88 45ZM33.5 147H31V175.5H33.5H36V147H33.5ZM33.5 175.5V178H109V175.5V173H33.5V175.5ZM109 175.5H111.5V147H109H106.5V175.5H109ZM109 147V144.5H33.5V147V149.5H109V147Z" fill="black"/>
    </g>
    {/if}
    
    </svg>

</div>


<dialog bind:this={dialog} class="z-10 bg-transparent fixed top-0 left-0  w-full h-full open:flex items-center justify-center p-6 py-10">

    <form action="?/sendMessage" method="POST" use:enhance class="relative animate-svelte-pop selection:bg-[#60450940] w-full h-full max-w-180 p-6 pb-3 bg-amber-100 border-2 border-yellow-800 rounded-xs flex flex-col gap-4">
        
        <button type="button" class="absolute top-2 right-5 select-none text-2xl cursor-pointer font-semibold p-1" onclick={()=>{dialog?.close()}}>x</button>
        <!-- <div class="flex justify-between items-center">
            <h1 class="font-display text-xl">Send a message</h1>
        </div> -->

        <textarea bind:this={textArea} bind:value={messageValue} name="message" class="w-full grow text-[#482e03e6] font-display text-lg bg-local bg-[repeating-linear-gradient(transparent,transparent_27px,#9a5c00_27px,#000000_28px)]"></textarea>

        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <button type="button" class="cursor-pointer bg-[#7c520eb5] py-1 px-2 rounded-xs hover:bg-[#573807cf]" onclick={()=>{messageValue="", textArea?.focus();}}>
                    <span class="text-white font-display">Clear</span>
                </button>
                <button type="button" class="cursor-pointer bg-[#7c520eb5] py-1 px-2 rounded-xs hover:bg-[#573807cf]" onclick={()=>{messageValue += timeStampString(); textArea?.focus();}}>
                    <span class="text-white font-display">Add Timestamp</span>
                </button>
            </div>
            <button type="submit" class="flex items-center gap-1 cursor-pointer bg-[#7c520eb5] py-1 px-2 rounded-xs hover:bg-[#573807cf]">
                <span class="text-white font-display">Send</span>
                <svg height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 21V15M19 15L17 17M19 15L21 17M21 11V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H13M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863" stroke="#ededed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                
            </button>
        </div>

    </form>
</dialog>

<style>
    textarea {
    /* This removes the blue border box */
    outline: none;
    
    /* Optional: removes the standard border too */
    border: none;
    
    /* Makes sure the cursor is visible and has a specific color */
    caret-color: black; 
    
    /* Optional: disables the drag-to-resize handle in the corner */
    resize: none; 
    }

    textarea {
        scrollbar-color: #987a4c transparent; /* thumb color and track color */
        scrollbar-width: thin;
    }

</style>