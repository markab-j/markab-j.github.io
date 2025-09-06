<script lang="ts">
  import type { ProjectData } from "$lib/types/project";

  interface ProjectCardProps {
    project: ProjectData;
  }

  const { project }: ProjectCardProps = $props();
</script>

<a
  href="https://{project.url}"
  target="_blank"
  rel="noopener noreferrer external"
  class="project-card group border-border bg-card/50 block overflow-hidden rounded-xl border hover:shadow-lg"
>
  <div class="aspect-square px-4 pt-4">
    <img
      src={project.imageUrl}
      alt={project.title}
      class="h-full w-full object-contain"
    />
  </div>

  <div class="border-t-accent border-t p-4">
    <h2 class="text-foreground group-hover:text-primary text-xl font-semibold">
      {project.title}
    </h2>
    <p class="text-muted-foreground text-sm">{project.description}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      {#each project.tags as tag (tag)}
        <span
          class="bg-primary/10 text-primary inline-flex items-center rounded-md px-2 py-1 text-xs font-medium"
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>
</a>
