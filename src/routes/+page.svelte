<script>
	export let data;
	let greger = '';

	function doStuff() {
		return 'sab'.toUpperCase();
	}
</script>

<!-- <h1>Welcome to SvelteKit{data.results[0].firstname}</h1> -->
<h1>Welcome to SvelteKit sf{doStuff()}</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
