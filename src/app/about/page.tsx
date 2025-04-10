import React from 'react';
import BlogLayout from '@/components/BlogLayout';

export const metadata = {
  title: '关于 | MyBlog',
  description: '了解更多关于我和我的博客',
};

export default function AboutPage() {
  return (
    <BlogLayout>
      <div className="max-w-3xl mx-auto">
        {/* 页面标题区域 */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            关于我
          </h1>
          
          {/* 装饰性元素 - 使用CSS代替图片 */}
          <div className="relative mt-8 h-0.5 w-24 mx-auto overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div 
              className="absolute left-0 top-0 h-full w-full rounded-full" 
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)' }}
            ></div>
          </div>
        </div>
        
        {/* 个人资料卡片 - 使用CSS实现头像效果 */}
        <div className="relative mb-16">
          {/* 装饰性背景元素 */}
          <div 
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          ></div>
          
          <div className="relative z-10 overflow-hidden rounded-xl border border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50">
            <div className="p-8 sm:p-10">
              <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
                {/* 头像 - 使用CSS代替图片 */}
                <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-zinc-800 sm:mb-0">
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    }}
                  >
                    {/* 抽象图案代替真实头像 */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-white"></div>
                      <div className="absolute bottom-1/4 right-1/4 h-1/3 w-1/3 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* 个人信息 */}
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">博主名称</h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">网页设计师 & 前端开发者</p>
                  
                  {/* 社交链接 - 使用CSS图标 */}
                  <div className="mt-4 flex justify-center space-x-4 sm:justify-start">
                    <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <div className="h-6 w-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <span className="sr-only">GitHub</span>
                      <div className="h-6 w-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <div className="h-6 w-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 个人简介 */}
              <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
                <p>
                  欢迎来到我的博客！我是一名热爱设计与技术的创作者，专注于探索网页设计的艺术与科学。
                  通过这个博客，我希望分享我在设计、开发和创意领域的见解和经验。
                </p>
                <p>
                  我相信优秀的设计不仅仅是关于美观，更是关于创造有意义的用户体验。
                  在这里，你会找到关于UI/UX设计、前端开发技术、创意灵感和行业趋势的文章。
                </p>
                <p>
                  无论你是设计师、开发者还是对数字创意感兴趣的爱好者，希望这个博客能为你提供价值和灵感。
                  欢迎通过社交媒体与我联系，分享你的想法和反馈！
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-20 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
          ></div>
        </div>
        
        {/* 技能部分 */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">专业技能</h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {/* 技能条 - 使用CSS渐变 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-white">UI/UX设计</h3>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: '90%', 
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' 
                  }}
                ></div>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-white">前端开发</h3>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: '85%', 
                    background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' 
                  }}
                ></div>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-white">响应式设计</h3>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: '95%', 
                    background: 'linear-gradient(90deg, #ec4899, #f43f5e)' 
                  }}
                ></div>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-white">创意写作</h3>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: '80%', 
                    background: 'linear-gradient(90deg, #f43f5e, #ef4444)' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 联系部分 */}
        <div className="relative">
          <div 
            className="absolute -right-20 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          ></div>
          
          <div className="relative z-10 rounded-xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/50 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">联系我</h2>
            
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  消息
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                发送消息
              </button>
            </form>
          </div>
          
          <div 
            className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full opacity-20 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
          ></div>
        </div>
      </div>
    </BlogLayout>
  );
}