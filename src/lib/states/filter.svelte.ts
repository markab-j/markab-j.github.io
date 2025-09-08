import type { PostFilter, PostFilterOption } from "$lib/types/filter";

export const filter = $state<PostFilter>({
  page: 1,
  categories: [],
  tags: [],
});

const _filterSearchParams = $derived.by<string>(() => {
  // 단순 SearchParams 매개변수를 위한 객체입니다. 따라서 반응성이 필요하지 않습니다.
  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const params = new URLSearchParams();

  params.set("page", String(filter.page));

  if (filter.categories.length > 0) {
    params.set("cate", filter.categories.join(","));
  }

  if (filter.tags.length > 0) {
    params.set("tag", filter.tags.join(","));
  }

  return `?${params.toString()}`;
});

export function filterSearchParams() {
  return $state.snapshot(_filterSearchParams);
}

const _isFilterEmpty = $derived(filter.tags.length === 0 && filter.categories.length === 0);

export function isFilterEmpty() {
  return _isFilterEmpty;
}

export function setFilter(filterOption: PostFilterOption) {
  filter.page = filterOption.page;
  filter.categories = filterOption.categories || [];
  filter.tags = filterOption.tags || [];
}

export function toggleCategory(category: string): void {
  const isPresent = filter.categories.includes(category);

  if (isPresent) {
    filter.categories = filter.categories.filter((v) => v !== category);
  } else {
    filter.categories = [...filter.categories, category];
  }
}

export function toggleTag(tag: string): void {
  const isPresent = filter.tags.includes(tag);

  if (isPresent) {
    filter.tags = filter.tags.filter((v) => v !== tag);
  } else {
    filter.tags = [...filter.tags, tag];
  }
}
