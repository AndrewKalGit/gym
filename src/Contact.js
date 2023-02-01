import React from 'react';


function Contact(props) {
    return (
<>
<section id="contact" class="bg-gray-100">
  <h1 class="text-center h-16 pt-10 w-full text-4xl font-semibold text-gray-700"> Connect with us </h1>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <h1 class="-mt-9 text-center sm:text-left sm:mt-0 max-w-xl text-2xl mb-2 font-semibold text-gray-700"> Get in touch </h1>
        <p class="max-w-xl text-lg text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam quos eligendi expedita esse exercitationem incidunt, in sint consectetur rerum, vitae obcaecati neque quod, cupiditate animi? Cupiditate quasi voluptatem ab.
        </p>

        <div class="mt-8">
          <a href="tel:+17325158724" class="text-2xl font-bold text-gray-700 hover:opacity-75">
            (732) 515 8724
          </a>
        </div>
          <a href="mailto:echowebllc@gmail.com" class="text-2xl font-bold text-gray-700 hover:opacity-75">
            gymLLC@gmail.com
          </a>
        <div class="flex mt-4">
          </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit="none" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="from_name"
              required
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name="reply_to_email"
                required
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="reply_to_number"
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="subject"> Subject </label>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center bg-gray-700 rounded-md px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Connect </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</section>
</>
    );
}

export default Contact;