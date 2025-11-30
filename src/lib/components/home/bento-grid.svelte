<script lang="ts">
  import { cn } from "$lib/utils";
  import TechBentoCard from "./tech-bento-card.svelte";
  import FuelAndVibe from "./fuel-and-vibe.svelte";

  let { class: className } = $props();
</script>

<div class={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}>
  <TechBentoCard />
  <FuelAndVibe />
</div>
