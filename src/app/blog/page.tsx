import React from 'react';
import BlogLayout from '@/components/BlogLayout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: '博客 | MyBlog',
  description: '探索我的博客文章，了解最新的设计和开发趋势。',
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="max-w-5xl mx-auto">
        {/* 页面标题区域 */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            博客文章
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            探索关于设计、开发和创意的思考与见解
          </p>
          
          {/* 装饰性元素 - 使用CSS代替图片 */}
          <div className="relative mt-8 h-0.5 w-24 mx-auto overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div 
              className="absolute left-0 top-0 h-full w-full rounded-full" 
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)' }}
            ></div>
          </div>
        </div>
        
        {/* 博客文章网格 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>
        
        {/* 装饰性元素 - 使用CSS渐变和模糊效果 */}
        <div className="relative mt-16 mb-8">
          <div 
            className="absolute -right-20 -top-40 h-64 w-64 rounded-full opacity-20 blur-3xl" 
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          ></div>
          
          <div className="relative z-10 rounded-xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
              订阅更新
            </h2>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              获取最新的博客文章和更新，直接发送到您的收件箱。
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="您的电子邮箱"
                className="flex-grow rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white shadow-md hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                订阅
              </button>
            </form>
          </div>
          
          <div 
            className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full opacity-20 blur-3xl" 
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
          ></div>
        </div>
      </div>
    </BlogLayout>
  );
}