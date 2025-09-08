<script lang="ts">
  import type { PageProps } from "./$types";

  import PostList from "$lib/components/blog/post-list.svelte";
  import CategoryBadge from "$lib/components/blog/category-badge.svelte";
  import TagBadge from "$lib/components/blog/tag-badge.svelte";
  import { setFilter } from '$lib/states/filter.svelte';
  import { SvelteURLSearchParams } from "svelte/reactivity";
  import { getFilterOptionFormSearchParams } from "$lib/utils/filter";
  import { browser } from "$app/environment";

  const { data }: PageProps = $props();

  const { posts, allTags, allCategories } = data;

  if (browser) {
    const searchParams = new SvelteURLSearchParams(window.location.search);

    $effect(() => {
      if (searchParams) setFilter(getFilterOptionFormSearchParams(searchParams));
    });
  }
</script>

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<div class="mt-header mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
  <div class="text-center">
    <h1 class="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
  </div>

  <div class="mt-12 flex justify-center space-x-2">
    {#each allCategories as category, i (i)}
      <CategoryBadge {category} />
    {/each}
  </div>

  <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
    <div class="lg:col-span-2">
      <PostList {posts} />
    </div>

    <aside class="lg:col-span-1">
      <div class="sticky top-24">
        <h3 class="text-foreground text-xl font-semibold">Tags</h3>
        <div class="mt-4 flex flex-col gap-2">
          {#each allTags as tag (tag)}
            <TagBadge {tag}/>
          {/each}
        </div>
      </div>
    </aside>
  </div>
</div>
