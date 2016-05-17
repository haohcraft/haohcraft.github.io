---
title: Interesting Redux/React Repos
date: 1458225063919
layout: post
path: "/interesting-redux-react-repos/"
---

There are some interesting Redux/React related repos worthy to dive into.


##### [Redux-Component](https://github.com/tomchentw/redux-component)
> A isolated redux store is created for each React component instance. It has nothing to do with your global flux architecture. 

##### [multireducer](https://github.com/erikras/multireducer)
> A utility to wrap many copies of a single Redux reducer into a single key-based reducer.

Since the actions in Redux is differentiated by `action.type`, if we want to re-use the `action` and `reducer` of a specific (redux) component we need to `hijack` the `action.type` by tagging along a String Constant (like `WRAPPEDBY=`) before it is dispatched. Meanwhile, we need the logic to help the related reducer to decipher the *hijacked* action.

In this way, 
1. Same (redux) components can be reused
2. State changes can be confidently put on the Global State tree under a specific namespace

##### [redux-ui](https://github.com/tonyhb/redux-ui/tree/864cee5f291b8253f793a6159b85e6915bbac81f)

##### [realm](https://github.com/acdlite/realm)
> One way to think of it is as "nested Redux." Each Realm component is its own mini-Redux app, which can be composed of other Redux apps.

