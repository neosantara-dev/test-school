<script>
	import { player_name, player_data, answered_count } from "./stores.js";
	import Question from "./components/Question.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Registration from "./components/Registration.svelte";
	import { onMount } from "svelte";
	import { questions } from './quizes';
	import localforage from 'localforage';

	player_name.subscribe(value => {
		localforage.setItem('player_name', value);
	});

	player_data.subscribe(value => {
		localforage.setItem('player_data', value);
	});

	onMount(() => {
		// console.log('the component has mounted');
		localforage.getItem('player_name').then(function(value) {
			if (value) {
				player_name.set(value);
			}
		}).catch(function(err) {
			console.log(err);
		});
		localforage.getItem('player_data').then(function(value) {
			if (value) {
				player_data.set(value);
			}
		}).catch(function(err) {
			console.log(err);
		});
	});

	function resetAnswers() {
		if (confirm('Reset answers?')) {
			player_data.set({});
		}
	}

</script>

<main class="pb-4">
	<Navbar />
	<div class="container">
		{#if !$player_name}
		  <Registration />
		{:else}
		  <h1>Hi {$player_name}!</h1>
		  {#each questions as q}
		  	<Question id={q.id} title={q.question} choices={q.choices} />
		  {/each}
		  <div class="button mt-4 d-flex">
			  <button disabled={$answered_count == 0} class="btn btn-secondary" on:click={resetAnswers}>Reset</button>
			  <button class="btn btn-primary ms-auto">Submit</button>
		  </div>
		{/if}
	</div>
</main>
