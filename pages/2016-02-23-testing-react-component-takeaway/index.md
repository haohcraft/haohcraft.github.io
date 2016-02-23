---
title: My Takeaway for React Component Testing
date: "Tue Feb 23 2016 08:38:02 GMT-0500 (EST)"
layout: post
path: "/testing-react-component-takeaway/"
---

## Introduce

I have been working with React/Redux since Oct., 2015 at Dataminr in production. Along this journey, there are some takeawayes I gained and would like to share. Hopefully it will help you learn React testing from my experience and avoid some rookie mistakes.

At this moment when writing the test code for the components, there are two concepts we should bear in mind. These two would indicate **what and how** we would like to test, and even how we write React componnets in general.

- The UI should only reflect one snapshot of the State
- The only way to change the State is to dispatch actions


So the testing would be devided into two parts: **Render** and **Behavior**. And there are different *how-to*s and *tips* in each part.

## Render
This part of the test mainly aims for the rendered components created in the `render` cycle. And since in the React/Redux framework we split the components into the *Dummy* and the *Smart* ones, this part would focus on those *Dummy* ones.

### Goal

To verify the existence of the test target base on the prop/state data

### Tool

In this case, [`react-addons-test-utils`](http://facebook.github.io/react/docs/test-utils.html) has been taken advantages of, specificly these methods below I have found very helpful.

1. [findRenderedDOMComponentWithClass](http://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithclass) - to find the **only** one rendered component by its class name in the tree, otherwise it would throw an *un-matched* error.
2. [scryRenderedDOMComponentsWithClass](http://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithclass) - to find all the rendered components by the class name in the tree. This will always return an array, either an empty one or not.

And of course, there are two other variations of these two but to find rendred components by `Tag`.


### Case Study

For a **dummy component** like this:

```
const AComponent = () => (<input className="test" placeholder="haha" value="lala" />);
```

The test code would look like:

```
describe('render', () => {
    it('should create the input', () => {
        const componentInstance = TestUtils.renderIntoDocument(<AComponent {...defaultProps} />);
        const inputEl = TestUtils.scryRenderedDOMComponentsWithClass(componentInstance, 'test');
        // Or const inputEl = TestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'input');
        expect(inputEl).to.have.length(1);
    });
});

```

Notice that we just check its existence by checking the length of what we can find in the tree.

---

For a more complicated case where the UI depends on the variation of the props.
```
export default class BComponent extends React.Component {
    render() {
        return <div>
            {this.buildList()}
        </div>;
    }
    buildList() {
        const {items} = this.props;
        return items.map((i, k) => (<div className="item" key={k} >{i}</div>));
    }
}
```

The test code would look like:

```
describe('render', () => {
    it('should create a list one item', () => {
        const props = {
            items: ['a']
        };
        const componentInstance = TestUtils.renderIntoDocument(<BComponent {...props} />);
        const inputEl = TestUtils.scryRenderedDOMComponentsWithClass(componentInstance, 'item');
        expect(inputEl).to.have.length(1);
    });

    it('should create a list two items', () => {
        const props = {
            items: ['a', 'b']
        };
        const componentInstance = TestUtils.renderIntoDocument(<BComponent {...props} />);
        const inputEl = TestUtils.scryRenderedDOMComponentsWithClass(componentInstance, 'item');
        expect(inputEl).to.have.length(2);
    });
});
```

**More Concrete Example**

[component](https://git.dataminr.com/frontend-team/Dan/blob/3605ee221fc7829282b22d28bb2abf551dcfd144/application/app/v2/components/queryinput/views/item/tail.js) | [test](https://git.dataminr.com/frontend-team/Dan/blob/3605ee221fc7829282b22d28bb2abf551dcfd144/application/app/v2/components/queryinput/test/queryinputitem.tail.test.js)

## Behavior
The behavior (dispatching actions) is the only way to change the global State. And since **Smart** Components take the responsibility to assemblle the dummy ones, testing on the user interaction flow usually happens there. If there is no **smart** component, then we need to make a **smart** wrapper component.

### Tool/Strategy 

- [TestUtils.Simulate](https://facebook.github.io/react/docs/test-utils.html#simulate):

    1. click
    ```
    TestUtils.Simulate.click(nodeEl);
    ```
    2. change
    ```
    inputEl.value = 'haha';
    TestUtils.Simulate.change(inputEl);
    ```
    3. keyDown
    ```
    TestUtils.Simulate.keyDown(inputEl, {key: "Enter", keyCode: "13"});
    ```
- Use a Wrapper Component
This is a case where 

### Case Study


## Extra
In `React v0.13`, there is another technique be introduced [**Shallow Rendering**](http://facebook.github.io/react/docs/test-utils.html#shallow-rendering) for testing.


