<script>
  const { data } = $props();
  $inspect(data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

{#await data.vectorPromise}
  loading
{:then}
  never resolves
{:catch e}
  doesnt reject either
{/await}
