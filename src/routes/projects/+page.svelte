<script lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  type Project = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    url: string;
    year: number;
  };

  let projects: Project[] = [
    {
      title: "Pixelizer Web",
      description: "Pixelate Image Website Using Pixelizer Library",
      imageUrl:
        "https://api.microlink.io/?url=https%3A%2F%2Fmarkab-j.github.io%2Fpixelizer-web%2F&screenshot=true&embed=screenshot.url",
      tags: ["TypeScript", "Svelte"],
      url: "github.com/markab-j/pixelizer-web",
      year: 2025,
    },
    {
      title: "Pixelizer",
      description: "Pixelate Image Library for Javascript running on Browser",
      imageUrl: "https://github.com/user-attachments/assets/dfbe6a3c-8f33-4b93-b9cb-7719167c3758",
      tags: ["TypeScript", "Library"],
      url: "github.com/markab-j/pixelizer",
      year: 2025,
    },
  ];

  onMount(() => {
    if (browser) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".project-card", { opacity: 0, y: 20 });
      ScrollTrigger.batch(".project-card", {
        start: "top 80%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "sine.inOut",
            stagger: 0.2,
          });
        },
      });
    }
  });
</script>

{#snippet ProjectCard(project: Project)}
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
{/snippet}

<div class="mt-header mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
  <h1
    class="text-foreground border-accent border-b-2 pb-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
  >
    Projects
  </h1>
  <div class="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {#each projects as project, i (i)}
      {@render ProjectCard(project)}
    {/each}
  </div>
</div>
