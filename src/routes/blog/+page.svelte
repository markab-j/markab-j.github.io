<script lang="ts">
  import type { PageProps } from "./$types";
  import { resolve } from "$app/paths";

  import CategoryBadge from "$lib/components/blog/category-badge.svelte";
  import TagBadge from "$lib/components/blog/tag-badge.svelte";
  import { formatDate } from "$lib/utils/date";
  import { filter, isFilterEmpty, setFilter } from "$lib/states/filter.svelte";
  import { SvelteURLSearchParams } from "svelte/reactivity";
  import { getFilterOptionFormSearchParams } from "$lib/utils/filter";
  import { browser } from "$app/environment";
  import { setPage } from '$lib/states/page.svelte';
  import { URLSearchParamsToPage } from '$lib/utils/page';

  const { data }: PageProps = $props();
  const { posts, allTags, allCategories } = data;

  const filteredPosts = $derived(
    isFilterEmpty()
      ? posts
      : posts.filter((post) => {
          for (const category of filter.categories) {
            if (!post.categories.includes(category)) {
              return false;
            }
          }
          for (const tag of filter.tags) {
            if (!post.tags.includes(tag)) {
              return false;
            }
          }

          return true;
        })
  );

  let searchParams: SvelteURLSearchParams;

  if (browser) {
    searchParams = new SvelteURLSearchParams(window.location.search);
  }

  $effect(() => {
    if (searchParams) setFilter(getFilterOptionFormSearchParams(searchParams));

    setPage(URLSearchParamsToPage(searchParams));
  });
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
      <section class="flex flex-col">
        {#each filteredPosts as post (post.slug)}
          <a
            class="border-b-border border-b last:border-b-0"
            href={resolve(`/blog/${post.slug}`)}
          >
            <article class="hover:bg-muted block px-4 py-8 transition-colors">
              <div class="group relative">
                <h3
                  class="text-foreground group-hover:text-primary text-2xl leading-tight font-semibold transition-colors"
                >
                  {post.title}
                </h3>
                <p class="text-muted-foreground mt-3 line-clamp-2 text-base leading-6">
                  {post.description}
                </p>
              </div>
              <div class="mt-4 flex items-center gap-x-4 text-sm">
                <time
                  datetime={post.date}
                  class="text-muted-foreground"
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </article>
          </a>
        {/each}
      </section>
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
