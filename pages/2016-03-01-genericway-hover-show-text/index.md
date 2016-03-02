---
title: A Generic Way to Show the Whole Text Whiling Hovering
date: 1456848866730
layout: post
path: "/generic-way-to-show-text-when-hovering"
---


My colleague found a very generic way to show full text while hovering. It is easy to implement but almost no way to customized it.

On the HTML side:

```
<span class="hover" title="A Generic Way to Show the Whole Text Whiling Hovering">hover me</span>

```

on the CSS side:

```
.hover {
    max-width: 1ch;
}

```
Try this on [JSFiddle](https://jsfiddle.net/ah4u8ekh/)