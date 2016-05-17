---
title: Decorator Patterns in React App
date: 1463487495318
layout: post
path: "/decorator-pattern-in-react-app/"
---

I have been using React/Redux in production [@dataminr](https://twitter.com/Dataminr) since last November-ish. Since then, our codebase has been evolving quite a lot and we are still doing experiments in order to well structure and resuse our code. Here are some *opinionated* experimental abstractions to fullfill that purpose.

When I say "decorator pattern", I simply mean the high-order function(Component) way to genearate the ReactComponent to deal with challenges like:
1. to create nested component
2. to customize the existing component per business logic
3. to co-exist same components in one view tho need to isolate their own Redux actions

##### Ad-hoc Configuring Decorator v.s. Class Inheritence Pattern
Conventionally, to create multiple similar components the best practice would be to create a *base* component where a few public API would be exposed to extend later and a render function to layout different sub-components.

```
class Base extends Component {
    render() {
        return <div>
            <div className="head">{this.getHead()}</div>
            <div className="content">{this.getContent()}</div>
            <div className="foot">{this.getFoot()}</div>
        </div>;
    }
    getHead() {
        return null;
    }
    getContent() {
        return null;
    }
    getFoot() {
        return null;
    }
}
```
Later on, to create two other *Base-type* components.
```
class ABase extends Base {
    getHead() {
        return <div>Base-type A component</div>;
    }
}
```
```
class CBase extends Base {
    getHead() {
        return <div>Base-type C component</div>;
    }
}
```
This pattern works quite well for most UI composition cases if we keep the level of the inheritence in a manageable sense. Usually there is another level on top of this.
```
class AABase extends ABase {
    getHead() {
        return <div>ABase-type A component</div>;
    }
}
```
In this approach, as the app grows the newly added API would alwasy flow from the top layer to the base one in order to be shared by upper components. Eventually, lower (or base) layer of component would become cumbersome. To me, it also feels a little bit tedious and hardly manageable in a long run to write placeholder APIs at the base which may or may not be used by the upper ones.

Instead, a high-order function plays well here.
