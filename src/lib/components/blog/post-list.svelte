<script lang="ts">
	import { resolve } from '$app/paths';
	import PostItemSkeleton from '$lib/components/blog/post-item-skeleton.svelte';
	import { formatDate } from '$lib/utils/date';
	import { filter, isFilterEmpty } from '$lib/states/filter.svelte';
	import type { Post } from '$lib/types/blog';

	interface PostListProps {
		posts: Post[];
	}

	const { posts }: PostListProps = $props();

	let isLoading = $state(false);
	let filteredPosts: Post[] = $state(posts);
	let timer: number;

	$effect(() => {
		console.info($state.snapshot(filter));
		const { categories, tags } = filter;

		clearTimeout(timer);

		if (isFilterEmpty()) {
			filteredPosts = posts;
			return;
		}

		isLoading = true;

		timer = setTimeout(() => {
			filteredPosts = posts.filter((post) => {
				for (const category of categories) {
					if (!post.categories.includes(category)) {
						return false;
					}
				}
				for (const tag of tags) {
					if (!post.tags.includes(tag)) {
						return false;
					}
				}
				return true;
			});
			isLoading = false;
		}, 200);
	});
</script>

<section class="flex flex-col min-h-screen gap-4">
	{#if isLoading}
			{#each Array(5) as _, i (i)}
				<PostItemSkeleton />
			{/each}
	{:else if filteredPosts.length === 0}
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
									class="text-foreground group-hover:text-primary text-2xl font-semibold leading-tight transition-colors"
								>
									{post.title}
								</h3>
								<p class="text-muted-foreground mt-3 line-clamp-2 text-base leading-6">
									{post.description}
								</p>
							</div>
							<div class="mt-4 flex items-center gap-x-4 text-sm">
								<time datetime={post.date} class="text-muted-foreground">
									{formatDate(post.date)}
								</time>
							</div>
						</div>

						<div class="aspect-video max-w-48 flex-shrink-0 overflow-hidden">
							<img
								src={post.coverImage}
								width={post.coverWidth}
								height={post.coverHeight}
								alt={post.title}
								class="h-full w-full object-cover"
							/>
						</div>
					</article>
				</a>
			{/each}
	{/if}
</section>