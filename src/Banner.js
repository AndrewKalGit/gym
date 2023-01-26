import React from 'react';
import ringwalk from './img/ringwalk.jpg'

function Banner(props) {
    return (
<section
  class="relative bg-[url('./img/ringwalk.jpg')] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/10 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-gray-200">
        <span class='bg-gray-700 p-2'>Gym Sample Site</span>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white bg-gray-500 p-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
    </div>
  </div>
</section>
    );
}

export default Banner;