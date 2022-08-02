import React from "react";
import { Link } from "react-router-dom";
function TestPage() {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 class="text-5xl font-extrabold text-white tracking-widest">
        This is Test Page to demonstrate the navigation
      </h1>
      <div class="bg-red-500 px-2 text-sm rounded  absolute">
        Press Navigate Button To Go Back
      </div>
      <Link to="/">
        <button class="mt-10">
          <a class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Navigate Back
            </span>
          </a>
        </button>
      </Link>
    </main>
  );
}

export default TestPage;
