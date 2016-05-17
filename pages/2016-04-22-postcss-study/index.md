---
title: Learning Postcess Notes
date: 1461336350474
layout: post
path: "/learning-postcss-notes/"
---


####Basic Code Plugin Structure and APIs
```
    var postcss = require('postcss');
    module.exports = postcss.plugin('myplugin', function myplugin(options) {
 
        return function (css) {
     
            options = options || {};
             
            // Processing code will be added here
            // Using walkRules() iterates through every rule in your CSS, a rule is basically your selector and the styles you’ve set between its curly braces
            css.walkRules(function (rule) {
                
                // Inside each rule, walkDecls() iterates through every declaration; a declaration is essentially each line in the style.
                rule.walkDecls(function (decl, i) {
             
             
             
                });
             
            });
        }
     
    });

```
