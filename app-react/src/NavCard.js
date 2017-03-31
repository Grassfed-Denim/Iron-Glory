import React, { Component } from 'react';

class NavCard extends Component {

  render() {
    return <div className="columns NavCard">
    <div className="column is-3">
        <p className="field">
            <a href="#top" className="button is-large NavButton"><span>Return To Top</span></a>
        </p>
        <p className="field">
            <a onClick={this.props.showPod} className="button is-large NavButton"><span>Patch-of-the-Day</span></a>
        </p>
        <p className="field">
            <a href="#products" onClick={this.props.showMusic} className="button is-large NavButton"><span>Music/Bands</span></a>
        </p>
        <p className="field">
            <a href="#products" onClick={this.props.showMovies} className="button is-large NavButton"><span>Movies</span></a>
        </p>
        <p className="field">
            <a onClick={this.props.showParks} className="button is-large NavButton"><span>National Parks</span></a>
        </p>
        <p className="field">
            <a onClick={this.props.showFarming} className="button is-large NavButton"><span>Farming</span></a>
        </p>
        <p className="field">
            <a className="button is-large NavButton"><span>Shopping Cart</span></a>
        </p>
       
    </div>
    </div>
    }
}

export default NavCard