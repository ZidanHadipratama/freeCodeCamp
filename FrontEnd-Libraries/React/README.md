# React Quick Guide 🚀

Welcome to the React Quick Guide! In this guide, you'll gain an understanding of key concepts and practices for building dynamic and interactive web applications using React. 🎉

## Table of Contents 📚

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
  - [Lifecycle Methods](#lifecycle-methods)
- [Handling Events](#handling-events)
  - [Binding in Class Components](#binding-in-class-components)
  - [Toggle Visibility Example](#toggle-visibility-example)
  - [More Complex State and Function Example](#more-complex-state-and-function-example)
- [Controlled Input Form](#controlled-input-form)
  - [ControlledInput Example](#controlledinput-example)
  - [MyForm Example](#myform-example)
- [Component Communication](#component-communication)
  - [Passing State as Props](#passing-state-as-props)
  - [Parent-Child Communication Example](#parent-child-communication-example)
  - [Passing Methods as Props](#passing-methods-as-props)
  - [Method Communication Example](#method-communication-example)
- [Conclusion](#conclusion)

## Introduction 📜

React is a popular JavaScript library for building user interfaces, focusing on creating reusable UI components and efficiently updating the DOM. It uses a declarative approach to describe the UI based on a component-based architecture. ⚛️

## JSX: JavaScript + HTML ✨

### JSX Compilation

React uses JSX (JavaScript XML) to define UI elements within JavaScript code. JSX provides a syntax that closely resembles HTML, making it easy to express UI structures and components.

To use JSX, write your code inside `.jsx` files. JSX code must be compiled into JavaScript code using tools like Babel. 🛠️

### JSX Syntax and Rules

- JSX elements must have a single root parent element.
- Use curly braces `{}` to embed JavaScript expressions within JSX.
- Use `className` instead of `class` for adding CSS classes.
- HTML attributes and event references use camelCase (e.g., `onClick`, `onChange`).
- Self-closing tags should be written as `<div />` or `<div></div>`. ✏️

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

Functional components are JavaScript functions that return JSX elements. Start the component name with a capital letter. 🎈

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

##

 State and Lifecycle

### Setting Initial State

State is used to manage dynamic data that can change over time. Set the initial state in the component's `constructor` method.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}
```

### Accessing State

Access state data using `this.state`. React components are re-rendered when state changes.

```javascript
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!',
    };
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}
```

### Accessing State in the `render()` Method

In the `render()` method, you can directly write JavaScript. For example, you can declare functions, access data from state or props, and perform computations.

```javascript
class Greeting extends React.Component {
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

Use `this` to refer to the component instance in class methods. In the constructor, bind methods that modify state to the component instance using `.bind(this)`.

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

### Lifecycle Methods

React components have several lifecycle methods that allow you to catch components at specific points in their lifecycle:

- `componentWillMount` (deprecated)
- `componentDidMount`
- `componentWillUnmount`

Examples of `componentWillMount` and `componentDidMount`:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Component is about to mount');
  }

  componentDidMount() {
    console.log('Component has mounted');
  }

  render() {
    return <div />;
  }
}
```

## Handling Events

### Binding in Class Components

Use `.bind(this)` to bind class methods in the constructor when using them as event handlers.

```javascript
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggle ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
```

### Toggle Visibility Example

Here's an example of toggling visibility using state:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

### More Complex State and Function Example

Here's an example with more complex state and function handling:

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>
          Increment!
        </button>
        <button className='dec' onClick={this.decrement}>
          Decrement!
        </button>
        <button className='reset' onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
```

## Controlled Input Form

### ControlledInput Example

You can control input elements by moving their mutable state into the component's state. This controlled approach makes React the source of truth for the input field's value.

```javascript
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
```

### MyForm Example

Here's an example of a controlled form:

```javascript
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => ({
      submit: state.input,
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

## Component Communication

### Passing State as Props

Components can communicate by passing state as props. This helps create a unidirectional data flow from parent to child components.

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot',
    };
  }

  render

() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}!</h1>
      </div>
    );
  }
}
```

### Parent-Child Communication Example

Example of parent-child communication:

```javascript
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Received: {this.props.message}</p>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Parent!',
    };
  }

  render() {
    return (
      <div>
        <ChildComponent message={this.state.message} />
      </div>
    );
  }
}
```

### Passing Methods as Props

You can pass methods from parent to child components as props, enabling child components to interact with parent components.

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
```

### Method Communication Example

Example of communicating between parent and child components using methods:

```javascript
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Parent!',
    };
    this.sendMessageToChild = this.sendMessageToChild.bind(this);
  }

  sendMessageToChild() {
    this.setState({
      message: 'Hello from Parent! (Updated)',
    });
  }

  render() {
    return (
      <div>
        <ChildComponent message={this.state.message} sendMessage={this.sendMessageToChild} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Received: {this.props.message}</p>
        <button onClick={this.props.sendMessage}>Update Message</button>
      </div>
    );
  }
}
```

## Conclusion 🎉

React is a powerful library for building modern, interactive web applications. Understanding the core concepts of JSX, components, state, props, and event handling is essential for creating dynamic user interfaces. With these skills, you're well on your way to becoming a proficient React developer. Keep exploring, building, and learning to unleash the full potential of React in your projects! 🌟
