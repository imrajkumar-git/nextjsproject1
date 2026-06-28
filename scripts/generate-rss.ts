import { promises as fs } from "fs";
import path from "path";
import RSS from "rss";
import matter from "gray-matter";

(async function generate() {
  const feed = new RSS({
    title: "Rajkumar Aryal",
    description: "Hey! I am Rajkumar, a full-stack developer from Nepal live in UAE",
    feed_url: "https://ayushsoni1010.com/feed.xml",
    site_url: "https://rajkumarayal.com.np",
    managingEditor: "Ayush Soni",
    webMaster: "Rajkumar",
    language: "en",
    copyright: `Rajkumar Aryal | ${new Date().getFullYear()}`,
  });

  const postsDir = path.join(__dirname, "..", "data", "blogs");
  const posts = await fs.readdir(postsDir);

  await Promise.all(
    posts.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const frontmatter = matter(fileContent);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: "Rajkumar Aryal",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags?.split(", "),
      });
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
})();
