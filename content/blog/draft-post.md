---
title: This is a Draft Post
description: This post is not published and should not appear in the blog listing
date: 2024-12-01
layout: blog-post
author: Sooraj
tags:
  - draft
  - example
image: /mirga-assets/images/blog/blog-picture1.png
readingTime: 3
published: false
---

This is a draft post that should not be visible to the public.

## Why This Post is Hidden

This post has `published: false` in its frontmatter, which means:

1. It won't appear in the blog listing page
2. It won't be included in related posts
3. It won't appear in navigation (prev/next)
4. Direct access will show a 404 error

## How to Publish

To make this post visible, simply change the frontmatter to:

```yaml
published: true
```

Or remove the `published` field entirely (posts are published by default).

## Use Cases

This feature is useful for:
- Draft posts you're still working on
- Posts you want to review before publishing
- Seasonal content that's not ready yet
- A/B testing different versions 