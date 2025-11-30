<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";

  import Typescript from "$lib/components/icons/typescript.svelte";
  import Javascript from "$lib/components/icons/javascript.svelte";
  import Express from "$lib/components/icons/express.svelte";
  import Nestjs from "$lib/components/icons/nestjs.svelte";
  import React from "$lib/components/icons/react.svelte";
  import SvelteIcon from "$lib/components/icons/svelte.svelte";

  const skills = {
    proficient: [
      { name: "TypeScript", icon: Typescript },
      { name: "JavaScript", icon: Javascript },
      { name: "Express.js", icon: Express },
      { name: "NestJS", icon: Nestjs },
    ],
    learning: [
      { name: "React", icon: React },
      { name: "Svelte & SvelteKit", icon: SvelteIcon },
    ],
  };
</script>

<section class="border-border bg-card/50 col-span-1 space-y-6 rounded-xl border p-8 lg:col-span-2">
  <div class="space-y-1">
    <h2 class="text-2xl font-bold tracking-tight">Skills</h2>
  </div>

  <div class="grid gap-6 sm:grid-cols-2">
    <div class="space-y-3">
      <h3 class="text-foreground/90 text-sm font-semibold">Proficient</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.proficient as skill, i (i)}
          <Badge
            variant="secondary"
            class="hover:bg-secondary/80 flex items-center gap-2 px-3 py-1.5 transition-all"
          >
            <div class="h-4 w-4">
              <skill.icon />
            </div>
            <span>{skill.name}</span>
          </Badge>
        {/each}
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-foreground/90 text-sm font-semibold">Learning</h3>
      <div class="flex flex-wrap gap-2">
        {#each skills.learning as skill, i (i)}
          <Badge
            variant="outline"
            class="flex items-center gap-2 px-3 py-1.5 opacity-80 transition-all hover:opacity-100"
          >
            <div class="h-3.5 w-3.5 grayscale">
              <skill.icon />
            </div>
            <span>{skill.name}</span>
          </Badge>
        {/each}
      </div>
    </div>
  </div>
</section>
