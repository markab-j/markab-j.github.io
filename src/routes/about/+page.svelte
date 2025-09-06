<script lang="ts">
	import { Github, GraduationCap, Mail } from '@lucide/svelte';

	const userInfo = {
		nickname: 'markab-j',
		name: 'Jeong Yehwan',
		githubUrl: 'github.com/markab-j',
		email: 'markab.j.nn@gmail.com'
	} as const;

	const skills = {
		proficient: ['TypeScript', 'JavaScript', 'Express.js', 'NestJS'],
		learning: ['React', 'Svelte', 'SvelteKit']
	};

	const timeline = [
		{
			icon: GraduationCap,
			date: '2020 - 2025 (Expected)',
			title: 'Hanbat National University',
			description: 'Dept. of Information and Communication Engineering'
		}
	];
</script>

<section class="mt-header border-b border-border bg-card/50">
	<div
		class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:space-x-12"
	>
		<div class="flex-shrink-0">
			<img
				src="https://github.com/{userInfo.nickname}.png"
				alt="Profile of {userInfo.nickname}"
				class="size-36 rounded-full object-cover border-4 border-foreground/10 shadow-lg"
			/>
		</div>
		<div class="mt-6 md:mt-0">
			<h1 class="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
				{userInfo.name} ({userInfo.nickname})
			</h1>
			<p class="mt-4 max-w-xl text-lg text-muted-foreground">
				만들고 그 결과를 보여주는 순간을 가장 좋아합니다.
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
				<a
					href="https://{userInfo.githubUrl}"
					target="_blank"
					rel="noopener noreferrer external"
					class="inline-flex items-center justify-center rounded-md px-4 py-2
								 text-sm font-medium
								 border border-input bg-transparent shadow-sm
								 transition-all
								 hover:bg-accent hover:text-accent-foreground hover:shadow-md"
				>
					<Github class="mr-2 size-icon" />
					GitHub
				</a>

				<a
					rel="external"
					href="mailto:{userInfo.email}"
					class="inline-flex items-center justify-center rounded-md px-4 py-2
								 text-sm font-medium
								 border border-input bg-transparent shadow-sm
								 transition-all
								 hover:bg-accent hover:text-accent-foreground hover:shadow-md"
				>
					<Mail class="mr-2 size-icon" />
					Contact
				</a>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-1 gap-16 lg:grid-cols-3"
>
	<div class="lg:col-span-1">
		<h2 class="mb-4 text-2xl font-bold tracking-tight text-center lg:text-left">My Journey</h2>
		<ul class="flow-root">
			{#each timeline as item, i (item.title)}
				<li class="flex gap-4">
					<div class="relative flex flex-col items-center">
						<div class="z-10 flex size-8 items-center justify-center rounded-full bg-background">
							<svelte:component this={item.icon} class="size-icon" />
						</div>
						{#if i !== timeline.length - 1}
							<div class="w-0.5 flex-grow bg-border"></div>
						{/if}
					</div>
					<div class="flex-grow pb-8">
						<p class="text-xs font-medium text-muted-foreground">{item.date}</p>
						<p class="mt-0.5 text-base font-semibold">{item.title}</p>
						<p class="mt-1 text-sm text-muted-foreground">{item.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>

	<section class="lg:col-span-2 rounded-xl border border-border bg-card/50 p-8 space-y-6">
		<h2 class="text-2xl font-bold tracking-tight">Skills</h2>
		<div>
			<h3 class="text-base font-semibold text-accent-foreground/80">Proficient</h3>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each skills.proficient as skill (skill)}
					<span class="rounded-md border border-gray-200 px-2 py-0.5 text-sm font-medium">
						{skill}
					</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="text-base font-semibold text-accent-foreground/80">Learning</h3>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each skills.learning as skill (skill)}
					<span
						class="rounded-md border border-gray-200 border-dashed px-2 py-0.5 text-sm font-medium"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>
	</section>
</section>
