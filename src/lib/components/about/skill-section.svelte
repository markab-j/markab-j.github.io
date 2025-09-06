<script lang="ts">
  import type { SkillInfo } from "$lib/types/about";

  interface SkillSectionProps {
    skillInfo: SkillInfo;
  }

  const { skillInfo }: SkillSectionProps = $props();
</script>

<section class="border-border bg-card/50 space-y-6 rounded-xl border p-8 lg:col-span-2">
  <h2 class="text-2xl font-bold tracking-tight">Skills</h2>
  <div>
    <h3 class="text-accent-foreground/80 text-base font-semibold">Proficient</h3>
    <div class="mt-3 flex flex-wrap gap-2">
      {#each skillInfo.proficient as skill (skill)}
        <span class="rounded-md border border-gray-200 px-2 py-0.5 text-sm font-medium">
          {skill}
        </span>
      {/each}
    </div>
  </div>
  <div>
    <h3 class="text-accent-foreground/80 text-base font-semibold">Learning</h3>
    <div class="mt-3 flex flex-wrap gap-2">
      {#each skillInfo.learning as skill (skill)}
        <span
          class="rounded-md border border-dashed border-gray-200 px-2 py-0.5 text-sm font-medium"
        >
          {skill}
        </span>
      {/each}
    </div>
  </div>
</section>
