import React, { Component } from 'react';

class NavCard extends Component {
  render() {
    return <div className="tile is-ancestor">
        <div className="tile is-vertical is-5">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
            </div>
          </div>
        </div>
      </div> 
    }
}

export default NavCard