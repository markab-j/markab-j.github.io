<script lang="ts">
  import type { TimelineItem } from "$lib/types/about";

  interface TimelineSectionProps {
    timeline: TimelineItem[];
  }

  const { timeline }: TimelineSectionProps = $props();
</script>

<section class="mb-4">
  <h2 class="mb-4 text-center text-2xl font-bold tracking-tight lg:text-left">My Journey</h2>
  <ul class="flow-root">
    {#each timeline as Item, i (i)}
      <li class="flex gap-4">
        <div class="relative flex flex-col items-center">
          <div class="bg-background z-10 flex size-8 items-center justify-center rounded-full">
            <Item.icon />
          </div>
          {#if i !== timeline.length - 1}
            <div class="bg-border w-0.5 flex-grow"></div>
          {/if}
        </div>
        <div class="flex-grow pb-8">
          <p class="text-muted-foreground text-xs font-medium">{Item.date}</p>
          <p class="mt-0.5 text-base font-semibold">{Item.title}</p>
          <p class="text-muted-foreground mt-1 text-sm">{Item.description}</p>
        </div>
      </li>
    {/each}
  </ul>
</section>
