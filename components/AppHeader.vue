<template>
  <header class="bg-gray-800 text-white py-4">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Sooparkr</NuxtLink>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-gray-300">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>