# React Quick Guide 🚀

Welcome to the React Quick Guide! In this guide, you'll get an overview of key concepts and practices for building dynamic and interactive web applications using React.

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

Class components are ES6 classes that extend `React.Component` and have a `render` method.

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

## Conclusion 🎉

React's component-based architecture and JSX syntax provide a powerful foundation for building dynamic and modular user interfaces. By creating reusable components and thinking in terms of composition, you can create efficient and maintainable web applications.

For more detailed information and advanced topics, explore the official [React documentation](https://reactjs.org/docs/getting-started.html).

Happy coding! 🚀
