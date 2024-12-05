import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx"; // Assuming you're using clsx for className management like cn
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
export default function BlogDetails() {
  return (
    <div className={clsx("min-h-screen bg-white text-black antialiased")}>
      {/* Navigation */}
      <nav className=" border-gray-800">
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
  <hr />
      {/* Main Content */}
      <main className=" mt-10 max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[2fr_1px_1fr] gap-8">
        {/* Left Side: Main Article */}
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            For a More Creative Brain Follow These 5 Steps
          </h1>

          <div className="flex items-center text-sm text-gray-400 mb-12">
            <span>Written by:</span>
            <span className="ml-2 font-medium">Sahal Palayat</span>
            <span className="mx-2">|</span>
            <NavLink to="/author" className="text-white hover:text-gray-300">
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
          <hr />
          <img
            className="mt-10 rounded-lg"
            src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
            alt="Blogging"
          />
          <div className="text-gray-700">
            <p className="text-lg mt-6">
              Nearly all great ideas follow a similar creative process, and this
              article explains how this process works. Creative thinking is one
              of the most valuable skills you can possess. It helps in solving
              problems at work and in life.
            </p>
            <p className="text-lg mt-6">
              Anyone can learn to be creative by using these five steps. While
              it’s not easy, creativity requires courage and practice. This
              approach demystifies the process and helps achieve innovative
              thinking.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">
              A Problem in Need of a Creative Solution
            </h2>
            <p className="text-lg">
              To explain how this process works, let me tell you a short story.
              Anyone can learn to be creative by using these five steps. While
              it’s not easy, creativity requires courage and practice. This
              approach demystifies the process and helps achieve innovative
              thinking. Anyone can learn to be creative by using these five steps. While
              it’s not easy, creativity requires courage and practice. This
              approach demystifies the process and helps achieve innovative
              thinking.
            </p>
          </div>
        </article>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        {/* Right Side: Sidebar */}
        <aside className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">
              ABOUT THE AUTHOR
            </h3>
            <hr />
            <h4 className="text-gray-700 mt-4">
              James Clear writes about habits, decision-making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.
            </h4>
            <h4 className="text-gray-700 mt-4">
              James Clear writes about habits, decision-making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.
            </h4>
            <h4 className="text-gray-700 mt-4">
              James Clear writes about habits, decision-making, and continuous
              improvement. He is the author of the #1 New York Times bestseller,
              Atomic Habits. The book has sold over 20 million copies worldwide
              and has been translated into more than 60 languages.
            </h4>
            <NavLink
              to="/about"
              className="inline-block mt-4 text-sm text-blue-600 hover:underline"
            >
              Click here to learn more →
            </NavLink>
          </div>
        </aside>
      </main>
  <hr />
      {/* Footer */}
      <div className=" mt-40 max-w-6xl mx-auto px-4 py-12 grid grid-cols-[2fr_auto_1fr] gap-12 items-start">
        {/* Left Section */}
        <div>
          <div className="mb-12">
            <p className="text-lg mb-4">
              Thanks for reading. You can get more actionable ideas in my popular
              email newsletter. Each week, I share 3 short ideas from me, 2 quotes
              from others, and 1 question to think about.{" "}
              <span className="font-semibold">Over 3,000,000 people subscribe.</span>{" "}
              Enter your email now and join us.
            </p>
            <div className="flex gap-4 max-w-xl">
              <Input
                type="email"
                placeholder="My email address is..."
                className="flex-1"
              />
              <Button className="bg-[#F4C430] hover:bg-[#E3B420] text-black px-6">
                Try the free newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-full w-px bg-gray-300"></div>

        {/* Right Section */}
        <aside className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold text-neutral-500 mb-4">READ NEXT</h2>
            <div className="space-y-4">
              <NavLink href="#" className="block text-lg hover:underline">
                How To Create A Chain Reaction Of Good Habits
              </NavLink>
              <NavLink href="#" className="block text-lg hover:underline">
                The Scientific Argument For Mastering One Thing At A Time
              </NavLink>
              <NavLink href="#" className="block text-lg hover:underline">
                All Models Are Wrong, Some Are Useful
              </NavLink>
              <NavLink href="#" className="block text-lg hover:underline">
                Motivation Is Overvalued. Environment Often Matters More.
              </NavLink>
              <NavLink href="#" className="block text-lg hover:underline">
                The Goldilocks Rule: How To Stay Motivated In Life And Business
              </NavLink>
            </div>
          </div>
          <div>
            <NavLink
              href="#"
              className="text-sm font-semibold text-neutral-500 hover:text-neutral-800"
            >
              ALL ARTICLES →
            </NavLink>
          </div>
        </aside>
      </div>


    </div>
  );
}
