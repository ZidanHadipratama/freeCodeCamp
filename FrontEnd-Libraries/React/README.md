# React Quick Guide 🚀

Welcome to the React Quick Guide! In this guide, you'll gain an understanding of key concepts and practices for building dynamic and interactive web applications using React.

## Table of Contents

- [Introduction](#introduction)
- [JSX: JavaScript + HTML](#jsx-javascript--html)
  - [JSX Compilation](#jsx-compilation)
  - [JSX Syntax and Rules](#jsx-syntax-and-rules)
  - [Rendering JSX](#rendering-jsx)
- [Components: Building Blocks of React](#components-building-blocks-of-react)
  - [Creating Functional Components](#creating-functional-components)
  - [Creating Class Components](#creating-class-components)
  - [Component Composition](#component-composition)
  - [Passing Props](#passing-props)
  - [Default Props](#default-props)
  - [Overwriting Default Props](#overwriting-default-props)
  - [Accessing Props in ES6 Class Components](#accessing-props-in-es6-class-components)
  - [Prop Types](#prop-types)
- [State and Lifecycle](#state-and-lifecycle)
  - [Setting Initial State](#setting-initial-state)
  - [Accessing State](#accessing-state)
  - [Accessing State in the `render()` Method](#accessing-state-in-the-render-method)
  - [Class Method and Binding](#class-method-and-binding)
- [Conclusion](#conclusion)

## Introduction 📜

React is a popular JavaScript library for building user interfaces, focusing on creating reusable UI components and efficiently updating the DOM. It uses a declarative approach to describe the UI based on a component-based architecture.

## JSX: JavaScript + HTML ✨

### JSX Compilation

React uses JSX (JavaScript XML) to define UI elements within JavaScript code. JSX provides a syntax that closely resembles HTML, making it easy to express UI structures and components.

To use JSX, write your code inside `.jsx` files. JSX code must be compiled into JavaScript code using tools like Babel.

### JSX Syntax and Rules

- JSX elements must have a single root parent element.
- Use curly braces `{}` to embed JavaScript expressions within JSX.
- Use `className` instead of `class` for adding CSS classes.
- HTML attributes and event references use camelCase (e.g., `onClick`, `onChange`).
- Self-closing tags should be written as `<div />` or `<div></div>`.

### Rendering JSX

To render JSX into the DOM, use `ReactDOM.render(componentToRender, targetNode)`:

```javascript
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

## Components: Building Blocks of React 🧩

### Creating Functional Components

Functional components are JavaScript functions that return JSX elements. Start the component name with a capital letter.

```javascript
const DemoComponent = function() {
  return <div className='customClass' />;
};
```

### Creating Class Components

Class components are ES6 classes that extend `React.Component` and have a `render` method. They allow for more advanced features, such as local state and lifecycle hooks. The `constructor` method is used for initializing the component's state and other setup tasks. The `super(props)` call is necessary to properly initialize the parent class.

```javascript
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hi</h1>;
  }
}
```

### Component Composition

Compose complex UIs by combining components. Parent components can render child components using JSX tags.

```javascript
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
```

### Passing Props

Props are a way to pass data from parent to child components. Functional components receive props as arguments, while class components access props using `this.props`. This allows you to create dynamic and reusable components.

```javascript
const Welcome = (props) => <h1>Hello, {props.name}!</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Zidan" />
      </div>
    );
  }
}
```

### Default Props

You can set default props for components using the `defaultProps` property. This ensures that a prop has a value if not provided explicitly.

```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};

ShoppingCart.defaultProps = {
  items: 0,
};
```

### Overwriting Default Props

To overwrite default props, simply pass a new value when rendering the component:

```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>Items: {props.items}</p>
    </div>
  );
};

ReactDOM.render(<ShoppingCart items={5} />, document.getElementById("root"));
```

### Accessing Props in ES6 Class Components

In ES6 class components, use `this.props` to access props:

```javascript
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, <strong>{this.props.name}</strong>!</p>
      </div>
    );
  }
}
```

### Prop Types

Prop types allow you to specify the expected type of a prop. This helps catch potential bugs by warning you if a prop's value does not match the specified type.

```javascript
import PropTypes from 'prop-types';

const Items = (props) => (
  <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
);

Items.propTypes = {
  quantity: PropTypes.number.isRequired,
};
```

## State and Lifecycle

### Setting Initial State

State is used to manage dynamic data in a component. You can initialize the state in the constructor of a class component.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp',
    };
  }
}
```

### Accessing State

Access state using `this.state.propertyName` within your class component methods, including the `render()` method.

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
```

### Accessing State in the `render()` Method

There is another way to access state in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from state or

 props, and perform computations.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    const greeting = `Hello, ${this.state.name}!`;
    return <div>{greeting}</div>;
  }
}
```

### Class Method and Binding

When using class methods that modify the state, you need to use the `this` keyword. However, `this` behaves differently in JavaScript compared to other languages. To ensure `this` refers to the component instance, you might need to bind your method in the constructor.

```javascript
class EventComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p>Button clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

## Conclusion 🌟

This guide provides a quick overview of essential React concepts, including JSX, components, props, state, and lifecycle methods. With this foundation, you can start building dynamic and interactive user interfaces using React. Remember that practice is key to mastering these concepts. Happy coding! 🚀
