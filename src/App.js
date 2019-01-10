import React from 'react';
import { Route, Router,indexRoute,browserHistory} from 'react-router';
import  './index.css';
import Header from './components/Header';
import Root from './components/Root';
import Home from './components/Home';
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import EditCategory from './components/EditCategory';
import Category from './components/Category';
import Footer from './components/Footer';
import AddCategory from  './components/AddCategory';
import Dashboard from './components/Dashboard';
import Test from './components/Test';
import EditProduct from './components/EditProduct';
import Carts from './components/Carts';
import CategoryProducts from './components/CategoryProducts';
import ModalChk from './components/ModalChk';
import Checkout from './components/Checkout';
import ProductCard from './components/ProductCard';


class App extends React.Component {
   render(){
    return(
  <div className="App">
       <Router history={browserHistory}>
              <Route path={"/"} component={Home}/>       
              <Route path={"addCategory"} component={AddCategory}/>       
              <Route path={"header"} component={Header} ></Route>
              <Route exact path={"product"} component={Product} />
              <Route path={"home"} component={Home}></Route>
              <Route path={"category"} component={Category}>  </Route>
              <Route path={"addProduct"} component={AddProduct}/>
              <Route path={"editProduct/:id"} component={EditProduct}/>
              <Route path={"footer"} component={Footer}/>
              <Route path={"dashboard"} component={Dashboard}/>
              <Route path={"test"} component={Test}/>
              <Route path={"addProduct"} component={AddProduct}/>
              <Route path={"carts"} component={Carts}/>
              <Route path={"productCard"} component={ProductCard}/>
              <Route path={"modalChk"} component={ModalChk}/>
              <Route path={"checkout"} component={Checkout}/>
            <Route exact path={"CategoryProducts/:id/category_products"} component={CategoryProducts}/>
            <Route exact path={"editCategory/:id"} component={EditCategory}/>
         </Router>
     </div>
      );
   }
  }

export default App;
