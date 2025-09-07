<script>
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>Oops!</title>
</svelte:head>

<main class="flex h-screen w-full flex-col items-center justify-center px-4">
  <h1 class="text-7xl font-extrabold tracking-tight">
    {page.status}
  </h1>

  <h2 class="mt-2 text-xl font-medium">Oops!</h2>

  <p class="mt-3 text-lg text-gray-400">
    {page.error?.message ?? "Something went wrong."}
  </p>

  <a
    href={resolve("/")}
    class="hover:bg-foreground hover:text-background mt-8 inline-block rounded-md border px-6 py-3 text-sm font-medium transition-colors"
  >
    Go Home
  </a>
</main>
