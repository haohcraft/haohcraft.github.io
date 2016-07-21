---
title: Notes on Video Talk about SSR
date: 1469106933984
layout: post
path: "/notes-on-video-talk-about-react-ssr/"
intro: "About how to speed up React server side rendering"
---



#### Why React SSR is slow for a Large APP

1.  `renderToString` is single-threaded, synchronous, and CPU bound, so more CPU cores won't help.

2.  Server rendering and client rendering share code, alothough some code is not necessary on the server side. For instance, no need to track virtual DOM, Event handlers on Server side.


#### Tips



#### Reference

- [Speed up Server Side Rendering - Sasha Aickin](https://www.youtube.com/watch?v=PnpfGy7q96U)