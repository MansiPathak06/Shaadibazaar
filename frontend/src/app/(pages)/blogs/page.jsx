"use client";

import Link from "next/link";
import { blogData } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-rose-50/30 to-white min-h-screen flex flex-col">
      <header className="relative w-full py-4 px-6 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="absolute top-0 right-0 w-64 h-44 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="relative z-10 text-white text-center">
          
           
          

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 font-serif leading-tight">
  <span className="inline-block transform hover:scale-105 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent transition-transform duration-300">
    Our Blogs
  </span>
</h1>

<p className="text-lg sm:text-xl text-gray-600 font-light mb-1">
  Inspiration, tips, and stories to guide you on your wedding journey.
</p>


         

         
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 48H1440V24C1440 24 1200 0 720 0C240 0 0 24 0 24V48Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </header>

      <main className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 py-8 flex-1">
       

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {blogData.map((post, index) => (
            <div
              key={post.id}
              className="rounded-xl bg-rose-100 rounded-t-full border border-rose-50 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s backwards`
              }}
            >
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-[5]"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-2.5">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 text-xs font-medium rounded-full shadow-sm group-hover:shadow-md group-hover:from-rose-100 group-hover:to-pink-100 transition-all duration-300">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-base font-semibold text-gray-800 mb-2.5 leading-snug group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>
                <div className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                <Link 
                  href={`/blogs/${post.id}`}
                  className="mt-auto cursor-pointer px-5 py-2.5 bg-gradient-to-r from-rose-400 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-rose-400 hover:to-pink-500 transition-all duration-300 outline-none focus:ring-4 focus:ring-rose-300 shadow-md hover:shadow-xl transform hover:scale-[1.02] active:scale-95 text-center group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    READ MORE
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}