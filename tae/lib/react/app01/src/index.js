// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );
  
  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();
  
  

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';


const JSX = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX, document.getElementById('create_a_simple_jsx_element'));


// ------------------------------------------------------------------



const JSX1 = <div>
  <h1>title</h1>
  <p>para</p>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
ReactDOM.render(JSX1, document.getElementById('create_a_complex_jsx_element'));


// ------------------------------------------------------------------




const JSX2 = (
  <div>
  { /* this is a comment */ }
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
ReactDOM.render(JSX2, document.getElementById('add_comments_in_jsx'));



// ------------------------------------------------------------------




const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
ReactDOM.render(JSX3, document.getElementById('define_an_html_class_in_jsx'));


// ------------------------------------------------------------------




const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
ReactDOM.render(JSX4, document.getElementById('learn_about_self-closing_jsx_tags'));


// ------------------------------------------------------------------




const MyComponent = () => <div>my component</div>;
ReactDOM.render(MyComponent(), document.getElementById('create_a_stateless_functional_component'));


// ------------------------------------------------------------------




class MyComponent1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div><h1>rendered a component by importing react</h1></div>
    );
  }
};
ReactDOM.render(<MyComponent1 />, document.getElementById('create_a_react_component'));


// ------------------------------------------------------------------



const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
ReactDOM.render(<ParentComponent />, document.getElementById('create_a_component_with_composition'));



// ------------------------------------------------------------------



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
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood />, document.getElementById('use_react_to_render_nested_components'));



// ------------------------------------------------------------------


const NonCitrus = () => {
  return (
    <div>
      <h4>Non-Citrus:</h4>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};


const Citrus = () => {
  return (
    <div>
      <h4>Citrus:</h4>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};


const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

class Fruits1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood1 extends React.Component {
  // constructor(props) {
  //    super(props);
  // }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits1 />
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood1 />, document.getElementById('compose_react_components'));


// ------------------------------------------------------------------


const CurrentDate = props => {
  return (
    <div>
      <p>The current date is: { props.date }</p>
    </div>
  );
};

class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* date is our html custom attribute */ }
        <CurrentDate date= { Date() } />
      </div>
    );
  }
};
ReactDOM.render(<Calendar />, document.getElementById('pass_props_to_a_stateless_functional_component'));


// ------------------------------------------------------------------


const List = props => {
  return <p>{ props.tasks.join(", ") }</p>
};

class ToDo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks= { ["walk dog", "workout"] }/>
        <h2>Tomorrow</h2>
        <List tasks= { ["cook", "find out a high-value club", "ask Silvia out"] }/>
      </div>
    );
  }
};
ReactDOM.render(<ToDo />, document.getElementById('pass_an_array_as_props'));


// ------------------------------------------------------------------


const ShoppingCart = props => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>{ props.items }</p>
    </div>
  )
};
/*
React also has an option to set default props. 
You can assign default props to a component as a 
property on the component itself and React assigns the 
default prop if necessary. This allows you to specify what 
a prop value should be if no value is explicitly provided. 
For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, 
you have defined a location prop that's set to the string 
San Francisco, unless you specify otherwise. 
React assigns default props if props are undefined, 
but if you pass null as the value for a prop, it will remain null.
*/
ShoppingCart.defaultProps = { items: 0 }
ReactDOM.render(<ShoppingCart />, document.getElementById('use_default_props'));


// ------------------------------------------------------------------


const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items quantity={ 10 }/>
  }
};
ReactDOM.render(<ShoppingCart1 />, document.getElementById('override_default_props'));



// ------------------------------------------------------------------


const Items1 = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
/*
React provides useful type-checking features to verify that 
components receive props of the correct type. 
For example, your application makes an API call to 
retrieve data that you expect to be in an array, 
which is then passed to a component as a prop. 
You can set propTypes on your component to require 
the data to be of type array. 
This will throw a useful warning when the data is of any other type.
It's considered a best practice to set propTypes 
when you know the type of a prop ahead of time. 
You can define a propTypes property for a component 
in the same way you defined defaultProps. 
Doing this will check that props of a given key are present with a given type.
*/
Items1.propTypes = { quantity: PropTypes.number.isRequired }

Items1.defaultProps = {
  quantity: 100
};

class ShoppingCart2 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items1 />
  }
};
ReactDOM.render(<ShoppingCart2 />, document.getElementById('use_propTypes_to_define_the_Props_You_Expect'));



// ------------------------------------------------------------------


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <div>
            <Welcome name="massimiliano" />
        </div>
    );
  }
};

class Welcome extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <div>
          {/*
          The last several challenges covered the basic ways to 
          pass props to child components. But what if the child component 
          that you're passing a prop to is an ES6 class component, 
          rather than a stateless functional component? 
          The ES6 class component uses a slightly different convention to access props.
          Anytime you refer to a class component within itself, 
          you use the this keyword. To access props within a class component, 
          you preface the code that you use to access it with this.
          */}
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('Access_Props_Using_this_props'));


/*
Except for the last challenge, you've been passing props to 
stateless functional components. These components act like 
pure functions. They accept props as input and return the same 
view every time they are passed the same props. You may be 
wondering what state is, and the next challenge will cover it 
in more detail. Before that, here's a review of the terminology for components.

A stateless functional component is any function you write 
which accepts props and returns JSX. A stateless component, 
on the other hand, is a class that extends React.Component, 
but does not use internal state (covered in the next challenge). 
Finally, a stateful component is a class component that does maintain 
its own internal state. You may see stateful components referred to 
simply as components or React components.

A common pattern is to try to minimize statefulness and to create 
stateless functional components wherever possible. This helps contain 
your state management to a specific area of your application. 
In turn, this improves development and maintenance of your app 
by making it easier to follow how changes to state affect its behavior.
*/


// ------------------------------------------------------------------


class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    /*
    State consists of any data your application needs to know about, 
    that can change over time. You want your apps to respond to 
    state changes and present an updated UI when necessary.
    You create state in a React component by declaring a state 
    property on the component class in its constructor. 
    This initializes the component with state when it is created. 
    The state property must be set to a JavaScript object.
    You have access to the state object throughout the life of your component. 
    You can update it, render it in your UI, and pass it as 
    props to child components. The state object can be as complex 
    or as simple as you need it to be. Note that you must create 
    a class component by extending React.Component in order to create state like this.
    */
    this.state = { name: "max" }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<StatefulComponent />, document.getElementById('Create_a_Stateful_Component'));


/*
Once you define a component's initial state, you can 
display any part of it in the UI that is rendered. 
If a component is stateful, it will always have access 
to the data in state in its render() method. 
You can access the data with this.state.

If you want to access a state value within the return 
of the render method, you have to enclose the value in curly braces.

state is one of the most powerful features of components in React. 
It allows you to track important data in your app and render 
a UI in response to changes in this data. If your data changes, 
your UI will change. React uses what is called a virtual DOM, 
to keep track of changes behind the scenes. 
When state data updates, it triggers a re-render of the 
components using that data - including child components 
that received the data as a prop. React updates the actual DOM, 
but only where necessary. This means you don't have to worry 
about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other 
components are aware of its state. Its state is completely 
encapsulated, or local to that component, unless you pass 
state data to a child component as props. 
This notion of encapsulated state is very important 
because it allows you to write certain logic, 
then have that logic contained and isolated in one place in your code.
*/


// ------------------------------------------------------------------


class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const NAME = this.state.name;
    return (
      <div>
        <h1>{ NAME }</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent2 />, document.getElementById('Render_State_in_the_User_Interface_Another_Way'));


// ------------------------------------------------------------------


class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    /*
    explicitly bind this in the constructor so this becomes 
    bound to the class methods when the component is initialized.
    */
    this.click = this.handleClick.bind(this);
  }
  handleClick() {
    /*
    React expects you to never modify state directly, 
    instead always use this.setState() when state changes occur. 
    Also, you should note that React may batch multiple state 
    updates in order to improve performance. 
    What this means is that state updates through the 
    setState method can be asynchronous. There is an 
    alternative syntax for the setState method which 
    provides a way around this problem.
    */
    this.setState({
      name: "React Rocks!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent3 />, document.getElementById('Set_State_with_this.setState'));


// ------------------------------------------------------------------


class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggle = this.toggleVisibility.bind(this)
  }
  toggleVisibility() {
    /*
    Sometimes you might need to know the previous state 
    when updating the state. However, state updates may 
    be asynchronous - this means React may batch multiple 
    setState() calls into a single update. This means you 
    can't rely on the previous value of this.state or this.props 
    when calculating the next value.
    Instead, you should pass setState a function that allows you 
    to access state and props. Using a function with setState 
    guarantees you are working with the most current values of state and props.
    */
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggle}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggle}>Click Me</button>
        </div>
      );
    }
  }
}
ReactDOM.render(<MyComponent4 />, document.getElementById('Use_State_to_Toggle_an_Element'));


// ------------------------------------------------------------------


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.incrementMethod.bind(this);
    this.decrement = this.decrementMethod.bind(this);
    this.reset = this.resetMethod.bind(this);
  }
  incrementMethod() {
    this.setState(state => ({
      count: state.count +1
    }))
  }
  decrementMethod() {
  this.setState(state => ({
    count: state.count -1
  }))
  }
  resetMethod() {
    this.setState({
      count: 0
  })
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
};
ReactDOM.render(<Counter />, document.getElementById('Write_a_Simple_Counter'));


// ------------------------------------------------------------------


class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.input} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<ControlledInput />, document.getElementById('Create_a_Controlled_Input'));


// ------------------------------------------------------------------


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
    // to prevent the default form submit behavior which will refresh the web page. 
    event.preventDefault();
    this.setState(state => ({
      submit: state.input 
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('Create_a_Controlled_Form'));


// ------------------------------------------------------------------


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/*
         A common pattern is to have a stateful component 
         containing the state important to your app, that 
         then renders child components. You want these components 
         to have access to some pieces of that state, which are passed in as props.
         This pattern illustrates some important paradigms in React. 
         The first is unidirectional data flow. State flows in one 
         direction down the tree of your application's components, 
         from the stateful parent component to child components. 
         The child components only receive the state data they need. 
         The second is that complex stateful apps can be broken down 
         into just a few, or maybe a single, stateful component. 
         The rest of your components simply receive state from the 
         parent as props, and render a UI from that state. 
         It begins to create a separation where state management 
         is handled in one part of code and UI rendering in another. 
         This principle of separating state logic from UI logic is 
         one of React's key principles. When it's used correctly, 
         it makes the design of complex, stateful applications much easier to manage.
         */}
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
ReactDOM.render(<MyApp />, document.getElementById('Pass_State_as_Props_to_Child_Components'));


// ------------------------------------------------------------------


class MyApp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
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
         {/*
         You can pass state as props to child components, 
         but you're not limited to passing data. 
         You can also pass handler functions or any method 
         that's defined on a React component to a child component. 
         This is how you allow child components to interact with their parent components.
         */}
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
};

class RenderInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<MyApp1 />, document.getElementById('Pass_a_Callback_as_Props'));


// ------------------------------------------------------------------


class MyComponent5 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  /*
  React components have several special methods that provide 
  opportunities to perform actions at specific points in the 
  lifecycle of a component. These are called lifecycle methods, 
  or lifecycle hooks, and allow you to catch components at certain 
  points in time. This can be before they are rendered, before 
  they update, before they receive props, before they unmount, and so on.
  */
  componentWillMount() {
    console.log("hello, this is a console log")
  }
  render() {
    return <div />
  }
};
ReactDOM.render(<MyComponent5 />, document.getElementById('Use_the_Lifecycle_Method_componentWillMount'));


// ------------------------------------------------------------------

class MyComponent6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  /*
  The best practice with React is to place API calls 
  or any calls to your server in the lifecycle method 
  componentDidMount(). This method is called after a component 
  is mounted to the DOM. Any calls to setState() here will 
  trigger a re-rendering of your component. When you call 
  an API in this method, and set your state with the data 
  that the API returns, it will automatically trigger an 
  update once you receive the data.
  */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 12738
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent6 />, document.getElementById('Use_the_Lifecycle_Method_componentDidMount'));


// ------------------------------------------------------------------


class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  /*
  The componentDidMount() method is also the best place 
  to attach any event listeners you need to add for 
  specific functionality. React provides a synthetic 
  event system which wraps the native event system 
  present in browsers. This means that the synthetic event 
  system behaves exactly the same regardless of the user's 
  browser - even if the native events may behave differently 
  between different browsers.
  */
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
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
};
ReactDOM.render(<MyComponent7 />, document.getElementById('Add_Event_Listeners'));


// ------------------------------------------------------------------

class OnlyEvens extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  /*
  So far, if any component receives new state or new props, 
  it re-renders itself and all its children. This is usually okay. 
  But React provides a lifecycle method you can call when 
  child components receive new state or props, and declare 
  specifically if the components should update or not. 
  The method is shouldComponentUpdate(), and it takes 
  nextProps and nextState as parameters.

  This method is a useful way to optimize performance. 
  For example, the default behavior is that your component 
  re-renders when it receives new props, even if the props 
  haven't changed. You can use shouldComponentUpdate() to 
  prevent this by comparing the props. The method must return 
  a boolean value that tells React whether or not to update the component.
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    return nextProps.value % 2 === 0;
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
ReactDOM.render(<Controller />, document.getElementById('Optimize_Re-Renders_with_shouldComponentUpdate'));


// ------------------------------------------------------------------

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
ReactDOM.render(<Colorful />, document.getElementById('Introducing_Inline_Styles'));


// ------------------------------------------------------------------

const styles = {
  color: "purple", 
  fontSize: 40, 
  border: "1em solid purple"
};
class Colorful1 extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
ReactDOM.render(<Colorful1 />, document.getElementById('Add_Inline_Styles_in_React'));


// ------------------------------------------------------------------

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
    /*
    You can also write JavaScript directly in 
    your render methods, before the return statement, 
    without inserting it inside of curly braces. 
    This is because it is not yet within the JSX code. 
    When you want to use a variable later in the JSX code 
    inside the return statement, you place the variable name inside curly braces.
    */
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
        <p>{answer}</p>
      </div>
    );
  }
}
ReactDOM.render(<MagicEightBall />, document.getElementById('Use_Advanced_JavaScript_in_React_Render_Method'));


// ------------------------------------------------------------------

class MyComponent8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
        return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
          </div>
        );
    }
  }
};
ReactDOM.render(<MyComponent8 />, document.getElementById('Render_with_an_If-Else_Condition'));


// ------------------------------------------------------------------

class MyComponent9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
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
        {/*
        The if/else statements worked in the last challenge, 
        but there's a more concise way to achieve the same result.
        You can use the && logical operator to perform 
        conditional logic in a more concise way.
        */}
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};
ReactDOM.render(<MyComponent9 />, document.getElementById('Use_&&_for_a_More_Concise_Conditional'));


// ------------------------------------------------------------------


const inputStyle1 = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    }
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
          style={inputStyle1}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/*
        if/else statements can't be inserted directly into JSX code.
        Ternary expressions can be an excellent alternative if 
        you want to implement conditional logic within your JSX.
        */}
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
            ? buttonTwo
            : buttonThree
        }
      </div>
    );
  }
}
ReactDOM.render(<CheckUserAge />, document.getElementById('Use_a_Ternary_Expression_for_Conditional_Rendering'));

// ------------------------------------------------------------------

class Results extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <h1>{this.props.fiftyFifty}</h1>; // alternative {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
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
    this.setState(prevState => {
      return {
        counter: prevState.counter +1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/*
        Using props to conditionally render code is very common 
        with React developers — that is, they use the value of a 
        given prop to automatically make decisions about what to render.
        */}
        {/* alternative fiftyFifty={expression} */}
        <Results fiftyFifty={expression ? "You Win!" : "You Lose!"}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
ReactDOM.render(<GameOfChance />, document.getElementById('Render_Conditionally_from_Props'));

// ------------------------------------------------------------------

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
    /*
    This paradigm is important to understand because 
    it is a dramatic shift from the more traditional 
    approach of applying styles by modifying DOM elements 
    directly (which is very common with jQuery, for example). 
    In that approach, you must keep track of when elements 
    change and also handle the actual manipulation directly. 
    It can become difficult to keep track of changes, potentially 
    making your UI unpredictable. When you set a style object based 
    on a condition, you describe how the UI should look as a function 
    of the application's state. There is a clear flow of information 
    that only moves in one direction. This is the preferred method 
    when writing applications with React.
    */
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red'
    } 
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
ReactDOM.render(<GateKeeper />, document.getElementById('Change_Inline_CSS_Conditionally_Based_on_Component_State'));

// ------------------------------------------------------------------

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
    }
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
    const items = this.state.toDoList.map(el => <li>{el}</li>); 
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
ReactDOM.render(<MyToDoList />, document.getElementById('Use_Array.map()_to_Dynamically_Render_Elements'));

// ------------------------------------------------------------------

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  /*
  React uses these keys to keep track of which 
  items are added, changed, or removed. 
  This helps make the re-rendering process 
  more efficient when the list is modified in any way.

  Note: Keys only need to be unique between sibling elements, 
  they don't need to be globally unique in your application.
  */
  // using indexes for keys attr should be avoided as the position of elements may change
  const renderFrameworks = frontEndFrameworks.map(el => <li key={el}>{el}</li>); 
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
ReactDOM.render(<Frameworks />, document.getElementById('Give_Sibling_Elements_a_Unique_Key_Attribute'));

// ------------------------------------------------------------------

class MyComponent10 extends React.Component {
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
    const usersOnline = this.state.users.filter(el => el.online); 
    const renderOnline = usersOnline.map(el => <li key={el.username}>{el.username}</li>); 
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent10 />, document.getElementById('Use_Array.filter()_to_Dynamically_Filter_an_Array'));

// ------------------------------------------------------------------

class App1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <div/>
  }
};
/*
So far, you have been rendering React components on the client. 
Normally, this is what you will always do. However, 
there are some use cases where it makes sense to render 
a React component on the server. Since React is a JavaScript 
view library and you can run JavaScript on the server with Node, 
this is possible. In fact, React provides a renderToString() 
method you can use for this purpose.
There are two key reasons why rendering on the server may 
be used in a real world app. First, without doing this, 
your React apps would consist of a relatively empty HTML 
file and a large bundle of JavaScript when it's initially 
loaded to the browser. This may not be ideal for search engines 
that are trying to index the content of your pages so people can find you. 
If you render the initial HTML markup on the server and 
send this to the client, the initial page load contains 
all of the page's markup which can be crawled by search engines. 
Second, this creates a faster initial page load experience 
because the rendered HTML is smaller than the JavaScript code 
of the entire app. React will still be able to recognize 
your app and manage it after the initial load.
*/
ReactDOMServer.renderToString(<App1 />);