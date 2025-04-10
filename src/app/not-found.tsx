import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black p-4">
      <div className="max-w-md w-full text-center">
        {/* 使用CSS创建404数字效果 */}
        <div className="relative mx-auto mb-8 h-32 w-64 overflow-hidden">
          <div 
            className="absolute inset-0 flex items-center justify-center text-8xl font-bold tracking-tighter" 
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 6px rgba(99, 102, 241, 0.2)'
            }}
          >
            404
          </div>
          
          {/* 装饰性元素 */}
          <div 
            className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-50 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          ></div>
          <div 
            className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full opacity-50 blur-2xl" 
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
          ></div>
        </div>
        
        <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          页面未找到
        </h1>
        
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          抱歉，您请求的页面不存在或已被移动。
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}