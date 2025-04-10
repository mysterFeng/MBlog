import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug, category }) => {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20 dark:bg-black/5 dark:ring-black/10 dark:hover:bg-black/10 dark:hover:ring-black/20">
      {/* Category Badge with gradient background */}
      <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium" 
           style={{
             background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
             boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)'
           }}>
        {category}
      </div>
      
      {/* Decorative elements using CSS instead of images */}
      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full opacity-50 blur-2xl"
           style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}>
      </div>
      
      <div className="relative">
        <time dateTime={date} className="block text-sm text-zinc-500 dark:text-zinc-400">
          {date}
        </time>
        
        <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-zinc-800 dark:text-zinc-100">
          <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {excerpt}
        </p>
      </div>
      
      {/* Read more link with animated arrow */}
      <div className="mt-6 flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <span className="relative transition-all duration-300 group-hover:pr-2">Read more</span>
        <svg 
          className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </article>
  );
};

export default BlogCard;