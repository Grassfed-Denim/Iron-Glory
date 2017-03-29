import React, { Component } from 'react'

class Card extends Component {

    render() {
        return <div className={this.props.hidden ? "columns is-mobile hidden" : "columns is-mobile"}>
            <div className="column is-7 is-offset-5">
                <article className="tile is-child notification is-danger">
                    <div className="card">
                        <figure className="image is-128x128">
                            <img src="http://bulma.io/images/placeholders/128x128.png" alt="categoryPatch" />
                        </figure> <br />
                        <hr />
                        {this.props.title}
                    </div>
                </article>
            </div>
        </div>
    }
}

export default Card