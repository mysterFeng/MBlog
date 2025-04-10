import React from 'react';
import Link from 'next/link';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, date, category }) => {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Decorative header element using CSS gradients */}
      <div className="relative mb-10 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div 
          className="absolute left-0 top-0 h-full w-1/3 rounded-full" 
          style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)' }}
        ></div>
      </div>
      
      {/* Article Header */}
      <header className="mb-8">
        {/* Category Badge */}
        <div className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium" 
             style={{
               background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
               boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)'
             }}>
          {category}
        </div>
        
        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        
        <time dateTime={date} className="text-sm text-zinc-500 dark:text-zinc-400">
          {date}
        </time>
      </header>
      
      {/* Article Content with decorative elements */}
      <div className="relative prose prose-zinc dark:prose-invert max-w-none">
        {/* Decorative element using CSS */}
        <div 
          className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl" 
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
        ></div>
        
        {/* Content - would be replaced with actual markdown/html content */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
        
        {/* Decorative element using CSS */}
        <div 
          className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full opacity-20 blur-2xl" 
          style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
        ></div>
      </div>
      
      {/* Article Footer */}
      <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/blog" 
            className="group inline-flex items-center text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            <svg 
              className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
          
          {/* Share buttons with CSS icons */}
          <div className="flex space-x-2">
            <button className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Share on Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Share on Facebook</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Share via Email</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;