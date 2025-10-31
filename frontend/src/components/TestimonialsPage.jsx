"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Victoria Linton",
      review: "Praesent urna neque viverra justo ultricies sit. Est ultricies integer quis sed nisi consequat hendrerit gravida.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      position: "top-left",
      size: "medium",
      link: "/testimonials/victoria-linton",
    },
    {
      name: "Roany Dona",
      title: "EXCELLENT JOB!",
      review: "A customer purus semper sed duis arcu. Amet elit et amet dictum et velit.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      position: "center",
      size: "large",
      featured: true,
      link: "/testimonials/roany-dona",
    },
    {
      name: "Client Review",
      review: "Praesent neque viverra justo ultricies duis lorem dolor sed gravida amet.",
      tag: "@UrbanWives",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      position: "top-right",
      size: "small",
      link: "/testimonials/urban-wives",
    },
    {
      name: "Dimitri Woodhouse",
      review: "Maura in aliquam ac fringilla morbi tincidunt augue amet duis massa.",
      username: "@yourname/here",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      position: "middle-left",
      size: "medium",
      link: "/testimonials/dimitri-woodhouse",
    },
    {
      name: "Nelly Vane",
      review: "Nullam ut tellus fringilla viverra duis. Et turpis in nulla viverra arituet sit at id tellus.",
      rating: 5,
      ratingCount: "15.21",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      position: "middle-right",
      size: "medium",
      link: "/testimonials/nelly-vane",
    },
    {
      name: "Hindley Micawber",
      title: "Top notch!",
      review: "Rhoncus urna neque viverra justo nec ultricies eu. Est lorem quis dolor sit amet tincidunt nibh quis.",
      rating: 5,
      ratingCount: "15.21",
      username: "@yourusername",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      position: "bottom-left",
      size: "medium",
      link: "/testimonials/hindley-micawber",
    },
    {
      name: "Catherine Doe",
      title: "TESTIMONIAL",
      review: "In hac habitasse platea dictum quisquam Sagittis purus convall.",
      username: "@CatherineDoe",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      position: "bottom-center",
      size: "medium",
      link: "/testimonials/catherine-doe",
    },
    {
      name: "Recommended",
      review: "Turpis egestas maecenas pharetra convallis.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      position: "bottom-center-right",
      size: "small",
      withPhoto: true,
      link: "/testimonials/recommended",
    },
    {
      name: "Jane",
      review: "Vestibulum mattis enim alit tortor eu ullamcorper morbi pretium.",
      username: "@JanePoelish",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      position: "bottom-right",
      size: "medium",
      link: "/testimonials/jane-poelish",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4 uppercase">
            &quot;What <span className="text-rose-500"> our clients</span> Say&quot;
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-xl">
            Real experiences from real people who trusted us with their special moments
          </p>
        </div>

        {/* Testimonials Grid - Bento Box Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Victoria Linton - Top Left */}
          <Link
            href={testimonials[0].link}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-rose-200 opacity-20">
              <Quote size={60} />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-rose-100"
              />
              <div>
                <h3 className="font-bold text-gray-900">{testimonials[0].name}</h3>
                {renderStars(testimonials[0].rating)}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonials[0].review}
            </p>
          </Link>

          {/* Roany Dona - Center Featured (Spans 2 rows) */}
          <Link
            href={testimonials[1].link}
            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 lg:row-span-2 relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[1].image}
                alt={testimonials[1].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-rose-200 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {testimonials[1].title}
              </h3>
              {renderStars(testimonials[1].rating)}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {testimonials[1].review}
              </p>
              <p className="text-rose-400 font-script text-2xl mt-4 italic">
                {testimonials[1].name}
              </p>
            </div>
          </Link>

          {/* Client Review - Top Right */}
          <Link
            href={testimonials[2].link}
            className="group bg-gradient-to-br from-rose-50 to-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{testimonials[2].name}</h3>
                <p className="text-rose-500 text-sm">{testimonials[2].tag}</p>
              </div>
              <img
                src={testimonials[2].image}
                alt={testimonials[2].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-200"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {testimonials[2].review}
            </p>
            <button className="text-rose-500 text-xs font-medium hover:text-rose-600">
              READ MORE →
            </button>
          </Link>

          {/* Dimitri Woodhouse - Middle Left */}
          <Link
            href={testimonials[3].link}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
              &ldquo;{testimonials[3].review}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[3].image}
                alt={testimonials[3].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-100"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm uppercase">
                  {testimonials[3].name}
                </p>
                <p className="text-rose-400 text-xs">{testimonials[3].username}</p>
              </div>
            </div>
            <div className="mt-3">{renderStars(testimonials[3].rating)}</div>
          </Link>

          {/* Nelly Vane - Middle Right */}
          <Link
            href={testimonials[4].link}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
          >
            <div className="flex items-start gap-4">
              <img
                src={testimonials[4].image}
                alt={testimonials[4].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-rose-100"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[4].name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {testimonials[4].review}
                </p>
                <div className="flex items-center gap-2">
                  {renderStars(testimonials[4].rating)}
                  <span className="text-xs text-gray-500">
                    {testimonials[4].ratingCount}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Hindley Micawber - Bottom Left */}
          <Link
            href={testimonials[5].link}
            className="group bg-gradient-to-br from-white to-rose-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {testimonials[5].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {testimonials[5].review}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {renderStars(testimonials[5].rating)}
                <span className="text-xs text-gray-500 ml-2">
                  ({testimonials[5].ratingCount})
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
              <img
                src={testimonials[5].image}
                alt={testimonials[5].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">{testimonials[5].name}</p>
                <p className="text-rose-400 text-xs">{testimonials[5].username}</p>
              </div>
            </div>
          </Link>

          {/* Catherine Doe - Bottom Center */}
          <Link
            href={testimonials[6].link}
            className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={testimonials[6].image}
                alt={testimonials[6].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-rose-200"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wide text-sm">
                  {testimonials[6].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonials[6].review}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {renderStars(testimonials[6].rating)}
              <p className="text-rose-400 text-sm">{testimonials[6].username}</p>
            </div>
          </Link>

          {/* Recommended - Bottom Center Right with Photo */}
          <Link
            href={testimonials[7].link}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600"
              alt="Recommended"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm">
                {testimonials[7].name}
              </h3>
              {renderStars(testimonials[7].rating)}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {testimonials[7].review}
              </p>
            </div>
          </Link>

          {/* Jane - Bottom Right */}
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
