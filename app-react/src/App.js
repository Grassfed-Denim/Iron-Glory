import React, { Component } from 'react'
// import { browserHistory } from 'react-router'
import NavCard from './NavCard'
import Card from './Card'


class App extends Component {
  constructor(props) {
    super(props)

    this.showPod = this.showPod.bind(this)
    this.showMusic = this.showMusic.bind(this)
    this.showMovies = this.showMovies.bind(this)
    this.showParks = this.showParks.bind(this)
    this.showFarming = this.showFarming.bind(this)
    this.hideCategory = this.hideCategory.bind(this)

    this.getCategories = this.getCategories.bind(this)
    this.getProducts = this.getProducts.bind(this)
    this.getProduct = this.getProduct.bind(this)

    this.state = {
      patchOfDayHidden: true,
      musicHidden: true,
      moviesHidden: true,
      parksHidden: true,
      farmingHidden: true,
      hidden: false,
      category: [],
      originalProducts: [],
      products: [],
      product: {},
    }
  }

  // componentWillMount () {
  //   this.props.category
  // }

  showPod() {
    this.setState({patchOfDayHidden: false})
  }

  showMusic() {
    this.setState({musicHidden: false})
  }

  showMovies() {
    this.setState({moviesHidden: false})
  }

  showParks() {
    this.setState({parksHidden: false})
  }

  showFarming() {
    this.setState({farmingHidden: false})
  }
  hideCategory() {
    this.setState({musicHidden: true, moviesHidden: true, parksHidden: true, farmingHidden: true})
  }
  
    getCategories() {
        fetch('/api/categories_id')
        .then(res => res.json())
        // .then(response => console.log(response))
        .then(res => this.setState({categories: res}))
    }

    getProducts(categoryId) {
        fetch('/api/categories/' + categoryId + '/inventories')
        .then(res => res.json())
        .then(res => this.setState({products: res, originalProducts: res}))
    }

    getProduct(categoryId, productId) {
        fetch('https://iron-glory.herokuapp.com/api/categories/' + categoryId + '/inventories/' + productId)
        .then(res => res.json())
        .then(res => this.setState({product: res}))
    }

  render() {
    return <div>
    <a name="top" />
    <NavCard showPod={this.showPod} showMusic={this.showMusic} showMovies={this.showMovies} showParks={this.showParks} showFarming={this.showFarming} />
    <a name="products" />
    <Card category={this.props.category_id} hidden={this.state.musicHidden} title="Music/Bands"/>
    <Card category={this.props.category_id} hidden={this.state.moviesHidden} title="Movies"/>
    <Card category={this.props.category_id} hidden={this.state.parksHidden} title="Parks"/>
    <Card category={this.props.category_id} hidden={this.state.farmingHidden} title="Farming"/>
    </div> 
  }
}

export default App

