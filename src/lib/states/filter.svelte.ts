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
  const index = filter.categories.findIndex((v) => v === category);

  if (index === -1) {
    filter.categories.push(category);
  } else {
    filter.categories.splice(index, 1);
  }
}

export function toggleTag(tag: string): void {
  const index = filter.tags.findIndex((v) => v === tag);

  if (index === -1) {
    filter.tags.push(tag);
  } else {
    filter.tags.splice(index, 1);
  }
}
