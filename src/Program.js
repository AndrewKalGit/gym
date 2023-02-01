import React from 'react';
import kidstkd from './img/tkdkids.jpeg'
import teentkd from './img/teentkd.jpeg';
import adulttkd from './img/adultstkd.webp'
import competitiontkd from './img/tkdteam.jpeg'

function Program(props) {
    return (
<>
<section class="bg-gray-50 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-200 text-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Classes</h2>

      <p class="mt-4 text-gray-700 font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    
<div class="block">
  <img
    alt="Art"
    src={kidstkd}
    class="h-96 w-full object-cover"
  />

  <h3 class="mt-4 text-xl font-bold text-gray-900">Kids</h3>

  <p class="mt-2 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</div>
<div class="block">
  <img
    alt="Art"
    src={teentkd}
    class="h-96 w-full object-cover"
  />

  <h3 class="mt-4 text-xl font-bold text-gray-900">Teens</h3>

  <p class="mt-2 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</div>
<div class="block">
  <img
    alt="Art"
    src={adulttkd}
    class="h-96 w-full object-cover"
  />

  <h3 class="mt-4 text-xl font-bold text-gray-900">Adults</h3>

  <p class="mt-2 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</div>
<div class="block">
  <img
    alt="Art"
    src={competitiontkd}
    class="h-96 w-full object-cover"
  />

  <h3 class="mt-4 text-xl font-bold text-gray-900">Competition</h3>

  <p class="mt-2 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
    sequi ipsam incidunt.
  </p>
</div>


    
    </div>
    <div class="mt-12 text-center">
      <a
        href="/contact"
        class="mt-8 inline-flex items-center rounded border border-gray-900 bg-gray-900 px-8 py-3 text-white hover:bg-white hover:text-gray-700 focus:outline-none focus:ring active:text-gray-700"
      >
        <span class="text-sm font-medium"> Get Started </span>

        <svg
          class="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section>            
</>
    );
}

export default Program;