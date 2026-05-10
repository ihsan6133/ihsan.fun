<script lang="ts">
    import Glider from "$lib/components/Glider.svelte";
    import Mailbox from "$lib/components/Mailbox.svelte";
    import { getAge } from "$lib/utils";

    const DOB = '2008-02-22';
    let age = $state(getAge(DOB));
    
</script>
<div class="container h-screen max-w-screen bg-linear-to-b from-sky-400 to-zinc-50 flex flex-col justify-between">
    <div class="p-6 pt-25 max-w-180 w-full mx-auto  flex flex-col justify-center">
        <h1  translate="no" class="animate-svelte-pop text-4xl  font-display text-zinc-700 text-shadow-lg">Ihsan</h1>
        
        <!-- <h2 class="animate-svelte-pop text-xl font-display text-zinc-700 mt-2">Welcome to my small corner on the interwebs :P</h2> -->

    
        <p class="animate-svelte-pop font-display text-md leading-7  text-zinc-800 mt-10">
            Hello there! I'm Ihsan, and welcome to my small corner on the internet. I enjoy making cool things, especially on computers. 
        </p>
    </div>

    <div >
        <div class="max-w-180 w-full mx-auto px-6 flex justify-end">
            
            <Mailbox/>
        </div>
        <div class="h-20 bg-[rgb(66,200,113)] shadow-[0_-10px_0px_0px_rgb(132,244,166),0px_-12px_0px_0px_rgba(0,0,0,1)]">
        </div>
    </div>
</div>
<svg class="block w-full h-12 -mt-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="rgb(118 81 36)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
<div class="h-50 bg-[rgb(118,81,36)]">

</div>

<svg class="block w-full h-12 -mt-12 scale-x-[-1]"  viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="rgb(173 136 92)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
<div class="h-30 bg-[rgb(173,136,92)]">

</div>

<svg class="w-full h-8 fill-[rgb(150,108,70)] -mt-8" viewBox="0 0 1440 100" preserveAspectRatio="none">
  <path d="M0,30 L120,60 L240,20 L480,80 L720,40 L960,90 L1200,30 L1440,70 L1440,100 L0,100 Z"></path>
</svg>

<div class="h-30 bg-[rgb(150,108,70)]">

</div>

<svg class="w-full h-10 fill-zinc-700 -mt-12" viewBox="0 0 1440 100" preserveAspectRatio="none">
  <path d="M0,50 L300,20 L600,80 L900,40 L1200,70 L1440,30 L1440,100 L0,100 Z"></path>
</svg>
<div class="h-30 bg-zinc-700">

</div>
<!-- 
<div class="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden" >
    <Glider/>
</div> -->