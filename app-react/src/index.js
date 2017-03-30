import React from 'react'
import ReactDOM from 'react-dom'
// import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './App'
// import Card from './Card'
// import NavCard from './NavCard'
// import Categories from './Categories'
// import Category from './Category'
// import Checkout from './Checkout'
// import Thankyou from './ThankYou'

// Global configuration
// window.apiHost = 'https://iron-glory.herokuapp.com/'
// window.apiHost = 'localhost:3001/'


// ReactDOM.render(

//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//         <IndexRoute component={Home} />
//         <Route path="category/:categoryId" component={Category} />
//         <Route path="product/:productId" component={Product} />
//         <Route path="checkout" component={Checkout} />
//         <Route path="thankyou" component={ThankYou} />
//     </Route>
//   </Router>,

//   document.getElementById('root')
  



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
