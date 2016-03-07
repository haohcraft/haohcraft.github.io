---
title: Tackle the Positioning 
date: 1457322051452
layout: post
path: "/tackle-positioning/"
---

During the past few monthes, I have been writing components like dropdown, tooltip and popover. And I found myself running into a few edge cases again and again. In order to tackle such positioning issue, I think we need to systemactically know what are those positioning API available on web in the first place and then find a way to deal the problems.

## Position API

Positioning is all about relativity and boundry. An element is placed to either the `window`, its `view port` or a `target` element. And we always need to consider the relationship between the content and the boundry of those three above based on practical business logics.

### Position API of `window`

 - `pageYOffset`  
    - Return the number of pixels that the document has already been scrolled *vertically*
    - equal to `window.scrollY`
 - `pageXOffset`
    - Return the number of pixels that the document has already been scrolled *vertically*
    - equal to `window.scrollX`
 - `innerHeight` 
    - Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.
 - `innerWidth`
    - Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar.

### Position API of `target`

 - `getBoundingClientRect`
    - Returns the size of an element and its *position relative to the viewport*.
    - {left, right, top, bottom} are relative to the *top-left* of the viewport