import React from 'react';

function Banner(props) {
    return (
<section
  class="relative bg-[url('./img/tkdbanner.jpg')] bg-cover bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/50"
  ></div>

  <div
    class="relative mx-auto max-w-screen justify-center px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-screen text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-gray-200">
        <span class='text-gray-50 p-2 flex justify-center'>Sample Gym Site</span>
      </h1>

      <p class="mt-4 max-w-screen text-center font-bold sm:text-xl sm:leading-relaxed text-white p-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
    </div>
  </div>
</section>
    );
}

export default Banner;