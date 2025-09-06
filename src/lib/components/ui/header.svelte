<script lang="ts">
	import logo from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import Github from '@lucide/svelte/icons/github';

	const navItems = [
		{
			href: '/about',
			display: 'About'
		},
		{
			href: '/blog',
			display: 'Blog'
		},
		{
			href: '/projects',
			display: 'Project'
		}
	] as const;

	type NavItem = (typeof navItems)[number];
</script>

{#snippet navItem(item: NavItem)}
	<li>
		<a href={resolve(item.href)} class="hover:text-foreground/50 transition-colors duration-200">
			{item.display}
		</a>
	</li>
{/snippet}

<header class="fixed top-0 inset-x-0 z-50 p-4">
	<div
		class="min-h-16 max-w-4xl mx-auto flex items-center justify-between rounded-2xl
				 bg-white/50 px-4 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:bg-gray-900/50"
	>
		<a href={resolve('/')} aria-label="Go Home">
			<img src={logo} alt="Blog Logo" class="size-8" />
		</a>
		<nav class="flex">
			<ul class="flex items-center space-x-6 text-sm font-medium">
				{#each navItems as item, i (i)}
					{@render navItem(item)}
				{/each}
			</ul>

			<div class="flex items-center space-x-4 pl-6">
				<button
					type="button"
					aria-label="테마 전환"
					class="hover:text-foreground/50 transition-colors duration-200"
				>
					<Sun class="size-5 block dark:hidden" />
					<Moon class="size-5 hidden dark:block" />
				</button>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub 프로필"
					class="hover:text-foreground/50 transition-colors duration-200"
				>
					<Github class="size-5" />
				</a>
			</div>
		</nav>
	</div>
</header>
