---
title: Complete Guide to Custom Blog Components
description: Learn how to use all the amazing custom Vue components available in your blog posts
date: 2024-01-20
layout: blog-post
author: Sooraj
tags:
  - documentation
  - components
  - tutorial
  - guide
  - vue
  - nuxt
image: /mirga-assets/images/blog/blog-picture3.png
published: false
readingTime: 12
---

This guide shows you how to use all the custom Vue components that are available in your blog posts. These components use MDC (Markdown Components) syntax and can be used directly in your markdown files.

## Alert Component

Use alerts to highlight important information:

::alert{type="info"}
This is an info alert. Great for general information.
::

::alert{type="success" title="Success!"}
This is a success alert with a custom title.
::

::alert{type="warning" title="Warning"}
This alert warns about potential issues.
::

::alert{type="error" title="Error"}
This alert indicates an error or problem.
::

### Alert Syntax
```markdown
::alert{type="info"}
Your alert content here
::

::alert{type="success" title="Custom Title"}
Alert with custom title
::
```

## Callout Component

Callouts are perfect for highlighting key concepts:

::callout{type="note" title="Important Note"}
Callouts are great for emphasizing important concepts or providing additional context to your readers.
::

::callout{type="tip" title="Pro Tip"}
Use callouts to share insider knowledge or helpful tips that will benefit your readers.
::

::callout{type="important" title="Remember This"}
Important callouts help ensure your readers don't miss critical information.
::

::callout{type="warning" title="Be Careful"}
Warning callouts help prevent common mistakes or alert readers to potential pitfalls.
::

::callout{type="caution" title="Danger Zone"}
Caution callouts are for when things could go seriously wrong.
::

### Callout Syntax
```markdown
::callout{type="note" title="Your Title"}
Your callout content here. You can include **markdown formatting** too!
::
```

## Quote Component

Add beautiful quotes to your content:

::quote{author="Steve Jobs" source="Stanford Commencement Address, 2005"}
Stay hungry. Stay foolish.
::

::quote{author="Maya Angelou"}
If you don't like something, change it. If you can't change it, change your attitude.
::

### Quote Syntax
```markdown
::quote{author="Author Name" source="Source Info"}
Your quote content here
::
```

## Badge Component

Use badges to label or categorize content:

Here are some example badges: :badge[New Feature]{variant="success"} :badge[Beta]{variant="warning"} :badge[Deprecated]{variant="error"} :badge[Updated]{variant="info"} :badge[Premium]{variant="purple"} :badge[Popular]{variant="pink"}

You can also add icons: :badge[Verified]{variant="success" icon="i-heroicons-check-circle"} :badge[Info]{variant="info" icon="i-heroicons-information-circle"}

### Badge Syntax
```markdown
:badge[Success Badge]{variant="success"}
:badge[Badge with Icon]{variant="info" icon="i-heroicons-star"}
```

## Card Component

Create beautiful card layouts:

::card{title="Getting Started" badge="New" badgeVariant="success" image="/mirga-assets/images/blog/blog-picture4.png" link="/blog" linkText="Learn more"}
This is a complete card with image, badge, and link. Perfect for showcasing related content or highlighting important information.
::

::card{title="Simple Card"}
This is a simple card without image or badge. Still looks great!

::
  <div class="flex items-center space-x-2 mt-4">
    <UButton size="sm">Action</UButton>
    <UButton variant="outline" size="sm">Secondary</UButton>
  </div>
::

### Card Syntax
```markdown
::card{title="Card Title" badge="Badge Text" badgeVariant="success" image="/path/to/image.jpg" link="/link/url" linkText="Custom Link Text"}
Card content goes here
::
```

## Code Block Component

Enhanced code blocks with copy functionality:

::code-block{language="javascript" title="example.js"}
```javascript
// This is a JavaScript example
function greetUser(name) {
  console.log(`Hello, ${name}!`)
  return `Welcome to our blog, ${name}`
}

const user = "Developer"
greetUser(user)
```
::

::code-block{language="vue" title="Component.vue"}
```vue
<template>
  <div class="my-component">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const title = ref('My Component')
const description = ref('This is an example Vue component')
</script>
```
::

### Code Block Syntax
```markdown
::code-block{language="javascript" title="filename.js"}
```javascript
your code here
```
::
```

## Steps Component

Perfect for tutorials and guides:

:::steps
## Install Dependencies
First, install all the required packages for your project.
```bash
npm install @nuxt/content @nuxt/ui
```

## Configure Nuxt
Add the modules to your nuxt.config.js file.
```javascript
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/content"]
})
```

## Create Content
Start writing your first blog post in the content directory.

## Deploy
Deploy your blog to your favorite hosting platform.
:::

### Steps Syntax
```markdown
:::steps
## Step 1 Title
Description of what to do
```bash
optional code example
```

## Step 2 Title
Next step description
:::
```

## Tabs Component

Organize content with tabs:

::tabs
### JavaScript Example
```javascript
const greeting = "Hello World";
console.log(greeting);
```
JavaScript is the language of the web.

### TypeScript Example
```typescript
const greeting: string = "Hello World";
console.log(greeting);
```
TypeScript adds static typing to JavaScript.

### Vue Example
```vue
<template>
  <div>{{ greeting }}</div>
</template>

<script setup>
const greeting = "Hello World"
</script>
```
Vue makes building UIs delightful.
::

### Tabs Syntax
```markdown
::tabs
### Tab 1 Title
Content for tab 1

### Tab 2 Title  
Content for tab 2
::
```

## Video Embed Component

Embed videos from YouTube, Vimeo, or other platforms:

::video-embed{url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="Example Video" caption="This is an example of how to embed videos in your blog posts"}
::

### Video Embed Syntax
```markdown
::video-embed{url="https://youtube.com/watch?v=VIDEO_ID" title="Video Title" caption="Optional caption"}
::
```

## Combining Components

You can combine multiple components for rich content:

::card{title="Advanced Tutorial" badge="Advanced" badgeVariant="purple"}
This tutorial covers advanced techniques.

::alert{type="warning"}
Make sure you understand the basics before proceeding.
::

:::steps
## Read Documentation
Start by reading the official documentation

## Practice  
Try the examples in your own project
:::

## Best Practices

::callout{type="tip" title="Component Usage Tips"}
- Use alerts for important information that affects the reader's understanding
- Use callouts for additional context or expert tips
- Use cards to highlight related content or create visual breaks
- Use steps for any process or tutorial
- Combine components thoughtfully - don't overuse them
::

::quote{author="Design Principle"}
Good design is invisible. Use components to enhance your content, not distract from it.
::

## What's Next?

Now that you know how to use all these components, you can create rich, engaging blog posts that provide an excellent reading experience. Remember to:

1. :badge[Use semantic components]{variant="success" icon="i-heroicons-check"} - Choose the right component for your content
2. :badge[Keep it accessible]{variant="info" icon="i-heroicons-light-bulb"} - Ensure your content works for all users
3. :badge[Don't overdo it]{variant="warning" icon="i-heroicons-exclamation-triangle"} - Use components purposefully, not just because they're available

Happy blogging! 🚀