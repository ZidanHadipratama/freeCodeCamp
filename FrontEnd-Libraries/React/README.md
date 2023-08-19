# React Notes 🚀

Welcome to your comprehensive guide to React development! This repository contains essential concepts, examples, and best practices to help you become proficient in React.

## Table of Contents

- [JSX and Rendering](#jsx-and-rendering)
- [Component Basics](#component-basics)
- [Component Composition](#component-composition)
- [Props and PropTypes](#props-and-proptypes)
- [Default Props](#default-props)
- [ES6 Class Components](#es6-class-components)
- [Handling State Updates](#handling-state-updates)
- [More Complex State Updates](#more-complex-state-updates)
- [Controlled Input Forms](#controlled-input-forms)
- [Stateful Parent Components](#stateful-parent-components)
- [Passing Methods as Props](#passing-methods-as-props)
- [Lifecycle Methods](#lifecycle-methods)
-   - [componentWillMount()](#componentwillmount)
-   - [componentDidMount()](#componentdidmount)
-   - [shouldComponentUpdate()](#shouldcomponentupdate)
-   - [componentDidUpdate()](#componentdidupdate)
-   - [componentWillUnmount()](#componentwillunmount)
- [Conditional Rendering and Styling](#conditional-rendering-and-styling)
- [Using JavaScript in Rendering](#using-javascript-in-rendering)
- [Conditional Rendering with Ternary Operator](#conditional-rendering-with-ternary-operator)
- [Rendering Elements Dynamically with map](#rendering-elements-dynamically-with-map)
- [Rendering Elements with filter](#rendering-elements-with-filter)
- [Server-Side Rendering with React](#server-side-rendering-with-react)
- [Conclusion](#conclusion)

## JSX and Rendering

React employs JSX, a syntax extension of JavaScript that combines HTML and JavaScript. JSX needs compilation into JavaScript using tools like Babel. It allows you to create dynamic UIs using a familiar HTML-like syntax:

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
```

## Component Basics

Components are the building blocks of a React application. They can be created as functions or ES6 classes. The simplest component is a function that takes in props and returns JSX:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Component Composition

React allows you to compose components by nesting them within one another. This enables you to create complex UI structures:

```jsx
function Avatar(props) {
  return <img src={props.url} alt={props.name} />;
}

function UserInfo(props) {
  return (
    <div>
      <Avatar url={props.user.avatarUrl} name={props.user.name} />
      <p>{props.user.bio}</p>
    </div>
  );
}
```

## Props and PropTypes

Props are a way to pass data from parent to child components. They are immutable and help you create reusable and dynamic components:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Default Props

You can set default props for your components using the `defaultProps` property. These values will be used if the parent component does not provide corresponding props:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.defaultProps = {
  name: "Guest",
};
```

## ES6 Class Components

ES6 class components provide a way to manage component state and lifecycle methods. They are defined using ES6 classes:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
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

## Handling State Updates

State allows components to manage their own data. To update state, use the `setState` method, which schedules updates and triggers re-renders:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

## More Complex State Updates

For complex state updates, use a function in `setState` to ensure correct asynchronous updates:

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
```

## Controlled Input Forms

Controlled components allow React to control the state of input elements. Use `value` and `onChange` to manage form data:

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Stateful Parent Components

Parent components can pass both props and methods down to child components. This way, child components can communicate with the parent:

```jsx
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <ChildComponent count={this.state.count} onIncrement={this.increment} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    );
  }
}
```

## Passing Methods as Props

Pass methods as props to child components to

 allow them to communicate with the parent. This enables parent-child interaction:

```jsx
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <ChildComponent count={this.state.count} onIncrement={this.increment} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    );
  }
}
```

## Lifecycle Methods

React components have lifecycle methods that allow you to control behavior at different points. Here are some key lifecycle methods:

### `componentWillMount()`

This method is called just before a component is mounted to the DOM. Perform actions before rendering:

```jsx
class MyComponent extends React.Component {
  componentWillMount() {
    console.log("Component is about to mount");
  }

  render() {
    return <div />;
  }
}
```

### `componentDidMount()`

The `componentDidMount()` method is called after a component is mounted. Use it for API calls or setting up event listeners:

```jsx
class FetchData extends React.Component {
  componentDidMount() {
    fetchDataFromAPI().then((data) => {
      this.setState({
        data: data,
      });
    });
  }

  render() {
    // Render fetched data
  }
}
```

### ... (other lifecycle methods)

For the complete information about lifecycle methods and their usage, please refer to the complete `readme.md` content.

## Conditional Rendering and Styling

Render components conditionally based on state or props. Apply styles dynamically using inline styles or CSS classes:

```jsx
class MagicComponent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}

class ConditionalStyling extends React.Component {
  render() {
    const styles = {
      color: "red",
      fontSize: 20,
    };

    return <div style={styles}>Red Text</div>;
  }
}
```

## Using JavaScript in Rendering

You can write JavaScript directly in your render methods to control your view. Use inline styles and conditionally render elements:

```jsx
class MagicEightBall extends React.Component {
  // ... (other methods and constructor)

  render() {
    const possibleAnswers = [/* ... */];
    const answer = possibleAnswers[this.state.randomIndex];

    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        {/* ... (other elements) */}
        <p>{answer}</p>
      </div>
    );
  }
}
```

## Conditional Rendering with Ternary Operator

The ternary operator is often used to conditionally render content. It allows for concise conditional rendering:

```jsx
class Results extends React.Component {
  // ... (constructor and methods)

  render() {
    return (
      <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>
    );
  }
}
```

## Rendering Elements Dynamically with map

Use the `map` array method to dynamically render a list of elements based on an array of data:

```jsx
class Frameworks extends React.Component {
  render() {
    const frontEndFrameworks = ["React", "Angular", "Vue"];

    const renderFrameworks = frontEndFrameworks.map((framework) => (
      <li key={framework}>{framework}</li>
    ));

    return (
      <div>
        <h1>Front End Frameworks:</h1>
        <ul>{renderFrameworks}</ul>
      </div>
    );
  }
}
```

## Rendering Elements with filter

The `filter` method helps you render elements based on a condition by filtering the data array:

```jsx
class OnlineUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: 'Jeff', online: true },
        { username: 'Alan', online: false },
        // ... (other user data)
      ],
    };
  }

  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);

    return (
      <div>
        <h1>Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

## Server-Side Rendering with React

You can render React components on the server using `ReactDOMServer.renderToString()`:

```jsx
class App extends React.Component {
  render() {
    return <div />;
  }
}

ReactDOMServer.renderToString(<App />);
```

## Conclusion

Congratulations on mastering key concepts in React! With this guide, you've covered JSX, components, props, state, lifecycle methods, and more. Keep practicing and building to become a skilled React developer. 🎉🚀
