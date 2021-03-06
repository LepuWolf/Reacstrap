//import React from 'react';
import ReactDOM from 'react-dom';

import ExampleReactBoostrap from './exampleractboostrap.js';

import   ExampleNavegacion  from './examplenavegacion.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './miscss.css'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Button } from 'reactstrap';
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};

const varia = "Perro";

class Timer extends React.Component{

  constructor(props){
    super(props);
    this.state = {seconds: 0};
  }

  tick(){
    this.setState(state => ({ seconds : state.seconds + 1}));   
    
  }

  componentDidMount(){  
    this.interval = 
      setInterval(()=>this.tick(), 1000);

  }

  render(){
    return(
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
  }

}

class HelloMessage extends React.Component {
    
  render() {
    return (
      <div>
        Hola {this.props.name}
        <br/>
        Me siento {this.props.estadoAnimo}
        {varia}
      </div>
    );
  }
}

class Hooks extends React.Component{

}

//Hook de estado
class ExampleHookEstado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function HookEstado() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//Hook de efecto
class ExampleHookEfecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function HookEfecto() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el t??tulo del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Avatar(props){
  return(
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
        <Avatar user={props.user} />
         <div className="UserInfo-name">
          {props.user.name}
        </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}  />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date }
      </div>
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  render() {
    return (
      // React
      

      <div className='container'>
      <h3>Tareas pendientes</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          ??Qu?? se necesita hacer?
        </label>
        <div>
          <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        </div>
        <div>
        <button className='btn btn-primary'>
          A??adir #{this.state.items.length + 1}
        </button>
        </div>
        </form> 
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}

class TodoList extends React.Component {
  render() {
    return (
        
      <ul>
      {this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>

    );
  }
}

ReactDOM.render(
  <ExampleHookEstado />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <ExampleReactBoostrap />,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);*/

/*ReactDOM.render(
    <ExampleNavegacion />
  ,
  document.getElementById('root')
);*/

/*
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
