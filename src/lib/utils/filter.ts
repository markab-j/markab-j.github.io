import type { PostFilterOption } from "$lib/types/filter";

export function getFilterOptionFormSearchParams(searchParams: URLSearchParams): PostFilterOption {
  const page = getPageFromSearchParam(searchParams);
  const categories = searchParams.get("cate")?.split(",");
  const tags = searchParams.get("tag")?.split(",");

  return {
    page,
    categories,
    tags,
  };
}

function getPageFromSearchParam(searchParams: URLSearchParams): number {
  const page = searchParams.get("page");

  if (page === null) return 1;

  return parseInt(page, 10);
}
