import React from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      {/* Navigation Bar with elegant styling */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - using CSS instead of image */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">B</div>
              </div>
              <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">MyBlog</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                About
              </Link>
            </div>
            
            {/* Mobile Menu Button - using CSS for icon */}
            <button className="md:hidden relative h-10 w-10 rounded-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
              <div className="w-5 flex flex-col items-center space-y-1.5">
                <span className="h-0.5 w-full bg-zinc-600 dark:bg-zinc-400 rounded-full"></span>
                <span className="h-0.5 w-full bg-zinc-600 dark:bg-zinc-400 rounded-full"></span>
                <span className="h-0.5 w-full bg-zinc-600 dark:bg-zinc-400 rounded-full"></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer with elegant design */}
      <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">About</h3>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                A beautifully designed blog showcasing thoughts, ideas, and creative content with a focus on elegant presentation.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    All Posts
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Links - using CSS for icons */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">Connect</h3>
              <div className="mt-4 flex space-x-4">
                {/* Twitter icon */}
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="h-6 w-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </a>
                
                {/* GitHub icon */}
                <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <div className="h-6 w-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                {/* LinkedIn icon */}
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
          
          {/* Copyright */}
          <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex justify-between items-center">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
            </p>
            
            {/* Decorative element */}
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;