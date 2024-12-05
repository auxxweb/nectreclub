import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx"; // Assuming you're using clsx for className management like cn

export default function BlogDetails() {
  return (
    <div className={clsx("min-h-screen bg-white text-black antialiased")}>
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tighter hover:text-gray-300"
          >
            JAMES CLEAR
          </NavLink>
          <div className="flex items-center space-x-6 text-sm">
            <NavLink to="/books" className="hover:text-gray-300">
              Books
            </NavLink>
            <NavLink to="/articles" className="hover:text-gray-300">
              Articles
            </NavLink>
            <NavLink to="/newsletter" className="hover:text-gray-300">
              Newsletter
            </NavLink>
            <NavLink to="/app" className="hover:text-gray-300">
              App
            </NavLink>
            <NavLink to="/speaking" className="hover:text-gray-300">
              Speaking
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-300">
              About
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            For a More Creative Brain Follow These 5 Steps
          </h1>

          <div className="flex items-center text-sm text-gray-400 mb-12">
            <span>written by  </span>
            <span>Sahal Palayat</span>
            <NavLink
              to="/author"
              className="mx-2 text-white hover:text-gray-300"
            >
              JAMES CLEAR
            </NavLink>
            <span className="mx-2">|</span>
            <NavLink
              to="/category/creativity"
              className="hover:text-gray-300"
            >
              CREATIVITY
            </NavLink>
            <span className="mx-2">,</span>
            <NavLink
              to="/category/productivity"
              className="hover:text-gray-300"
            >
              PRODUCTIVITY
            </NavLink>
          </div>

          <div className="text-gray-300 ">
            <p className="text-lg">
              Nearly all great ideas follow a similar creative process and this
              article explains how this process works. Understanding this is
              important because creative thinking is one of the most useful
              skills you can possess. Nearly every problem you face in work and
              in life can benefit from innovative solutions, lateral thinking,
              and creative ideas.
            </p>

            <p className="text-lg mt-6">
              Anyone can learn to be creative by using these five steps. That's
              not to say being creative is easy. Uncovering your creative genius
              requires courage and tons of practice. However, this five-step
              approach should help demystify the creative process and illuminate
              the path to more innovative thinking.
            </p>
            <p className="text-lg mt-6">
              Anyone can learn to be creative by using these five steps. That's
              not to say being creative is easy. Uncovering your creative genius
              requires courage and tons of practice. However, this five-step
              approach should help demystify the creative process and illuminate
              the path to more innovative thinking.
            </p>
            <p className="text-lg mt-6">
              Anyone can learn to be creative by using these five steps. That's
              not to say being creative is easy. Uncovering your creative genius
              requires courage and tons of practice. However, this five-step
              approach should help demystify the creative process and illuminate
              the path to more innovative thinking.
            </p>

            <p className="text-lg mt-6">
              To explain how this process works, let me tell you a short story.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              A Problem in Need of a Creative Solution
            </h2>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8 mt-10">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">
              ABOUT THE AUTHOR
            </h3>
            <hr />
            
            <h4 className="text-black mt-10">James Clear writes about habits, decision making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.
              James Clear writes about habits, decision making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.
              James Clear writes about habits, decision making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.</h4>
            <NavLink
              to="/about"
              className="inline-block mt-4 text-sm text-white hover:text-gray-300"
            >
              Click here to learn more →
            </NavLink>
          </div>
        </aside>
      </main>
    </div>
  );
}
