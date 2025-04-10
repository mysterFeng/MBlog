import React from 'react';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blogData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: '文章未找到 | MyBlog',
      description: '抱歉，您请求的文章不存在。',
    };
  }
  
  return {
    title: `${post.title} | MyBlog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <BlogLayout>
      <BlogPost
        title={post.title}
        content={post.content}
        date={post.date}
        category={post.category}
      />
    </BlogLayout>
  );
}