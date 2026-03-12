import { getAllPosts } from "../../lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-12">
        Blog
      </h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-8"
          >
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
