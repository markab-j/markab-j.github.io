<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/ui/header.svelte";
  import Footer from "$lib/components/ui/footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

<ModeWatcher />
<div class="flex min-h-screen flex-col">
  <Header />
  <main class="w-full flex-1">
    {@render children?.()}
  </main>
  <Footer />
</div>
