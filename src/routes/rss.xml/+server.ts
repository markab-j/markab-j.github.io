import { Feed } from "feed";
import { siteAuthor, siteDescription, siteTitle, siteUrl } from "$lib/config";
import { fetchPosts } from "$lib/assets/post";

export const prerender = true;

export async function GET() {
  const feed = new Feed({
    title: siteTitle,
    description: siteDescription,
    id: siteUrl,
    link: siteUrl,
    language: "ko", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    favicon: `${siteUrl}/favicon.svg`,
    copyright: `Copyright ${new Date().getFullYear().toString()}, Markab-j`,
    // generator: '', // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss: `${siteUrl}/rss.xml`,
    },
    author: siteAuthor,
    ttl: 60,
  });

  const posts = await fetchPosts();
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      description: post.description,
      content: `<p>${post.description}</p> <div style="margin-top: 50px; font-style: italic;"> <strong><a href="${siteUrl}/${post.slug}">Keep reading</a>.</strong> </div> <br /> <br />`,
      link: `${siteUrl}/${post.slug}`,
      author: [siteAuthor],
      date: new Date(post.date),
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
