export function URLSearchParamsToPage(searchParams: URLSearchParams): number {
  const page = searchParams.get("page");

  if (page === null) return 1;

  return parseInt(page, 10);
}
