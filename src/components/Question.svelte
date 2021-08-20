<script>
	import { player_data, correct_answers } from "../stores";
	export let id;
	export let title;
	export let choices;

	function updateQuestions(answer) {
		player_data.update(dt => ({
			...dt,
			[id]: answer,
		}))
	}
</script>

<div class="border p-2 mb-2" class:correct={!!$correct_answers[id]}>
	<h4>{title}</h4>
	<div class="choiches">
		{#each choices as c}
		<div class="form-check">
			<label class="form-check-label">
				<input
					class="form-check-input"
					type="radio"
					value={c}
					bind:group={$player_data[id]}
					on:change={updateQuestions(c)}
					/>
				{c}
			</label>
		</div>
		{/each}
	</div>
</div>
