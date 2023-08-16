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

## Conclusion 🎉

React's component-based architecture, JSX syntax, and features like props and prop types provide a powerful foundation for building dynamic and modular user interfaces. By creating reusable components and thinking in terms of composition, you can create efficient and maintainable web applications.

For more detailed information and advanced topics, explore the official [React documentation](https://reactjs.org/docs/getting-started.html).

Happy coding! 🚀
