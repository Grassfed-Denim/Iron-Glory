import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

class NavCard extends Component {

  render() {
    return <div className="columns NavCard">
    <div className="column is-5">
        <p className="field">
            <a href="#top" className="button is-large is-warning NavButton">Return To Top</a>
        </p>
        <p className="field">
            <a onClick={this.props.showPod} className="button is-large is-warning NavButton">Patch-of-the-Day</a>
        </p>
        <p className="field">
            <a href="#products" onClick={this.props.showMusic} className="button is-large is-warning NavButton">Music/Bands</a>
        </p>
        <p className="field">
            <a href="#products" onClick={this.props.showMovies} className="button is-large is-warning NavButton">Movies</a>
        </p>
        <p className="field">
            <a onClick={this.props.showParks} className="button is-large is-warning NavButton">National Parks</a>
        </p>
        <p className="field">
            <a onClick={this.props.showFarming} className="button is-large is-warning NavButton">Farming</a>
        </p>
        <p className="field">
            <a className="button is-large is-warning NavButton">Shopping Cart</a>
        </p>
        <figure className="image is-64x64 patchOfTheDay">
        <img className="patchOfTheDay" src="/iron-glory-assets/iron-glory-products/igp25.png" alt="patchOfTheDay"  />
        </figure>
    </div>
    </div>
    }
}

export default NavCard


