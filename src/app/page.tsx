import React from 'react';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: 'MyBlog - 设计精美的个人博客',
  description: '一个设计精美、具有高级感的个人博客网站，分享关于设计、开发和创意的见解。',
};

export default function Home() {
  // 获取最新的3篇文章
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <BlogLayout>
      {/* 英雄区域 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-16 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">设计精美的</span>
            <span className="block mt-2">个人博客空间</span>
          </h1>
          
          <p className="mt-6 text-xl text-indigo-100">
            探索关于设计、开发和创意的思考与见解
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/blog" 
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              浏览全部文章
            </Link>
            <Link 
              href="/about" 
              className="rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              关于我
            </Link>
          </div>
        </div>
        
        {/* 装饰性元素 - 使用CSS代替图片 */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-white blur-2xl"></div>
        </div>
      </div>
      
      {/* 精选文章区域 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            精选文章
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            探索我最新的思考和见解
          </p>
          
          {/* 装饰性元素 - 使用CSS代替图片 */}
          <div className="relative mt-6 h-0.5 w-24 mx-auto overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div 
              className="absolute left-0 top-0 h-full w-full rounded-full" 
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)' }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
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
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center rounded-md border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            查看全部文章
            <svg 
              className="ml-2 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* 特色区域 */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              博客特色
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              精心设计的内容体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 特色卡片 - 使用CSS代替图片 */}
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
              <div 
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 blur-xl" 
                style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">创意设计</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  精美的视觉效果和排版，创造出具有高级感的阅读体验。
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
              <div 
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 blur-xl" 
                style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">响应式布局</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  完美适配各种设备屏幕，从手机到桌面，提供一致的优质体验。
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
              <div 
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 blur-xl" 
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-red-600 text-white shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">高性能</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  使用CSS代替图片实现视觉效果，确保快速加载和流畅体验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 订阅区域 */}
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full opacity-20 blur-3xl" 
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
        ></div>
        
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            订阅我的博客更新
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            获取最新的文章和见解，直接发送到您的收件箱
          </p>
          
          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="您的电子邮箱"
              className="flex-grow rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-white shadow-md hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              订阅
            </button>
          </form>
        </div>
        
        <div 
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-20 blur-3xl" 
          style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
        ></div>
      </div>
    </BlogLayout>
  );
}
