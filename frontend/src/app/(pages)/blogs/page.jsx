"use client";

import Link from "next/link";
import { blogData } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen flex flex-col">
      <header className="relative w-full py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-rose-500 to-pink-500"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="relative z-10 text-white text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-white/60 rounded-full mx-auto mb-6"></div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 font-serif">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Our Blogs
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-light max-w-4xl mx-auto leading-relaxed px-4 text-white/95">
            Your ultimate guide to wedding outfits, jewellery, planning tips & everything you need for your perfect celebration
          </p>

          <div className="inline-block mt-6">
            <div className="w-24 h-1 bg-white/60 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 48H1440V24C1440 24 1200 0 720 0C240 0 0 24 0 24V48Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </header>

      <main className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 py-16 md:py-20 flex-1">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Latest <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Articles</span> & <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Guides</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
            Discover expert tips on bridal wear, groom outfits, jewellery, décor, and more <br /> all in one place.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogData.map((post, index) => (
            <div
              key={post.id}
              className="rounded-2xl bg-white border border-rose-100 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-700 flex flex-col overflow-hidden group relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 text-xs font-extralight rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-medium font-serif text-gray-800 mb-3 leading-snug group-hover:text-rose-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-500 mb-5 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                {/* FIXED: Remove button wrapper and use Link directly */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="mt-auto cursor-pointer px-6 py-3 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 text-white font-normal rounded-xl hover:from-rose-500 hover:via-pink-500 hover:to-rose-600 transition-all duration-300 outline-none focus:ring-4 focus:ring-rose-300 shadow-md hover:shadow-xl transform hover:scale-105 text-center"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
