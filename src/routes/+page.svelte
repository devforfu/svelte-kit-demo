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

  <form method="POST">
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
      {todo.description}
    </li>
  {/each}
  </ul>

</div>