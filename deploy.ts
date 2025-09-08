import ghPages from "gh-pages";
import { createSitemap } from "svelte-sitemap/src";

await createSitemap("https://markab-j.github.io", { debug: true });

await ghPages.publish(
  "build",
  {
    branch: "main",
    nojekyll: true,
  },
  (err) => {
    console.error(err);
  }
);

console.info("Published");
