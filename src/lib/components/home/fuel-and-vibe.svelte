<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { cn } from "$lib/utils";
  import Spotify from "$lib/components/icons/spotify.svelte";
  import Coffee from "@lucide/svelte/icons/coffee";
  import ExternalLink from "@lucide/svelte/icons/external-link";

  type FuelCardProps = {
    class?: string;
  };

  let { class: className }: FuelCardProps = $props();

  const musicData = {
    title: "turning into something else",
    artist: "lazarus best for us",
    url: "https://open.spotify.com/track/6jEzUbuKsjTVbphohOyz82?si=d5fab06f1c40433a",
  };
</script>

<Card.Root
  class={cn(
    "bg-card border-border/50 relative flex h-full flex-col justify-between overflow-hidden border",
    className
  )}
>
  <Card.Header class="pb-4">
    <Card.Title class="text-muted-foreground text-sm font-medium tracking-widest uppercase">
      Fuel & Vibe
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-1 flex-col justify-between gap-6 p-6 pt-0">
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-muted-foreground/70 text-[10px] font-semibold uppercase">Now Playing</h4>
        <div class="flex h-3 items-end gap-[2px]">
          <span class="bg-primary animate-music-bar-1 h-full w-[2px]"></span>
          <span class="bg-primary animate-music-bar-2 h-full w-[2px]"></span>
          <span class="bg-primary animate-music-bar-3 h-full w-[2px]"></span>
        </div>
      </div>

      <div
        class="group border-border/50 bg-secondary/20 hover:bg-secondary/40 flex items-center gap-3 rounded-md border p-3 transition-colors"
      >
        <div class="text-primary relative flex size-8 shrink-0 items-center justify-center rounded">
          <Spotify />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-0.5">
          <span class="truncate text-sm leading-none font-medium group-hover:underline">
            {musicData.title}
          </span>
          <span class="text-muted-foreground truncate text-xs">
            {musicData.artist}
          </span>
        </div>

        <ExternalLink
          class="text-muted-foreground h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
    </div>

    <div class="space-y-3">
      <h4 class="text-muted-foreground/70 text-[10px] font-semibold uppercase">Caffeine Level</h4>
      <div class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-amber-950/10">
          <Coffee class="h-4 w-4 text-amber-800" />
        </div>
        <div class="flex flex-1 flex-col gap-1.5">
          <div class="flex items-center justify-between text-xs">
            <span class="font-medium">Espresso</span>
            <span class="text-muted-foreground">87%</span>
          </div>
          <div class="bg-secondary/60 h-1.5 w-full overflow-hidden rounded-full">
            <div
              class="h-full w-[87%] rounded-full bg-gradient-to-r from-amber-700 to-amber-950"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>

<style>
  /* Tailwind Config에 추가하거나 전역 CSS에 넣는 것을 권장하지만, 빠른 적용을 위해 여기 작성함 */
  @keyframes music-bar {
    0%,
    100% {
      height: 20%;
    }
    50% {
      height: 100%;
    }
  }
  .animate-music-bar-1 {
    animation: music-bar 0.8s ease-in-out infinite;
  }
  .animate-music-bar-2 {
    animation: music-bar 0.8s ease-in-out 0.2s infinite;
  }
  .animate-music-bar-3 {
    animation: music-bar 0.8s ease-in-out 0.4s infinite;
  }
</style>
