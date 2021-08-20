<script>
  import { player_name } from "../stores.js";

  let name = "";
  let player_name_value = "";

  function setName() {
    player_name.set(name);
  }

  player_name.subscribe((value) => {
    name = value;
  });
</script>

<div class="px-4 py-5 my-5 text-center">
  <div class="col-lg-6 mx-auto">
    <form>
      <label for="name">Input your name!</label>
      <input bind:value={name} />
      <button class="btn btn-primary" on:click={setName}>Start quiz!</button>
    </form>
  </div>
</div>
