import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
<header aria-label="Site Header" class="shadow-sm">
  <div class="mx-auto max-w-screen p-4 bg-gray-900">
    <div class="flex items-center justify-between gap-4 lg:gap-10">
      <div class="flex lg:w-0 lg:flex-1">
        <Link to="/">
          <span class="sr-only">Logo</span>
          <span class="text-white bg-gray-700 p-2 text-sm rounded-md font-bold">Logo</span>
          <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
        </Link>
      </div>

      <nav
        aria-label="Site Nav"
        class="hidden gap-12 text-sm font-medium lg:flex"
      >
        <Link class="text-gray-100 hover:underline" to="/">Home</Link>
        <Link class="text-gray-100 hover:underline" to="about">About</Link>
        <Link class="text-gray-100 hover:underline" to="program">Programs</Link>
        <Link class="text-gray-100 hover:underline" to="schedule">Schedule</Link>
      </nav>

     <div class="flex-1 items-center lg:justify-end gap-4 flex justify-center lg:flex">
        <Link
          class="hover:bg-white rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
          to="contact"
        >
            Contact
        </Link>
    </div>

      <div class="lg:hidden">
        <button class="rounded-lg p-2 text-gray-600" type="button">
          <span class="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
    );
}

export default Nav;