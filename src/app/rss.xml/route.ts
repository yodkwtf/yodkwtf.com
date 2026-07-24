import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";

export async function GET() {
  const posts = getAllBlogsMeta();
  const baseUrl = siteConfig.url;

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} — Blog</title>
    <link>${baseUrl}/blog</link>
    <description>${siteConfig.description}</description>
    <language>en-US</language>
    <managingEditor>${siteConfig.email} (${siteConfig.name})</managingEditor>
    <webMaster>${siteConfig.email} (${siteConfig.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.tags?.map((t) => `<category>${t}</category>`).join("\n      ") ?? ""}
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
