import React, {Component} from 'react';
import AddProduct from './AddProduct';
import {list,destroy,editDetails} from '../services/product.services';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Layout from './Layout';

class EditProduct extends Component {


   constructor(props){
    super(props);
  this.state={
    product:{}
  }

  }
  componentWillMount(){
    this.getProductDetails();
  }
  getProductDetails(){
    let productId = this.props.params.id;
    editDetails(productId)
    .then(res => {
      this.setState({
       product:res.data

      });
    })

  }
    render() {
      const {product} = this.state;
        return (
            <div>
                <AddProduct product={product} />
            </div>

        )
    }
}
export default EditProduct;