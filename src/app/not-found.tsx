'use client';
import React from 'react'
import { ArrowUpRight } from "lucide-react";

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
        className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm pl-6 pr-2 py-2 rounded-full w-fit transition-colors duration-300 border border-[#117C75] hover:bg-[#0e6860] mt-4"
      >
        Back To Home
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0e6860] transition-colors duration-300">
          <ArrowUpRight size={16} className="text-black group-hover:text-white" />
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