<script>
  export let data;
</script>

<div class="centered">

  <h1>Welcome!</h1>

  {#if data.id}
    <p>User ID = <em>{data.id}</em></p>
  {:else}
    <p>No user ID found.</p>
  {/if}

  <h2>todos</h2>

  <form method="POST" action="?/create">
    <label>
      add a todo:
      <input
        name="description"
        autocomplete="off"
      />
    </label>
  </form>

  <ul class="todos">
  {#each data.todos as todo (todo.id)}
    <li>
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={todo.id} />
        <span>{todo.description}</span>
        <button aria-label="Mark as complete"></button>
      </form>
    </li>
  {/each}
  </ul>

</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}
</style>