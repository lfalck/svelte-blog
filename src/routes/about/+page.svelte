<script>
	export let data;

	import About from './About.svelte';
	let randomInt = Math.floor(Math.random() * data.catFacts.length - 1);
</script>

<h1>abooodout</h1>
<h2>{data?.catFacts[randomInt].text}</h2>
<About></About>
