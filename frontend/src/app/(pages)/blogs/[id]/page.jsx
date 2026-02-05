"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Home, Tag } from 'lucide-react';
import { fullBlogData } from '@/lib/blogData';

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Access the id from params
    const blogId = params.id;
    const currentBlog = fullBlogData[blogId];
    
    if (currentBlog) {
      setBlog(currentBlog);
      
      // Get related blogs
      const allBlogIds = Object.keys(fullBlogData);
      const otherBlogs = allBlogIds.filter(id => id !== blogId);
      const randomBlogs = otherBlogs
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(id => ({
          id: id,
          ...fullBlogData[id],
          image: fullBlogData[id].featuredImage
        }));
      setRelatedBlogs(randomBlogs);
    }
  }, [params.id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog not found</h2>
          <Link 
            href="/blogs"
            className="inline-block px-6 py-3 bg-linear-to-r from-rose-400 to-pink-500 text-white rounded-full hover:shadow-lg transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/blogs"
            className="flex items-center gap-2 text-gray-700 hover:text-rose-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blogs</span>
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-rose-500 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img 
          src={blog.featuredImage} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 max-w-6xl w-full px-6">
          <span className="inline-block bg-linear-to-r from-rose-400 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        {/* Title Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <h1 className="text-3xl md:text-5xl font-medium text-gray-800 leading-tight mb-6">
            {blog.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-400" />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-400" />
              <span className="text-sm">{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src={blog.author.avatar} 
                alt={blog.author.name}
                className="w-10 h-10 rounded-full border-2 border-pink-200"
              />
              <div>
                <p className="text-sm font-normal text-gray-800">{blog.author.name}</p>
                <p className="text-xs text-gray-500">{blog.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content.map((block, index) => {
              switch(block.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {block.text}
                    </p>
                  );
                
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-medium text-gray-800 mt-12 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-linear-to-b from-rose-400 to-pink-500 rounded-full"></span>
                      {block.text}
                    </h2>
                  );
                
                case 'list':
                  return (
                    <ul key={index} className="space-y-4 my-8">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mt-2.5 shrink-0"></span>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                
                case 'quote':
                  return (
                    <div key={index} className="my-10 bg-linear-to-r from-pink-50 to-purple-50 border-l-4 border-rose-400 p-8 rounded-r-2xl shadow-md">
                      <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-3">
                        "{block.text}"
                      </p>
                      {block.author && (
                        <p className="text-sm text-gray-600 font-semibold">
                          — {block.author}
                        </p>
                      )}
                    </div>
                  );
                
                default:
                  return null;
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-rose-400" />
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="bg-linear-to-r from-rose-400 to-pink-500 rounded-3xl shadow-xl p-8 mb-12 text-white">
          <div className="flex items-center gap-6">
            <img 
              src={blog.author.avatar} 
              alt={blog.author.name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-medium mb-2">Written by {blog.author.name}</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                {blog.author.bio} with over 10 years of experience in the wedding industry. 
                Passionate about helping couples create their dream celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Related Blogs - FIXED */}
        {relatedBlogs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-linear-to-b from-rose-400 to-pink-500 rounded-full"></span>
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id} 
                  href={`/blogs/${relatedBlog.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group block"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {relatedBlog.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3 line-clamp-2 group-hover:text-rose-500 transition-colors">
                      {relatedBlog.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{relatedBlog.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-linear-to-r from-rose-400 via-pink-400 to-rose-500 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Wedding Trend
          </h2>
          <p className="text-pink-100 mb-8 text-lg">
            Subscribe to our newsletter for the latest bridal fashion, décor ideas, and wedding planning tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
            />
            <button className="bg-white text-rose-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
