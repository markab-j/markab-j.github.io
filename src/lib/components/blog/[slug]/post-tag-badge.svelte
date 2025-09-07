<script lang="ts">
  import type { Tag } from '$lib/types/blog';

  interface PostTagBadgeProps {
    tag: Tag;
  }

  const { tag }: PostTagBadgeProps = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
  href={`/blog?tags=${encodeURIComponent(tag.name)}`}
  class="text-primary/50 hover:text-primary border-border hover:bg-accent flex items-center rounded-xl border px-1 text-sm transition-colors duration-200"
>
  #{tag.name}
</a>
