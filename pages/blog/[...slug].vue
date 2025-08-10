<template>

    <ContentDoc />

</template>

<script setup>
// This creates catch-all routes for blog posts
// The [...slug] syntax allows for nested paths like /blog/post-name
definePageMeta({
  layout: 'blog-post'
})
</script>