import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Categories from './components/Categories'
import Category from './components/Category'
import Product from './components/Product'
import Products from './components/Products'
import Checkout from './components/Checkout'
import ThankYou from './components/ThankYou'

// global config
window.apiHost = 'https://iron-glory.heroukuapp.com'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Categories}/>
      <Route path="categories/:categoryId" component={Category}/>
      <Route path="products/:productId" component={Product}/>
      <Route path="checkout" component={Checkout}/>
      <Route path="thankyou" component={ThankYou}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
