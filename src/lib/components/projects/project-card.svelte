<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { cn } from "$lib/utils";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import type { ProjectData } from "$lib/types/project";

  interface ProjectCardProps {
    project: ProjectData;
    class?: string;
  }

  let { project, class: className }: ProjectCardProps = $props();
</script>

<a
  href={`https://${project.url}`}
  target="_blank"
  rel="noopener noreferrer external"
  class={cn("project-card group block h-full outline-none", className)}
>
  <Card.Root class="flex h-full flex-col overflow-hidden transition-all duration-300 border-border hover:border-border/50 hover:shadow-md">

    <div class="aspect-video w-full overflow-hidden bg-muted/30">
      <img
        src={project.imageUrl}
        alt={project.title}
        class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <Card.Header>
      <div class="flex items-start justify-between gap-2">
        <Card.Title class="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </Card.Title>
        <ArrowUpRight class="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
      </div>
      <Card.Description class="line-clamp-2">
        {project.description}
      </Card.Description>
    </Card.Header>

    <Card.Content class="flex-1" />

    <Card.Footer class="flex flex-wrap gap-2 pt-0">
      {#each project.tags as tag, i (i)}
        <Badge variant="secondary" class="font-normal text-muted-foreground">
          {tag}
        </Badge>
      {/each}
    </Card.Footer>

  </Card.Root>
</a>