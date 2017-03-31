import React from 'react'

class Product extends React.Component {
   constructor
   super

   this.state {

   }
   
   componentWillMount(){
       this.getProduct()

   }

   getProduct() {
       fetch('/api/product' + this.props.params.productID)
       .then(response => respons.json())
   }
    render () {
        return <div>
        {this.props.params.productID}
        </div> 
    }}

export default Product

