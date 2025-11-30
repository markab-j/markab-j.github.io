<script lang="ts">
  import type { PageProps } from "./$types";
  import TocHighlighter from "$lib/components/blog/[slug]/toc-highlighter.svelte";
  import { Calendar } from "@lucide/svelte";
  import PostTagBadge from "$lib/components/blog/[slug]/post-tag-badge.svelte";
  import PostCategoryBadge from "$lib/components/blog/[slug]/post-category-badge.svelte";
  import { formatDate } from "$lib/utils/date";

  const { data }: PageProps = $props();

  const { title, description, date, tags, categories, coverImage, coverWidth, coverHeight } =
    data.meta;
  const { PostContent } = data;
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    data-key="description"
    name="description"
    content={description}
  />
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content={title}
  />
  <meta
    name="twitter:title"
    content={title}
  />
  <meta
    property="og:description"
    content={description}
  />
  <meta
    name="twitter:description"
    content={description}
  />
  <meta
    property="og:image:width"
    content={String(coverWidth)}
  />
  <meta
    property="og:image:height"
    content={String(coverHeight)}
  />
</svelte:head>

<article class="mt-header mx-auto w-full max-w-3xl px-4 pb-36">
  <header class="mb-8 text-center md:mb-12">
    {#if coverImage}
      <img
        src={coverImage}
        alt={title}
        width={coverWidth}
        height={coverHeight}
        class="mb-8 size-full object-cover"
        style:aspect-ratio={coverWidth && coverHeight && coverWidth / coverHeight}
      />
    {/if}
    <section class="mb-4 flex flex-wrap justify-center gap-2">
      {#each categories as category, i (i)}
        <PostCategoryBadge {category} />
      {/each}
    </section>
    <h1 class="mb-4 text-3xl font-bold break-words break-keep md:text-5xl">{title}</h1>
    <section
      class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex items-center space-x-1">
        <Calendar class="size-4" />
        <span>{formatDate(date)}</span>
      </div>
    </section>
  </header>
  <section class="prose dark:prose-invert prose-lime max-w-none">
    <TocHighlighter />
    <PostContent />
  </section>
  <footer class="border-t-border mt-24 border-t py-4">
    <section class="flex flex-wrap gap-2">
      {#each tags as tag, i (i)}
        <PostTagBadge {tag} />
      {/each}
    </section>
  </footer>
</article>
