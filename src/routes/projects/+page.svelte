<script lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  import ProjectCard from "$lib/components/projects/project-card.svelte";
  import type { ProjectData } from "$lib/types/project";

  let projects: ProjectData[] = [
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
    {
      title: "Idleama",
      description: "Desktop Idle Software.",
      imageUrl: "https://raw.githubusercontent.com/markab-j/Idleama/refs/heads/main/docs/icon.png",
      tags: ["Typescript", "Tauri", "Software"],
      url: "github.com/markab-j/Idleama",
      year: 2025,
    }
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

<div class="mt-header mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
  <h1
    class="text-foreground border-accent border-b-2 pb-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
  >
    Projects
  </h1>
  <div class="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {#each projects as project, i (i)}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
