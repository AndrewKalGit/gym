import React from 'react';
import tkdins1 from './img/tkdinstructor1.jpg';
import tkdins2 from './img/tkdinstructor3.png'
import tkdins3 from './img/tkdins3.jpeg'

function Staff(props) {
    return (
<>
<section class="bg-gray-50 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-200 text-gray-900 -mt-12">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Meet The Staff</h2>

      <p class="mt-4 text-gray-700 font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

 <div class="group relative block bg-black">
  <img
    alt="profile"
    src={tkdins1}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-black">
      <span class="bg-slate-50 p-1">Instructor</span>
    </p>

    <p class="text-2xl font-bold text-white">James Smith</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</div>
 <div class="group relative block bg-black">
  <img
    alt="profile"
    src={tkdins3}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-black">
      <span class="bg-slate-50 p-1">Grand Master</span>
    </p>

    <p class="text-2xl font-bold text-white">Jonas Smith</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</div>
 <div class="group relative block bg-black">
  <img
    alt="profile"
    src={tkdins2}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-black">
      <span class="bg-slate-50 p-1">Kids Instructor</span>
    </p>

    <p class="text-2xl font-bold text-white">John Smith</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
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

export default Staff;