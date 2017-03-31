import React, { Component } from 'react';

class NavCard extends Component {

  render() {
    return <div className="columns NavCard">
    <a name="top" />
    <div className="column is-vertical is-3">
        <div className="column patchBack">
            <div className="column is-parent is-vertical">
                <div>
                    <p className="podTitle">Patch Of The Day</p>
                    <img src="/iron-glory-assets/iron-glory-products/igp25.png" />
                    <hr/>
                    <p className="podTitle">Ghostbusters</p>
                </div>
            </div>
        </div>
    </div>
    <div className="column is-3">
        <p className="field">
            <a onClick={this.props.showPod} className="button is-large NavButton"><span>Patch-of-the-Day</span></a>
        </p>
        <p className="field">
            <a href="#Music" onClick={this.props.showMusic} className="button is-large NavButton"><span>Music/Bands</span></a>
        </p>
        <p className="field">
            <a href="#Movies" onClick={this.props.showMovies} className="button is-large NavButton"><span>Movies</span></a>
        </p>
        <p className="field">
            <a href="#Parks" onClick={this.props.showParks} className="button is-large NavButton"><span>National Parks</span></a>
        </p>
        <p className="field">
            <a href="#Farming" onClick={this.props.showFarming} className="button is-large NavButton"><span>Farming</span></a>
        </p>
        <p className="field">
            <a href="cart.html"className="button is-large NavButton"><span>Shopping Cart</span></a>
        </p>       
    </div>
    </div>
    }
}

export default NavCard