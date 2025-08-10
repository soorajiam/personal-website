<template>
  <div>
    <div id="blob" class="circle z-50" ref="blob"></div>
    <div id="blob" class="circle z-50"></div>
    <div id="blob" class="circle z-50"></div>

    <div class="">
      <section x-data="" class="pb-24 bg-neutral-900">
        <nav class="relative px-10 md:px-12 py-7 lg:py-4"></nav>
        <div :class="{ 'block': mobileNavOpen, 'hidden': !mobileNavOpen }"
          class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-black opacity-20"></div>
          <nav class="relative p-8 w-full h-full bg-neutral-900 overflow-y-auto">
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-center justify-between mb-16">
                <a class="pr-4" href="#">
                  <img class="h-10" src="/public/mirga-assets/images/logos/mirga-light-light.svg" alt="">
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
          <div @mouseleave="name = 'Sooraj P R'"
            class="relative mt-32 mb-20 lg:mt-64 lg:mb-40">
            <h1
              class="delay font-heading tracking-tight text-7xl sm:text-8xl md:text-10xl xl:text-12xl 2xl:text-15xl text-white text-center font-semibold">
              {{ name }}</h1>
            <div
              class="hidden sm:block absolute -top-6 lg:-top-8 xl:-top-12 -left-2 sm:left-12 md:left-16 lg:left-32 xl:left-40 2xl:left-16 3xl:left-40">
              <h6
                class="font-heading md:text-xl lg:text-2xl font-semibold w-40 md:w-48 lg:w-56 text-white tracking-tight">
                Software Engineer</h6>
            </div>
            <div
              class="hidden sm:block absolute -bottom-12 lg:-bottom-16 xl:-bottom-18 right-2 md:right-8 lg:right-20 2xl:right-24 3xl:right-48">
              <h6
                class="font-heading md:text-xl lg:text-2xl font-semibold w-32 md:w-48 text-white text-right tracking-tight">
                Backend & System Optimization</h6>
            </div>
          </div>
          <!-- Professional Summary -->
          <div class="mb-16 text-center max-w-4xl mx-auto">
            <div class="bg-neutral-800 border border-neutral-600 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
              <h2 class="text-3xl font-semibold text-white mb-6">Professional Summary</h2>
              <p class="text-lg text-gray-300 leading-relaxed">
                Experienced software engineer with over 4 years of professional expertise, specializing in backend development 
                and system optimization. Proficient in Python and Django, with a proven track record of maintaining and 
                enhancing complex data systems. My background combines strong technical skills with a product-oriented 
                mindset, allowing me to deliver efficient solutions that drive business value. Currently working at 
                OBSO AUTOMATION, leading development initiatives and building scalable solutions.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap justify-center lg:items-end -mx-4">
            <div class="w-full sm: lg:w-1/3 xl:flex-1 p-4">
              <div class="h-full bg-neutral-900 border border-neutral-600 rounded-3xl pt-10 pb-8 px-12 w-full hover:border-blue-500 transition-all duration-300">
                <div class="flex flex-wrap -m-4 mb-5 w-full">
                                    <div @mouseenter="startGame" @mouseleave="stopSkillGame" class="w-full lg:w-full p-4">
                    <h6 v-if="!skillGameRef?.gameActive" class="font-heading text-4xl text-white font-semibold tracking-tight">Software Engineer
                    </h6>
                    
                    <!-- Skill Game Component -->
                    <SkillGame ref="skillGameRef" />
                  </div>
                </div>
                <a class="inline-flex items-center gap-3 group mr-auto" href="#">
                  <div></div>
                </a>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/3 xl:max-w-sm p-4">
              <div
                @mouseenter="startNN"
                @mouseleave="stopNN"
                class="h-full lg:h-auto flex flex-col justify-center bg-neutral-900 border border-neutral-600 rounded-3xl py-12 px-9 hover:border-green-500 transition-all duration-300">
                <img class="mx-auto w-16 h-16 object-cover mb-5 rounded-2xl"
                  src="/public/mirga-assets/images/hero/checked.svg" alt="">
                <h6 class="font-heading text-center text-4xl text-white font-semibold tracking-tight">AI & ML Infrastructure
                </h6>
                <div class="mt-6">
                  <NeuralNetworkGame v-if="showNN" ref="neuralGameRef" heightClass="h-80 md:h-96" />
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 xl:flex-1 p-4">
              <div class="h-full bg-neutral-900 border border-neutral-600 rounded-3xl pt-10 pb-8 px-12 hover:border-purple-500 transition-all duration-300">
                <div class="flex flex-wrap -m-4 mb-5">
                  <div class="w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4">
                    <h6 class="font-heading text-4xl text-white font-semibold tracking-tight">Scalable Backend Systems & 
                      Data Engineering</h6>
                  </div>
                  <div class="w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4">
                    <img class="mx-auto w-36 h-28 object-cover sm:mr-0 lg:mx-auto xl:mr-0"
                      src="/public/mirga-assets/images/hero/draw2.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full sm:w-1/2 lg:w-3/12 p-4">
              <div class="relative h-48 sm:h-full group">
                <img class="absolute inset-0 w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300" src="/public/sooraj.jpg" alt="">
                <div class="absolute left-3 right-3 bottom-5">
                  <div class="flex items-center justify-between flex-wrap gap-4">
                    <h6 class="font-heading text-white font-semibold w-40 tracking-tight">Building Scalable Backend Solutions.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-4/12 p-4">
              <div
                class="bg-neutral-900 border border-neutral-600 rounded-3xl py-8 px-12 max-w-md lg:max-w-none mx-auto flex flex-col items-center h-full hover:border-blue-500 transition-all duration-300">
                <h2 class="font-heding text-center text-white text-xl font-semibold mb-7 tracking-tight">Backend & Data Systems
                </h2>
                <div class="flex lg:items-center justify-between flex-wrap -m-2">
                  <div class="w-full sm:w-1/2 p-2"></div>
                  <div class="w-full sm:w-1/2 p-2"></div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-3/12 p-4">
              <div class="rounded-3xl relative overflow-hidden h-full py-14 px-10 group">
                <img class="absolute top-0 left-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  src="/public/mirga-assets/images/hero/background5.jpg" alt="">
                <div class="relative z-10 text-gray-900">
                  <div class="flex justify-center mb-2">
                    <img class="w-14 h-14 object-cover rounded-full"
                      src="/public/mirga-assets/images/hero/bell-image.png" alt="">
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

      <section class="py-12 md:py-24 bg-neutral-600">
        <div class="container mx-auto px-4">
          <div class="mb-12 md:mb-20 max-w-5xl">
            <h1 class="relative text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading">
              <span class="mr-3">Expertise in</span>
              <span class="relative inline-block">
                <span class="relative z-10 text-gray-900">Backend Development</span>
                <span class="absolute -bottom-2 left-0 h-2.5 w-full bg-blue-100 rounded-full"></span>
              </span>
            </h1>
          </div>
          <div class="flex flex-wrap -m-3 mb-16">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              <div class="flex flex-col h-full justify-center p-10 text-gray-900 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Backend Development & System Optimization
                    </h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">Expert in Python and Django development with over 4 years of experience building scalable backend systems. Specialized in system optimization, database design, and API development. Proven track record of improving system performance and maintaining complex data systems.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              <div class="mb-6 p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Data Engineering & Analytics</h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">Built sophisticated data analysis algorithms and data pipelines to process large datasets from diverse sources. Experience with PostgreSQL, data aggregation from 20+ sources, and building real-time dashboards. Provided actionable insights enhancing client decision-making capabilities.</p>
              </div>
              <div class="p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Web Development & Automation</h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">Proficient in modern web development with Vue.js, Nuxt.js, and Tailwind CSS. Built automated systems using Selenium for web scraping and testing. Experience with Celery for background task processing and building scalable web applications.</p>
              </div>
            </div>
            <div class="w-full xl:w-1/3 p-3">
              <div class="flex flex-col h-full justify-center p-10 text-gray-900 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div class="flex flex-wrap items-center -m-3 mb-5">
                  <div class="w-auto p-3">
                    <div class="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 p-3">
                    <h4 class="text-4xl font-medium tracking-tight font-heading text-gray-900">Cloud Infrastructure & DevOps
                    </h4>
                  </div>
                </div>
                <p class="text-neutral-600 font-medium tracking-tight">AWS certified professional with expertise in cloud infrastructure, Docker containerization, and multi-cloud architecture. Orchestrated deployments across AWS, Azure, and Digital Ocean. Built scalable solutions with 10x performance improvements and significant cost reductions.</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-auto"></div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-24 bg-neutral-600">
        <div class="container mx-auto px-4">
          <div class="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
            <h1 class="mb-16 font-semibold text-6xl sm:text-9xl xl:text-11xl font-heading">
              <span>Career</span>
              <span class="bg-blue-50 text-neutral-700 rounded-lg px-4 mt-1 inline-block">Timeline</span>
            </h1>
          </div>
          <div class="mb-20">
            <div class="relative">
              <!-- Timeline line -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
              
              <!-- Timeline items -->
              <div class="space-y-12">
             

                <!-- Current Role -->
                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div class="w-5/12 pl-8">
                    <div class="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <h4 class="text-2xl font-semibold text-gray-900 mb-2">Software Engineer</h4>
                      <p class="text-lg text-purple-600 font-medium">OBSO AUTOMATION</p>
                      <p class="text-neutral-600">Stafford, UK | September 2022 - Present</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Django</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS</span>
                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Docker</span>
                        <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Celery</span>
                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">QuickSight</span>
                      </div>
                    </div>
                  </div>
                </div>

                   <!-- Education -->
                   <div class="relative flex items-center">
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div class="w-5/12 pr-8 text-right">
                    <div class="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <h4 class="text-2xl font-semibold text-gray-900 mb-2">Advanced Computer Science</h4>
                      <p class="text-lg text-blue-600 font-medium">MSc - Keele University</p>
                      <p class="text-neutral-600">Best Academic Performance 2022; Distinction</p>
                      <div class="mt-4 flex flex-wrap gap-2 justify-end">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">System Design</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Algorithms</span>
                        <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Graph Theory and Networks</span>
                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Machine Learning</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI and intelligent Agents</span>
                        <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Cloud Computing</span>
                        <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Previous Role -->
                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div class="w-5/12 pr-8 ">
                    <div class="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <h4 class="text-2xl font-semibold text-gray-900 mb-2">Backend Engineer</h4>
                      <p class="text-lg text-orange-600 font-medium">CIED TECHNOLOGIES</p>
                      <p class="text-neutral-600">Kerala, India | June 2018 - June 2021</p>
                      <div class="mt-4 flex flex-wrap gap-2 justify-end">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Django</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PostgreSQL</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS</span>
                      </div>
                    </div>
                  </div>
                </div>
                        <!-- Education -->
                        <div class="relative flex items-center">
                  <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div class="w-5/12 pr-8 text-right">
                    <div class="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <h4 class="text-2xl font-semibold text-gray-900 mb-2">Computer Science and Engineering</h4>
                      <p class="text-lg text-blue-600 font-medium">B.Tech - Cochin University of Science and Technology</p>
                      <p class="text-neutral-600"></p>
                      <div class="mt-4 flex flex-wrap gap-2 justify-end">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Structures</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">OOP</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Database Systems</span>
                        <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Software Engineering</span>
                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Computer Networks</span>
                        <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Operating Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-24 bg-neutral-600">
        <div class="container mx-auto px-4">
          <div class="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
            <h1 class="mb-16 font-semibold text-6xl sm:text-9xl xl:text-11xl font-heading">
              <span>Featured</span>
              <span class="bg-blue-50 text-neutral-700 rounded-lg px-4 mt-1 inline-block">Projects</span>
            </h1>
          </div>
          <div class="mb-20">
            <div class="flex flex-wrap -m-2.5">
              <div class="w-full md:w-1/2 xl:w-8/12 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div class="mb-24">
                    <h4 class="mb-2 text-5xl font-medium tracking-tight text-gray-900 font-heading">OBSOURCE</h4>
                    <p class="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">Internal sourcing platform that scrapes 43 supplier websites for current pricing and availability. Provides historical and current trend analysis, making RFQ process 80% faster with less than 100ms querying on 2+ million data points.</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Selenium</span>
                      <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Data Analysis</span>
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-between items-end -m-8">
                    <div class="w-auto p-8"><a
                        class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                        href="https://intstu.com">View Project</a></div>
                    <div class="w-auto p-8"></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-4/12 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">Open Translate
                      </h4>
                      <p class="mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Translation management system where users can contribute to i18n efforts. Provides API integrations for native i18n experience in any project.</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Nuxt.js</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue3</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Django</span>
                      </div>
                    </div>
                    <div class="w-full"><a
                        class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 text-gray-900"
                        href="https://www.helpmeexplain.com/">View Project</a></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">INTSTU
                      </h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Personal project to help students explore international education opportunities. Experimenting with SEO in modern frameworks and internationalization.</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Nuxt.js</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Django</span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">SEO</span>
                      </div>
                      <img class="mb-8 h-24 object-cover mx-auto" src="/public/mirga-assets/images/services/draw4.png"
                        alt="">
                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">OBSO LINK</h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Internal software developed and currently used at organization. Increased productivity by 60% with rigorous updates and new workflows. Optimized website SEO leading to indexing 102K pages.</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Django</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AWS QuickSight</span>
                      </div>
                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-full xl:w-1/3 p-2.5">
                <div class="h-full p-10 bg-white rounded-5xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div class="flex flex-col justify-between h-full">
                    <div class="w-full">
                      <h4 class="mb-2 text-4xl font-medium tracking-tight font-heading text-gray-900">Data Extraction & Semantic Graph</h4>
                      <p class="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Academic dissertation using deep learning models based on Transformer Architecture for entity detection and relation extraction on iGEM Portal data.</p>
                      <div class="mt-4 flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Deep Learning</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">NLP</span>
                      </div>
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

      <section class="py-12 md:py-24 bg-neutral-600">
        <div class="container mx-auto px-4">
          <div class="pb-14 mb-2 border-b border-neutral-900">
            <h1 class="text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading"> Blog</h1>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <article v-for="post in publishedPosts?.slice(0, 10)" :key="post._path" 
              class="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
              </h3>
              <p class="text-gray-600 mb-3 line-clamp-2">{{ post.description }}</p>
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{{ post.readingTime }} min read</span>
                <span>•</span>
                <span>{{ formatDate(post.date) }}</span>
              </div>
              <div v-if="post.tags" class="flex flex-wrap gap-1">
                <span v-for="tag in post.tags.slice(0, 3)" :key="tag" 
                  class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>

          <NuxtLink 
            to="/blog"
            class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200">
            View all articles
          </NuxtLink>
        </div>
      </section>

      <section class="bg-neutral-600 p-5 sm:p-10">
        <div class="py-24 md:py-52 rounded-4xl bg-white px-4">
          <div class="flex flex-col justify-center items-center h-full">
            <h1
              class="mb-16 text-center text-6xl sm:text-9xl xl:text-11xl font-semibold max-w-lg xl:max-w-5xl mx-auto font-heading">
              <span class="mr-3">Ready to collaborate on</span>
              <span class="relative inline-block">
                <span class="relative z-10 text-gray-900">innovative projects?</span>
                <span class="absolute -bottom-2 left-0 h-2.5 w-full bg-blue-100 rounded-full"></span>
              </span>
            </h1>

            <div class="flex flex-wrap justify-center gap-6">
              <a class="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 hover:scale-105 transform"
                href="mailto:soorajparakkattil@gmail.com">Email Me</a>
              <a class="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 bg-white hover:bg-gray-100 focus:bg-gray-100 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 hover:scale-105 transform"
                href="https://linkedin.com/in/soorajiam">Connect on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SkillGame from './SkillGame.vue';
import NeuralNetworkGame from './NeuralNetworkGame.vue';

const { data: publishedPosts } = await useAsyncData('publishedPosts', () => queryContent('/blog')
  .only(['title', 'description', 'date', 'author', 'tags', 'image', 'readingTime', '_path', 'published'])
  .where({ 
    _extension: 'md',
    published: { $ne: false } // Only show published posts (published: true or undefined)
  })
  .sort({ date: -1 })
  .find()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const skillGameRef = ref<InstanceType<typeof SkillGame> | null>(null);
const neuralGameRef = ref<InstanceType<typeof NeuralNetworkGame> | null>(null);
const showNN = ref(false);

const names = ["Sooraj P R", "Software Engineer", "Backend Engineer", "Python Developer", "Django Developer"];

const name = ref('Sooraj P R');

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+-=[]{}|;:,.<>?";
const matrixChars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｦｧｨｩｪｫｬｭｮｯｰ";

// Start the skill game
const startGame = () => {
  if (skillGameRef.value) {
    skillGameRef.value.initiateShowingSkills();
  }
};

const startNN = () => {
  if (neuralGameRef.value) {
    neuralGameRef.value.startSimulation();
  }
  showNN.value = true;
};

const stopNN = () => {
  if (neuralGameRef.value) {
    neuralGameRef.value.stopSimulation();
  }
  showNN.value = false;
};

const stopSkillGame = () => {
  if (skillGameRef.value) {
    skillGameRef.value.resetGame();
  }
};

const getRandomName = (excludeName: string): string => {
  let filteredNames = names.filter(n => n !== excludeName);
  return filteredNames[Math.floor(Math.random() * filteredNames.length)];
};

const onHoverLetterChange = () => {
  console.log('hovered');

  let currentName = name.value;
  let targetName = getRandomName(currentName);
  let iterations = 0;
  let maxIterations = Math.max(currentName.length, targetName.length);
  let isMatrixMode = true;

  // Add Matrix-style CSS class to the name element
  const nameElement = document.querySelector('.font-heading');
  if (nameElement) {
    nameElement.classList.add('matrix-effect');
  }

  const interval = setInterval(() => {
    if (iterations > maxIterations) {
      clearInterval(interval);
      name.value = targetName;
      
      // Gracefully remove Matrix effect with fade transition
      if (nameElement) {
        (nameElement as HTMLElement).style.transition = 'all 0.5s ease-in-out';
        (nameElement as HTMLElement).style.color = '#ffffff';
        (nameElement as HTMLElement).style.textShadow = 'none';
        
        setTimeout(() => {
          nameElement.classList.remove('matrix-effect');
          (nameElement as HTMLElement).style.transition = '';
          (nameElement as HTMLElement).style.color = '';
          (nameElement as HTMLElement).style.textShadow = '';
        }, 500);
      }
      
      setTimeout(() => onHoverLetterChange(), 3000);
      return;
    }

    name.value = targetName
      .split('')
      .map((letter, index) => {
        if (index < iterations) {
          return targetName.charAt(index);
        } else if (index < targetName.length) {
          // Create more authentic Matrix effect with varying character types
          const random = Math.random();
          if (random < 0.3) {
            // Use Japanese katakana for authentic Matrix look
            return matrixChars[Math.floor(Math.random() * matrixChars.length)];
          } else if (random < 0.6) {
            // Use alphanumeric characters
            return letters[Math.floor(Math.random() * letters.length)];
          } else {
            // Use special symbols
            return "!@#$%^&*()_+-=[]{}|;:,.<>?"[Math.floor(Math.random() * 20)];
          }
        }
        return '';
      })
      .join('');

    iterations++;
  }, 80); // Slower for more graceful effect
};

onMounted(() => {
  onHoverLetterChange();
})

import { ref, onMounted, onUnmounted } from 'vue';

const blob = ref<HTMLElement | null>(null);
const mobileNavOpen = ref(false);

const onMouseMove = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  if (blob.value) {
    blob.value.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {
      duration: 3000,
      fill: "forwards"
    });
  }
};

onMounted(() => {
  document.body.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  document.body.removeEventListener('mousemove', onMouseMove);
});

</script>

<style>
@keyframes rotate {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes matrixGlow {
  0% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00,
      0 0 20px #00ff00;
    color: #00ff00;
  }
  25% {
    text-shadow: 
      0 0 8px #00ff00,
      0 0 16px #00ff00,
      0 0 24px #00ff00,
      0 0 32px #00ff00;
    color: #7fff7f;
  }
  50% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00,
      0 0 40px #00ff00;
    color: #bfffbf;
  }
  75% {
    text-shadow: 
      0 0 8px #00ff00,
      0 0 16px #00ff00,
      0 0 24px #00ff00,
      0 0 32px #00ff00;
    color: #dfffdf;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00,
      0 0 20px #00ff00;
    color: #ffffff;
  }
}

@keyframes matrixFlicker {
  0%, 100% {
    opacity: 1;
  }
  20% {
    opacity: 0.95;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.98;
  }
  80% {
    opacity: 1;
  }
}



#blob {
  background-color: white;
  height: 100px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(45deg, #3b82f6, #10b981, #8b5cf6, #ef4444);
  animation: rotate 20s infinite, float 6s ease-in-out infinite;
  filter: blur(50px);
  opacity: 0.8;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(100px);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

.transition-all {
  transition: all 0.3s ease;
}

.duration-300 {
  transition-duration: 300ms;
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.matrix-effect {
  animation: matrixGlow 0.3s ease-in-out infinite, matrixFlicker 0.2s ease-in-out infinite;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
}
</style>