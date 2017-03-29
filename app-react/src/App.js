import React, { Component } from 'react'
import NavCard from './NavCard'
import Card from './Card'


class App extends Component {
  constructor(props) {
    super(props)
    this.showMusic = this.showMusic.bind(this)
    this.showMovies = this.showMovies.bind(this)
    this.showParks = this.showParks.bind(this)
    this.showFarming = this.showFarming.bind(this)

    this.state = {
      musicHidden: true,
      moviesHidden: true,
      parksHidden: true,
      farmingHidden: true,
    }
  }

  showMusic() {
    this.setState({musicHidden: false})
  }

  showMovies() {
    this.setState({musicHidden: false})
  }

  showParks() {
    this.setState({parksHidden: false})
  }

  showFarming() {
    this.setState({famingHidden: false})
  }

  render() {
    return <div>
    <NavCard showMusic={this.showMusic} showMovies={this.showMovies} showParks={this.showParks} showFarming={this.showFarming} />
    <a name="products" />
    <Card hidden={this.state.musicHidden} title="Music"/>
    <Card hidden={this.state.moviesHidden} title="Movies"/>
    <Card hidden={this.state.parksHidden} title="Parks"/>
    <Card hidden={this.state.famingHidden} title="Farming"/>
    </div> 
  }
}

export default App

