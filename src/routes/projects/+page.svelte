<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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
			title: 'Pixelizer Web',
			description: 'Pixelate Image Website Using Pixelizer Library',
			imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fmarkab-j.github.io%2Fpixelizer-web%2F&screenshot=true&embed=screenshot.url',
			tags: ['TypeScript', 'Svelte'],
			url: 'github.com/markab-j/pixelizer-web',
			year: 2025,
		},
		{
			title: 'Pixelizer',
			description: 'Pixelate Image Library for Javascript running on Browser',
			imageUrl: 'https://github.com/user-attachments/assets/dfbe6a3c-8f33-4b93-b9cb-7719167c3758',
			tags: ['TypeScript', 'Library'],
			url: 'github.com/markab-j/pixelizer',
			year: 2025
		},
	];

	onMount(() => {
		if (browser) {
			gsap.registerPlugin(ScrollTrigger);
			gsap.set('.project-card', { opacity: 0, y: 20 });
			ScrollTrigger.batch('.project-card', {
				start: 'top 80%',
				once: true,
				onEnter: batch => {
					gsap.to(batch, {
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: 'sine.inOut',
						stagger: 0.2
					});
				}
			});
		}
	});
</script>

{#snippet ProjectCard(project: Project)}
	<a href="https://{project.url}"
		 target="_blank"
		 rel="noopener noreferrer external"
		 class="project-card group block rounded-xl border border-border bg-card/50 overflow-hidden hover:shadow-lg"
	>
		<div class="pt-4 px-4 aspect-square">
			<img src={project.imageUrl} alt={project.title} class="w-full h-full object-contain" />
		</div>

		<div class="p-4 border-t border-t-accent">
			<h2 class="text-xl font-semibold text-foreground group-hover:text-primary">{project.title}</h2>
			<p class="text-sm text-muted-foreground">{project.description}</p>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each project.tags as tag (tag)}
					<span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
							{tag}
					</span>
				{/each}
			</div>
		</div>
	</a>
{/snippet}

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mt-header">
    <h1 class="pb-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl border-b-2 border-accent">Projects</h1>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each projects as project, i (i)}
					{@render ProjectCard(project)}
        {/each}
    </div>
</div>