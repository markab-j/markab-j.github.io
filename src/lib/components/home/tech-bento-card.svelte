<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { cn } from "$lib/utils";

  import Javascript from "$lib/components/icons/javascript.svelte";
  import Typescript from "$lib/components/icons/typescript.svelte";
  import Java from "$lib/components/icons/java.svelte";
  import Bun from "$lib/components/icons/bun.svelte";
  import Nodejs from "$lib/components/icons/nodejs.svelte";

  import SvelteIcon from "$lib/components/icons/svelte.svelte";
  import Nestjs from "$lib/components/icons/nestjs.svelte";
  import Express from "$lib/components/icons/express.svelte";

  import Tailwind from "$lib/components/icons/tailwind.svelte";
  import Vite from "$lib/components/icons/vite.svelte";
  import Shadcn from "$lib/components/icons/shadcn.svelte";
  import Zod from "$lib/components/icons/zod.svelte";
  import Supabase from "$lib/components/icons/supabase.svelte";

  type TechBentoCardProps = {
    class?: string;
  };

  let { class: className }: TechBentoCardProps = $props();

  const techGroups = [
    {
      label: "Languages & Runtimes",
      items: [
        { name: "JavaScript", icon: Javascript },
        { name: "TypeScript", icon: Typescript },
        { name: "Java", icon: Java },
        { name: "Bun", icon: Bun },
        { name: "Node.js", icon: Nodejs },
      ],
    },
    {
      label: "Frameworks",
      items: [
        { name: "SvelteKit", icon: SvelteIcon },
        { name: "NestJS", icon: Nestjs },
      ],
    },
    {
      label: "Libraries & Tools",
      items: [
        { name: "Tailwind", icon: Tailwind },
        { name: "Vite", icon: Vite },
        { name: "shadcn/ui", icon: Shadcn },
        { name: "Zod", icon: Zod },
        { name: "Express", icon: Express },
        { name: "Supabase", icon: Supabase },
      ],
    },
  ];
</script>

<Card.Root
  class={cn(
    "bg-card border-border/50 relative flex h-full flex-col overflow-hidden border",
    className
  )}
>
  <Card.Header class="pb-4">
    <Card.Title class="text-muted-foreground text-sm font-medium tracking-widest uppercase">
      Favorite
    </Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-1 flex-col gap-6 p-6 pt-0">
    {#each techGroups as group, i (i)}
      <div class="space-y-3">
        <h4 class="text-muted-foreground/70 text-[10px] font-semibold uppercase">
          {group.label}
        </h4>
        <div class="flex flex-wrap gap-x-5 gap-y-4">
          {#each group.items as stack, i (i)}
            <div class="group relative flex flex-col items-center">
              <div
                class="flex size-4 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
              >
                <stack.icon />
              </div>

              <span
                class="text-muted-foreground absolute -bottom-4 text-[10px] font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {stack.name}
              </span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </Card.Content>
</Card.Root>
