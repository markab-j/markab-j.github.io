import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { createHighlighter } from "@bitmachina/highlighter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      highlight: {
        highlighter: await createHighlighter({ theme: "vitesse-dark" }),
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".md"],
};

export default config;
