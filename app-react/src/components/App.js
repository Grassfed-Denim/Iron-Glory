import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Products from './Products'
import FilterAndSearch from './FilterAndSearch'


class App extends Component {
    constructor(props) {
    super(props)
    this.getCategory = this.getCategory.bind(this)
    this.filterProducts = this.filterproducts.bind(this)

    this.state = {
      originalProducts: [],
      products: {},
      productHidden: false
    }
  }
}
  componentWillMount() {
    this.getProducts()
  }

  getProducts() {
        fetch('https://iron-glory.heroukuapp.com')
        .then(res => res.json())
        .then(res => this.setState({categories: res}))
    }

    })}


  filterProducts(term) {
    let products = this.state.originalProducts
    products = products.filter(function(product) {
      return productname.category.includes(term)
      
})
    this.setState ({
      products: products,
      productHidden = !this.state.productHidden
    })
  } 
    render() {
        return <div>
        <Products products= {this.state.products}
        </div>
      }
  

export default App



