<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { dev } from '$app/environment';

	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({mode: dev? 'development': 'production'});
	
	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Unbounded:wght@200..900&display=swap" rel="stylesheet">

</svelte:head>

{@render children()}
