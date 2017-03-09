---
title: Note for React Doc Reading
date: 1477410680274
layout: post
path: "/note-for-react-doc-reading/"
---

### Use State Correctly

##### State Updates May be Asynchronous
- `setState` can accept a function rather than an object

```
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```


