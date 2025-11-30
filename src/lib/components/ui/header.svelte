<script lang="ts">
  import logo from "$lib/assets/icon.svg";
  import { resolve } from "$app/paths";

  import ThemeToggle from "$lib/components/common/theme-toggle.svelte";
  import BorderBeam from "$lib/components/common/border-beam.svelte";
  import Meteor from "$lib/components/common/meteor.svelte"

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
				 bg-white/50 px-4 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:bg-gray-900/50 overflow-hidden"
  >
    <BorderBeam
      borderWidth={1}
      duration={12}
      size={60}
      colorFrom="#AAA"
      colorTo="#AAA"
    />
    <Meteor />
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
    <nav class="flex gap-4">
      <ul class="flex items-center space-x-6 text-sm font-medium">
        {#each navItems as item, i (i)}
          {@render navItem(item)}
        {/each}
      </ul>

      <div class="flex items-center space-x-4 px-2">
        <ThemeToggle />
      </div>
    </nav>
  </div>
</header>
