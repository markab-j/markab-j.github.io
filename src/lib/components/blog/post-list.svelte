<script lang="ts">
  import { resolve } from "$app/paths";
  import { formatDate } from "$lib/utils/date";
  import { filter, isFilterEmpty } from "$lib/states/filter.svelte";
  import type { Post } from "$lib/types/blog";

  interface PostListProps {
    posts: Post[];
  }

  const { posts }: PostListProps = $props();

  const filteredPosts = $derived.by<Post[]>(() => {
    if (isFilterEmpty()) {
      return posts;
    }

    return posts.filter((post) => {
      const postCategories = post.categories;
      const categoryMatch = filter.categories.every((cat) => postCategories.includes(cat));

      if (!categoryMatch) return false;

      const postTags = post.tags;
      const tagMatch = filter.tags.every((tag) => postTags.includes(tag));

      return tagMatch;
    });
  });
</script>

<section class="flex min-h-screen flex-col">
  {#if filteredPosts.length === 0}
    <div class="flex h-40 items-center justify-center text-center">
      <p class="text-muted-foreground">표시할 포스트가 없습니다.</p>
    </div>
  {:else}
    {#each filteredPosts as post (post.slug)}
      <a
        class="border-b-border border-b last:border-b-0"
        href={resolve(`/blog/${post.slug}`)}
      >
        <article
          class="hover:bg-muted flex items-center justify-between gap-x-6 p-4 transition-colors"
        >
          <div class="flex-grow">
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
          </div>

          <div class="aspect-video max-w-48 flex-shrink-0 overflow-hidden">
            {#if post.coverImage}
              <img
                src={post.coverImage}
                width={post.coverWidth}
                height={post.coverHeight}
                alt={post.title}
                class="h-full w-full object-cover"
              />
            {/if}
          </div>
        </article>
      </a>
    {/each}
  {/if}
</section>
