import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();

  return {
    props: {
      posts: data.data,
    },
  };
};
