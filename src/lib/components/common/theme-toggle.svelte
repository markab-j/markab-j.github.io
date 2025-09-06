<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import Sun from "@lucide/svelte/icons/sun";
  import Moon from "@lucide/svelte/icons/moon";
</script>

<button
  type="button"
  aria-label="theme toggle"
  class="hover:text-foreground/50 relative size-5"
  onclick={toggleMode}
>
  <Sun
    class="absolute inset-0 size-5 !transition-transform duration-300 [backface-visibility:hidden] dark:[transform:rotateY(180deg)]"
  />
  <Moon
    class="absolute inset-0 size-5 [transform:rotateY(180deg)] !transition-transform duration-300 [backface-visibility:hidden] dark:[transform:rotateY(360deg)]"
  />
</button>
