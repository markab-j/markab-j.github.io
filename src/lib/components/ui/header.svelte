<script lang="ts">
  import logo from "$lib/assets/favicon.svg";
  import { resolve } from "$app/paths";

  import Github from "@lucide/svelte/icons/github";
  import ThemeToggle from "$lib/components/common/theme-toggle.svelte";

  const navItems = [
    {
      href: "/about",
      display: "About",
    },
    {
      href: "/blog",
      display: "Blog",
    },
    {
      href: "/projects",
      display: "Project",
    },
  ] as const;

  type NavItem = (typeof navItems)[number];
</script>

{#snippet navItem(item: NavItem)}
  <li>
    <a
      href={resolve(item.href)}
      class="hover:text-foreground/50 transition-colors duration-200"
    >
      {item.display}
    </a>
  </li>
{/snippet}

<header class="fixed inset-x-0 top-0 z-50 p-4">
  <div
    class="mx-auto flex min-h-16 max-w-4xl items-center justify-between rounded-2xl
				 bg-white/50 px-4 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:bg-gray-900/50"
  >
    <a
      href={resolve("/")}
      aria-label="Go Home"
    >
      <img
        src={logo}
        alt="Blog Logo"
        class="size-8"
      />
    </a>
    <nav class="flex">
      <ul class="flex items-center space-x-6 text-sm font-medium">
        {#each navItems as item, i (i)}
          {@render navItem(item)}
        {/each}
      </ul>

      <div class="flex items-center space-x-4 pl-6">
        <ThemeToggle />
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
