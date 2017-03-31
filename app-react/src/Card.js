import React, { Component } from 'react'
// import { browserHistory } from 'react-router'

class Card extends Component {

    // componentWillMount() {
    //    this.props.getProduct(this.props.params.productId)
    // }

    render() {
        // let products = this.props.products.filter(product => product.category_id === Number(this.props.params.categoryId))

        // products = products.map((product, key) => <div className="card has-pointer" key={key} onClick={() => browserHistory.push('/product/' + product.id)}>

        // <div className="card">
        //                 <figure className="image is-128x128">
        //                     <img src="http://bulma.io/images/placeholders/128x128.png" alt="categoryPatch" />
        //                 </figure> <br />
        //                 <hr />
        //                 {product.name}
        //             </div>
        //             </div>)

        return <div className={this.props.hidden ? "columns is-mobile hidden" : "columns is-mobile"}>
            <div className="column is-7 is-offset-5 categoryCard">
            <i className="fa fa-window-close-o fa-2x" aria-hidden="true" onClick={() => (this.props.hideCategory)}></i>
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