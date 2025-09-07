<script lang="ts">
  import X from "@lucide/svelte/icons/x";
  import { filter, filterSearchParams, toggleCategory } from '$lib/states/filter.svelte';
  import { cn } from "$lib/utils/css";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  const { category } = $props();
  const isActive = $derived(filter.categories.includes(category));

  function onClick() {
    if (browser) {
      toggleCategory(category);

      // 클라이언트 사이트 SearchParams 업데이트이므로 resolve 함수를 호출할 이유가 없습니다.
      // eslint-disable-next-line svelte/no-navigation-without-resolve
      goto(filterSearchParams(), { replaceState: true, keepFocus: true });
    }
  }
</script>

<button
  class={cn(
    "relative flex cursor-pointer items-center rounded-full border-2 px-4 py-1 text-sm font-medium transition-all duration-200",
    isActive
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-muted/30 text-muted-foreground hover:bg-muted hover:text-primary"
  )}
  onclick={onClick}
>
  <span
    class={cn("transition-transform duration-300 ease-in-out", isActive ? "-translate-x-2" : "")}
  >
    {category}
  </span>
  <X
    class={cn(
      "absolute right-2 size-3 stroke-4 transition-all duration-300 ease-in-out",
      isActive ? "translate-x-0 scale-100" : "-translate-x-4 scale-0"
    )}
  />
</button>
