import React, { Component } from 'react';


class CardLoad extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      foo: null,
    };
  }
fetch('/users.json')  
  .then(function(response) {
    return response.json()
  })

fetch('https://mywebsite.com/endpoint/', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
  componentDidMount() {
    fetch('/api/foo')
      .then(response => response.json())
      .then((foo) => { this.setState({ foo }); });
  }

  render() {
    if (!this.state.foo) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {this.state.foo.name}
        {this.props.children}
      </div>
    );
  }
}

class Bar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      bar: null,
    };
  }

  componentDidMount() {
    fetch('/api/bar')
      .then(response => response.json())
      .then((bar) => { this.setState({ bar }); });
  }

  render() {
    if (!this.state.bar) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {this.state.bar.name}
      </div>
    );
  }
}




export default CardLoad

// FETCH:
// component
// constructor
// super
// this.filterproducts =this.filterproducts.bind---when you make a new method
// this.state = {
//   products [],
//   filter {}
// }
// componentwillmount(){
// this.getProducts()
// getProducts(){
//  ex: ""fetch('/api/bar')
//       .then(response => response.json())
//       .then((response) => { this.setState({ response }); });""

//       render(){
//         return <div>
//         <Products products= {this.state.products}
//         </div>
//       }




