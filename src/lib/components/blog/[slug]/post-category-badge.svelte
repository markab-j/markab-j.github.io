<script lang="ts">
  const { category } = $props();
</script>

<div class="border-border rounded-xl border px-1.5 py-0.5">
  <!-- eslint-disable svelte/no-navigation-without-resolve -->
  <a
    class="text-primary/70 hover:text-primary text-sm transition-colors duration-200"
    href={`/blog?category=${encodeURIComponent(category)}`}>{category}</a
  >
</div>
