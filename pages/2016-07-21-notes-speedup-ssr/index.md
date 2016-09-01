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
    -  Because React has a bunch of debug related messages generated unless it is in `production` mode
2. Use minified React.js
    -  Change `react-dom/server` to `react/dist/react.min` for ReactDOMServer
    -  To do so, we avoid the checking time for whether it is in prod mode or not

3. Babel Transforms
    -  There are two transforms can be added to React code, namely `Constant Elements` (CE) and `Inline Elements` (IE). CE finds constant JSX elements and hoists them to a higher scope so they are not re-instantiated every time the render method runs. And IE gets rid of all calls to React.createElement and replaces them with literal objects.
    - [`transform-react-constant-elements`, `transforms-react-inline-elements`] Note. CE should be put before IE.

4. Avoid React.createClass 
    -  significantly slower than ES6 classes and stateless components

5. Streaming
    - `Chunked Encoding` HTTP/1.1 (1999)
    - ReactDOM renderToString returns a fully-rendered string, which would be slow if the app is complicated.
    - `react-dom-stream`

6. Cache Components
    - compoment level cache is better than page level cache
    - need the right cache key



#### Reference

- [Speed up Server Side Rendering - Sasha Aickin](https://www.youtube.com/watch?v=PnpfGy7q96U)