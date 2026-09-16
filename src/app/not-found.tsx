'use client';
import React from 'react'

import Link from "next/link";
export default function NotFound() {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center font-sans text-center px-4 bg-zinc-50">
      <h1 className="text-4xl mb-4 font-bold text-gray-900">404 - Page Not Found</h1>
      <p className="paragraph max-w-md mb-4">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved or deleted.
      </p>

      <Link
        href="/"
        className="relative overflow-hidden px-6 py-2 rounded-full inline-flex items-center gap-3 group transition-all duration-300 cursor-pointer bg-[#d92d45] text-white hover:bg-black hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d92d45] focus:ring-offset-2"
        aria-label="Return to homepage"
      >
        <span className="relative z-10">Back To Home</span>
        <span className="circle group-hover:rotate-45 transition-transform duration-300" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </span>
      </Link>
      
      {/* Optional: Add a secondary action */}
      <button
        onClick={() => window.history.back()}
        className="mt-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
      >
        Or go back to previous page
      </button>
    </main>
  );
}