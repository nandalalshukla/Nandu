export const revalidate = 60;
import { getPublishedPosts } from "@/lib/blog";
import { getPostContent } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";

export default async function BlogPost(props: any) {
  const params = await props.params;

  const posts = await getPublishedPosts();

  const post = posts.find((p) => {
    if (!p.slug || !params.slug) return false;

    return p.slug === params.slug.toLowerCase();
  });

  if (!post) return <div>Not found</div>;

  const content = await getPostContent(post.id);
  const stats = readingTime(content);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="text-muted-foreground mt-2">
        {post.date} • {stats.text}
      </p>

      <div className="flex gap-2 mt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <article className="prose dark:prose-invert prose-neutral mt-6 max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
