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
1. Change `node index.js` to `NODE_ENV=production node index.js`
    - Because React has a bunch of debug related messages generated unless it is in `production` mode
2. Use minified React.js
    - Change `react-dom/server` to `react/dist/react.min` for ReactDOMServer
    - To do so, we avoid the checking time for whether it is in prod mode or not
3. Babel Transforms


#### Reference

- [Speed up Server Side Rendering - Sasha Aickin](https://www.youtube.com/watch?v=PnpfGy7q96U)