# React Examples and Concepts

This repository contains examples and explanations for various concepts in React. Each section provides code snippets and explanations to help you understand and practice different aspects of React development.

## Create a Simple JSX Element

React uses JSX to combine HTML with JavaScript. You can create simple JSX elements as follows:

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

Output: HELLO JSX!

## Create a Complex JSX Element

JSX requires a single parent element to wrap nested elements. For example:

```jsx
// Valid JSX
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>

// Invalid JSX
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

## Add Comments in JSX

Add comments to JSX using curly braces. For example:

```jsx
const JSX = (
  <div>
    {/* Testing */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

## Render HTML Elements to the DOM

Render a React element to the DOM using `ReactDOM.render()`. For example:

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

## Define an HTML Class in JSX

In JSX, use `className` instead of `class` to define HTML classes. For example:

```jsx
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

## Learn About Self-Closing JSX Tags

Use self-closing tags for JSX elements. For example:

```jsx
<div /> // Valid
<div></div> // Valid
<br /> // Valid
```

## Create a Stateless Functional Component

Create stateless functional components in React using JavaScript functions. Component names must start with a capital letter. For example:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

## Create a React Component

Create a React component using the ES6 class syntax. For example:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

## Create a Component with Composition

Compose components together by rendering child components within parent components. For example:

```jsx
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
        <ChildComponent/>
      </div>
    );
  }
}
```

## Use React to Render Nested Components

Use nested components to break down your UI into building blocks. For example:

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit/>
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
      </div>
    );
  }
}
```

## Compose React Components

Compose components by rendering them within each other. For example:

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus/>
        <Citrus/>
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables />
      </div>
    );
  }
}
```

## Render a Class Component to the DOM

Render class components using `ReactDOM.render()`. For example:

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables/>
      </div>
    );
  }
}

ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'));
```

## More Basic React Component Example

Create basic React components using ES6 class syntax. For example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));
```

## Pass Props to

 a Stateless Functional Component

Pass props to child components in React. For example:

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
}
```

## Pass an Array as Props

Pass arrays as props to JSX elements. For example:

```jsx
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["test1", "test2", "test3"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["test4", "test5", "test6"]}/>
      </div>
    );
  }
}
```

## Use Default Props

Set default props for React components. For example:

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {
  items: 0
}
```

## Override Default Props

Override default props for React components. For example:

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
}
```

## Use PropTypes to Define the Props You Expect

Use PropTypes to define expected prop types in React components. For example:

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
}

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
}
```

## Access Props Using this.props

Access props using `this.props` within class components. For example:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <Welcome name="Zidan"/>
        </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
}
```

## Review on Component and Props

Understand the concepts of stateless, stateless functional, and stateful components in React. For example:

```jsx
// Stateless Component
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

// Stateless Functional Component
const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

// Another Stateless Component Example
class Camper extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

// Set default props
Camper.defaultProps = {
  name: 'CamperBot'
}

// Set PropType
Camper.propTypes = {
  name: PropTypes.string.isRequired
}
```

# React State and Props Examples

## Create a Stateful Component

One of the most important topics in React is state. State consists of any data your application needs to know about that can change over time. React offers a solution for managing state in modern web applications.

You create state in a React component by declaring a state property on the component class in its constructor. The state property must be set to a JavaScript object. For example:

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Zidan"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
```

## Render State in the User Interface

You can access state in a component's `render()` method. State data is accessed using `this.state`.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

## Render State in the User Interface Another Way

You can also access state in the `render()` method using variables.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
```

## Set State with this.setState

Use the `setState` method to update a component's state. Always use `setState()` when state changes occur.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "React Rocks!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

## Bind 'this' to a Class Method

Bind `this` to a class method in the constructor to access properties like `state` and `props` inside the method.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

## Use State to Toggle an Element

Use state to toggle the visibility of an element. Use `setState()` with a function argument to ensure you work with the most current values of state and props.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
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

## Simple Counter App Using React

Create a simple counter app using React.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
```

## Create a Controlled Input

Convert a user input into controlled input using state.

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
```

## A Controlled Form

Create a controlled form using React.

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

## Pass State as Props to Child Components

Pass state as props to child components.

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name}/>
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
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}
```

## Pass a Callback as Props

Pass a callback

 as props to child components.

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
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

# React Lifecycle Methods and Styling

## Use the Lifecycle Method componentWillMount

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, and they allow you to catch components at certain points in time. The `componentWillMount()` method is called before the `render()` method when a component is being mounted to the DOM. 

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("testing");
  }
  render() {
    return <div />;
  }
}
```

## Use the Lifecycle Method componentDidMount

The `componentDidMount()` method is called after a component is mounted to the DOM. It's the best place to call API endpoints and perform other actions after the component has been rendered.

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

## Add Event Listeners

You can attach event listeners in the `componentDidMount()` method. For events on document or window objects, you need to attach and remove event listeners directly.

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  handleEnter() {
    this.setState(state => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```

## Optimize Re-Renders with shouldComponentUpdate

The `shouldComponentUpdate(nextProps, nextState)` method is used to optimize performance by preventing unnecessary re-renders. It returns a boolean value indicating whether the component should update or not.

Here's an example:

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 2 === 0) {
      return true;
    }
    return false;
  }
  
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

## Introducing Inline Styles

In React, you can apply inline styles using the `style` attribute, which accepts a JavaScript object. The properties of the object are camel-cased versions of the CSS property names.

Here's an example:

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{ color: "red", fontSize: 72 }}>Big Red</div>
    );
  }
}
```

For larger sets of styles, you can use a constant to keep your code organized:

```jsx
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
}
```

# Using Advanced JavaScript in React Render Methods

## Use Advanced JavaScript in React Render Method

You can utilize advanced JavaScript directly within your React render methods. This allows you to perform operations before the return statement without placing them inside curly braces. When you need to use a variable within the JSX code, you can enclose the variable name in curly braces.

Here's an example:

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}
```

## Render with an If-Else Condition

You can conditionally render elements based on certain conditions using an if-else statement in the render() method. This allows you to dynamically change what's displayed based on the state of the component.

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  
  render() {
    if (!this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }
  }
}
```

## Use && for a More Concise Conditional

The `&&` logical operator can be used for more concise conditional rendering. This operator allows you to quickly render elements based on a condition. If the condition is true, the element is rendered; if the condition is false, nothing is rendered.

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}
```

## Use a Ternary Expression for Conditional Rendering

Ternary expressions provide a concise way to perform conditional rendering in React. They allow you to render different elements based on a condition.

Here's an example:

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === '' 
          ? buttonOne 
          : this.state.userAge < 18 
          ? buttonThree
          : buttonTwo}
      </div>
    );
  }
}
```

## Render Conditionally from Props

You can conditionally render components based on the values of their props. This is a common practice in React development, where components adjust their rendering based on dynamic data.

Here's an example:

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>
    )
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  render() {
    const expression = Math.random() >= .5;
    
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/>
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
```

## Change Inline CSS Conditionally Based on Component State

You can dynamically change inline styles in your components based on their state. This is a powerful technique to make your components more responsive and visually appealing.

Here's an example:

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    
    if (this.state.input.length > 15) {
      inputStyle = {
        border: '3px solid red'
      };
    }
    
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
```

## Use Array.map() to Dynamically Render Elements

The `map()` method is essential for dynamically rendering elements in React. It allows you to transform an array of data into an array of components, which you can then render within your JSX.

Here's an example:

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  
  render() {
    const items = this.state.toDoList.map(i => <li key={i}>{i}</li>);
    
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

## Give Sibling Elements a Unique Key Attribute

When rendering an array of elements, each element should have a unique `key` attribute. React uses these keys to efficiently update and manage the rendered elements.

Here's an example:

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(i => <li key={i}>{i}</li>);
  
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
}
```

## Use Array.filter() to Dynamically Filter an Array

The `filter()` method is useful for dynamically filtering the contents of an array based on a condition. It returns a new array containing elements that satisfy the condition.

Here's an example:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => (user.online)); // Change this line
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

## Render React on the Server with renderToString

You can render React components on the server using the `renderToString()` method. This is useful for scenarios where you want to provide search engines with HTML content or improve the initial page load performance.

Here's an example:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div/>;
  }
}

ReactDOMServer.renderToString(<App/>);
```

## Example: Display Message

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  submitMessage(event){
    event.preventDefault()
    this.setState({
      messages: [...this.state.messages, this.state.input]
    })
    this.setState({
      input: ''
    })
  }
  render() {
    const messages = this.state.messages.map(i => <li key={i}>{i}</li>)

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Send</button>
        <ul>{messages}</ul>
      </div>
    );
  }
};
```
