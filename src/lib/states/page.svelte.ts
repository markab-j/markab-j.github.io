export const page = $state({
  current: 1,
});

export function setPage(newPage: number) {
  page.current = newPage;
}
