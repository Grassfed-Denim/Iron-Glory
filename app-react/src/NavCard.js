import React, { Component } from 'react';

class NavCard extends Component {
  render() {
    return <div className="columns">
    <div className="column is-5">
        <article className="tile notification is-primary">
        <a className="button is-warning">Music</a>
        <a className="button is-warning">Bands</a>
        <a className="button is-warning">National Parks</a>
        <a className="button is-warning"></a>
        <a className="button is-warning">Warning</a>
        <a className="button is-warning">Warning</a>
        </article>
    </div>
    </div>
    }
}

export default NavCard