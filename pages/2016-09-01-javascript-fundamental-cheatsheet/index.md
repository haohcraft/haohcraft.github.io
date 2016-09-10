---
title: JS Fundamentals Cheatsheet
date: 1472735130066
layout: post
path: "/javascript-fundamentals-cheatsheet/"
intro: "A place where I put together a bunch of JS fundamentals"
---

###### Object.keys() v.s. Object.getOwnPropertyNames()
When talking about Object's properties, there are two types, namely enumerable one and unenumerable one. It is called enumerability of properties [1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties). 'enumerable properties are ones whose internal [[Enumerable]] flag is set true, which is default for properties created via simple assignment or via a property initializer'.

`Object.keys()` will return all enumerable properties of an object and `getOwnPropertyNames` will return both enumerable and nonenumerable properties.

###### What's closure in JS


###### What's event loop

###### When `var t = 'abc'`, what would happen in compiler 