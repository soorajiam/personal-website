<template>
  <div>
    <div class="">

      <section x-data="" class="pb-24 bg-neutral-900">
        <nav class="relative px-10 md:px-12 py-7 lg:py-4">

        </nav>
        <div :class="{ 'block': mobileNavOpen, 'hidden': !mobileNavOpen }"
          class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-black opacity-20"></div>
          <nav class="relative p-8 w-full h-full bg-neutral-900 overflow-y-auto">
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-center justify-between mb-16">
                <a class="pr-4" href="#">
                  <img class="h-10" src="/mirga-assets/images/logos/mirga-light-light.svg" alt="">
                </a>
                <button x-on:click="mobileNavOpen = !mobileNavOpen" class="text-white">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col items-center gap-2">
                <a class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg text-white hover:text-white focus:text-white bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200"
                  href="#">Login</a><a
                  class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl text-white hover:text-neutral-900 focus:text-neutral-900 bg-transparent hover:bg-white focus:bg-white border border-white rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                  href="#">Sign up free</a>
              </div>
            </div>
          </nav>
        </div>
        <div class="container mx-auto px-4">
          <div class="relative mt-32 mb-20 lg:mt-64 lg:mb-40">
            <h1
              class="font-heading tracking-tight text-7xl sm:text-8xl md:text-10xl xl:text-12xl 2xl:text-15xl text-white text-center font-semibold">
              Sooraj P R</h1>
            <div
              class="hidden sm:block absolute -top-6 lg:-top-8 xl:-top-12 -left-2 sm:left-12 md:left-16 lg:left-32 xl:left-40 2xl:left-16 3xl:left-40">
              <h6
                class="font-heading md:text-xl lg:text-2xl font-semibold w-40 md:w-48 lg:w-56 text-white tracking-tight">
                Empowering Brands </h6>
            </div>
            <div
              class="hidden sm:block absolute -bottom-12 lg:-bottom-16 xl:-bottom-18 right-2 md:right-8 lg:right-20 2xl:right-24 3xl:right-48">
              <h6
                class="font-heading md:text-xl lg:text-2xl font-semibold w-32 md:w-48 text-white text-right tracking-tight">
                At the edge of novel Tech</h6>
            </div>
          </div>
          <div class="flex flex-wrap justify-center lg:items-end -mx-4">
            <div class="w-full sm:w-1/2 lg:w-1/3 xl:flex-1 p-4">
              <div class="h-full bg-neutral-900 border border-neutral-600 rounded-3xl pt-10 pb-8 px-12">
                <div class="flex flex-wrap -m-4 mb-5">
                  <div class="w-full lg:w-full xl:w-1/2 p-4">
                    <h6 class="font-heading text-4xl text-white font-semibold tracking-tight">Skilled Software Engineer
                    </h6>
                  </div>
                  <!-- <div class="w-full lg:w-full xl:w-1/2 p-4">
                    <img class="mx-auto w-28 h-28 xl:mr-0 object-cover rounded-full"
                      src="/mirga-assets/images/hero/circle3.svg" alt="">
                  </div> -->
                </div>
                <a class="inline-flex items-center gap-3 group mr-auto" href="#">

                  <div>

                  </div>
                </a>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3 xl:max-w-sm p-4">
              <div
                class="h-full lg:h-auto flex flex-col justify-center bg-neutral-900 border border-neutral-600 rounded-3xl py-12 px-9">
                <img class="mx-auto w-16 h-16 object-cover mb-5 rounded-2xl" src="/mirga-assets/images/hero/checked.svg"
                  alt="">
                <h6 class="font-heading text-center text-4xl text-white font-semibold tracking-tight">Product Management
                  and Strategy</h6>
              </div>
            </div>
            <div class="w-full lg:w-1/3 xl:flex-1 p-4">
              <div class="h-full bg-neutral-900 border border-neutral-600 rounded-3xl pt-10 pb-8 px-12">
                <div class="flex flex-wrap -m-4 mb-5">
                  <div class="w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4">
                    <h6 class="font-heading text-4xl text-white font-semibold tracking-tight">Design and SEO Strategy
                      with focus on localization</h6>
                  </div>
                  <div class="w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4">
                    <img class="mx-auto w-36 h-28 object-cover sm:mr-0 lg:mx-auto xl:mr-0"
                      src="/mirga-assets/images/hero/draw2.svg" alt="">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full sm:w-1/2 lg:w-3/12 p-4">
              <div class="relative h-48 sm:h-full">
                <img class="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  src="/sooraj.jpg" alt="">
                <div class="absolute left-3 right-3 bottom-5">
                  <div class="flex items-center justify-between flex-wrap gap-4">
                    <h6 class="font-heading text-white font-semibold w-40 tracking-tight">Empowering Brands.
                    </h6>

                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-4/12 p-4">
              <div
                class="bg-neutral-900 border border-neutral-600 rounded-3xl py-8 px-12 max-w-md lg:max-w-none mx-auto flex flex-col items-center h-full">
                <h2 class="font-heding text-center text-white text-xl font-semibold mb-7 tracking-tight">Building
                  Multiple SaaS Products</h2>
                <div class="flex lg:items-center justify-between flex-wrap -m-2">
                  <div class="w-full sm:w-1/2 p-2">

                  </div>
                  <div class="w-full sm:w-1/2 p-2">

                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-3/12 p-4">
              <div class="rounded-3xl relative overflow-hidden h-full py-14 px-10">
                <img class="absolute top-0 left-0 object-cover w-full h-full"
                  src="/mirga-assets/images/hero/background5.jpg" alt="">
                <div class="relative z-10 text-gray-900">
                  <div class="flex justify-center mb-2">
                    <img class="w-14 h-14 object-cover rounded-full" src="/mirga-assets/images/hero/bell-image.png"
                      alt="">
                  </div>

                  <div class="flex justify-center"><a
                      class="inline-flex text-neutral-800 hover:text-neutral-600 transition duration-200 font-semibold tracking-tight"
                      href="https://linkedin.com/in/soorajiam">Looking to Hire?</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-24 bg-neutral-600 ">
        <div class="container mx-auto px-4">
          <div class="mb-12 md:mb-20 max-w-5xl">
            <h1 class="relative text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading">
              <span class="mr-3">Skills to help you</span>
              <span class="relative inline-block">
                <span class="relative z-10 text-gray-900">Dominate Online</span>
                <span class="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
              </span>
            </h1>
          </div>
          <!-- <h3 class="mb-8 text-4xl font-semibold tracking-tight font-heading">The most important news</h3> -->
          <div class="flex flex-wrap -m-3 mb-16">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              <div class="flex flex-col h-full justify-center p-10 text-gray-900 bg-white rounded-5xl">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full">
                      <img src="/mirga-assets/images/features/sticker.svg" alt="">
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Prompt Engineering and RAG applications
                    </h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">At my postgraduate degree, I focussed on generating a
                  vector database by utilizing advanced neural networks and visualize the connections in a large
                  dataset. Currently utlizes these expertise in building advanced features for my projects such as
                  Intstu and helpmeexplain and simplerterms</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              <div class="mb-6 p-10 bg-white rounded-5xl">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full">
                      <img src="/mirga-assets/images/features/sticker.svg" alt="">
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Data-Driven Insights</h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">skilled in SQL, Database and proficient in
                  retrieving key insights from data and craft unique easy to follow dashboards and reports using powerBI
                  and AWS Quicksight</p>
              </div>
              <div class="p-10 bg-white rounded-5xl">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full">
                      <img src="/mirga-assets/images/features/sticker.svg" alt="">
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">SEO and Localisation</h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">Heavily researched on SEO and struggles for
                  localisation. utilised expertise to get obsoautomation.com to 10,000 impressions from daily 200
                  impressions</p>
              </div>
            </div>
            <div class="w-full xl:w-1/3 p-3">
              <div class="flex flex-col h-full justify-center p-10 text-gray-900 bg-white rounded-5xl">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full">
                      <img src="/mirga-assets/images/features/sticker.svg" alt="">
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Skilled Fullstack Engineer with Backend
                      Heavy skillset</h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">Experienced Backend developer in python Django.
                  AWS certified. Skilled in Vue.js and Nuxt.js and crafting tailwind UI's.  Individual contributor in
                  intstu.com and helpmeexplain.com </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-auto"></div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-24 bg-neutral-600 ">
        <div class="container mx-auto px-4">
          <div class="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
            <h1 class="mb-16 font-semibold text-6xl sm:text-9xl xl:text-11xl font-heading">
              <span>Some</span>
              <span class="bg-orange-50 text-neutral-700 rounded-lg px-4 mt-1 inline-block">Projects</span>
            </h1>

          </div>
          <div class="mb-20">
            <div class="flex flex-wrap -m-2.5">
              <div class="w-full md:w-1/2 xl:w-8/12 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl">
                  <div class="mb-24">
                    <h4 class="mb-2 text-5xl font-medium tracking-tight text-gray-900 font-heading">Intstu.com</h4>
                    <p class="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">Personal project to help
                      students explore international education opportunities</p>
                  </div>
                  <div class="flex flex-wrap justify-between items-end -m-8">
                    <div class="w-auto p-8"><a
                        class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                        href="https://intstu.com">More</a></div>
                    <div class="w-auto p-8">

                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-4/12 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">helpmemexplain.com</h4>
                      <p class="mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">AI assisted
                        communication tool.</p>

                    </div>
                    <div class="w-full"><a
                        class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                        href="https://helpmeexplain.com">More</a></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">Liynk and Obsource</h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Product built for
                        obsoautomation.com</p>

                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">simplerterms.com (stealth)</h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Legal simplification
                        platform.</p>
                      <img class="mb-8 h-24 object-cover mx-auto" src="/mirga-assets/images/services/draw4.png" alt="">
                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-full xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">auditordesk</h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">auditing tool built
                        at cied.eu</p>

                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-auto"></div>
          </div>
        </div>
      </section>

      <section x-data="{ showContent: false }" class="py-12 md:py-24 bg-neutral-600 ">
        <div class="container mx-auto px-4">
          <div class="pb-14 mb-2 border-b border-neutral-900">
            <h1 class="text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading">Blog</h1>
          </div>

          <div class="flex flex-wrap -m-4 mb-8">
            <div class="w-full md:w-1/2 p-3">
              <div class="bg-white rounded-4xl px-6 md:px-12 py-12 h-full">
                <div class="flex flex-wrap items-center -m-4 mb-8 lg:mb-18">
                  <div class="w-full lg:w-2/3 p-4">

                    <a class="block text-neutral-800 text-3xl font-medium hover:underline mb-3 tracking-tight max-w-xs"
                      href="https://medium.com/@soorajparakkattil/an-intro-to-internationalization-9cc63cd47a3">Intro to Internationalization</a>
                    <p class="text-neutral-600 text-lg font-medium mb-11 max-w-xs tracking-tight">Setting the project to start using or supporting local languages can be a headache at first but once configured it might be one of the best competitive edge that you have over your competitors.</p>

                  </div>

                </div>
                <div class="flex items-center justify-between flex-wrap gap-4">

                  <a class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                    href="https://medium.com/@soorajparakkattil/an-intro-to-internationalization-9cc63cd47a3">Read more</a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-3">
              <div class="bg-white rounded-4xl px-6 md:px-12 py-12 h-full">
                <div class="flex flex-wrap items-center -m-2 mb-8 lg:mb-18">
                  <div class="w-full lg:w-2/3 p-4">

                    <a class="block text-neutral-800 text-3xl font-medium hover:underline mb-3 tracking-tight max-w-xs"
                      href="https://medium.com/@soorajparakkattil/understanding-pythons-random-library-fea09c484492">Random Library</a>
                    <p class="text-neutral-600 text-lg font-medium mb-11 max-w-xs tracking-tight">Understanding Python’s Random Library</p>
                    <div class="flex flex-wrap gap-6">
                      <div class="flex items-center gap-2">


                      </div>
                      <div class="flex items-center gap-2">


                      </div>
                    </div>
                  </div>

                </div>
                <div class="flex items-center justify-between flex-wrap gap-4">

                  <a class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                    href="https://medium.com/@soorajparakkattil/understanding-pythons-random-library-fea09c484492">Read more</a>
                </div>
              </div>
            </div>
           
          </div>
          <a x-on:click.prevent="showContent = true" :class="{ 'hidden': showContent }"
            class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
            href="https://medium.com/@soorajparakkattil">More articles</a>
        </div>
      </section>

      <section class="bg-neutral-600  p-5 sm:p-10">
        <div class="py-24 md:py-52 rounded-4xl bg-white px-4">
          <div class="flex flex-col justify-center items-center h-full">
            <h1
              class="mb-16 text-center text-6xl sm:text-9xl xl:text-11xl font-semibold max-w-lg xl:max-w-5xl mx-auto font-heading">
              <span class="mr-3">Do I Look intresting?</span>
              <span class="relative inline-block">
                <span class="relative z-10 text-gray-900">Take a Detailed look</span>
                <span class="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
              </span>
            </h1>

            <a class="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
              href="#">Download Resume</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>