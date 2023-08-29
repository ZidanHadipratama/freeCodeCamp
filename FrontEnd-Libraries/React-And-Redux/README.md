# React & Redux 😎

## Getting Started with React Redux 🚀

First, let's review some key principles of React and Redux. React is a view library that efficiently renders views based on data. Redux is a state management framework that simplifies managing your app's state. In a React Redux app, you typically create a single Redux store to manage the state for your entire app. React components subscribe to specific pieces of data in the store and can trigger updates by dispatching actions.

While React components can manage their own local state, for more complex apps, it's often better to centralize the app's state with Redux. There are exceptions for components that need isolated local state. To integrate Redux with React, you'll use the `react-redux` package, which enables you to pass Redux state and dispatch as props to your React components.

### Example: Managing State Locally 📝

Here's an example of managing state locally in a React component:

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
}
```

### Example: Managing State with Redux (Not Integrated with React) 🔗

Here's an example of managing state with Redux:

```jsx
const ADD = 'ADD'

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type){
    case ADD:
      return [...state, action.message]
    default:
      return state
  }
}

const store = Redux.createStore(messageReducer)

console.log(store.getState())
store.dispatch(addMessage("Testing"))
console.log(store.getState())
```

## Using Provider to Connect Redux to React 🔄

React Redux provides two key features: `Provider` and `connect`. `Provider` is a wrapper component that allows your React app to access the Redux store and dispatch functions. It takes two props: the Redux store and the child components of your app. You can set up the `Provider` like this:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

### Example:

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
};
```

## Mapping State to Props 🗺️

To map state from the Redux store to component props, you'll use the `mapStateToProps()` function:

```jsx
const state = [];

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}
```

## Mapping Dispatch to Props 📣

The `mapDispatchToProps()` function maps action creators to component props for dispatching actions:

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}
```

## Connecting Redux to React 🔌

You can use the `connect` method to connect state and dispatch to your React component props:

```jsx
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
```

Here's full code example:
```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
```

## Connecting Redux to the Messages App 🔗

Now, let's connect Redux to your Messages component:

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

```

## Extracting Local State into Redux 🏗️

To move local state management to Redux, modify your component like this:

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input)
    this.setState({
      input: '',
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

```

By following these steps, you can effectively integrate React with Redux for optimal state management in your applications.
