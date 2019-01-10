import React from 'react';
import {Link} from 'react-router';
import {list,destroy,createCart} from '../services/product.services';
import AddProduct from './AddProduct';
import ProductCard from './ProductCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from './Layout';


const styles = theme => ({
   progress: {
    margin: theme.spacing.unit * 35,
  },

});



class Product extends React.Component {
	constructor(){
		super();
			this.state = {
				products: [],
				Loading:true

			};
    }
	    
	async componentDidMount(){
	 	const product = await list();
	 	this.setState ({
	 		products: product,
	 		Loading:false
	 	});
	 }
	async delEvent(id,index){
	 	const product = this.state.products;
	 	window.confirm("Are you Sure?");
	 	const del = await destroy(id);
	 	product.splice(index,1);
	 	this.setState({
	 		product:[]
	 	});
	 }
	   change= (key,event) => {
       this.setState({
          [key]:event.target.value
       });
    }


  render() {
  	const {classes} = this.props;
  	const products = this.state.products;
    return (
     <Layout>
     <div className="container-fluid">
			{this.state.Loading && <CircularProgress className={classes.progress}  size={100} thickness={4.0} style={{marginLeft: '50%'}}/>}
     
          {products.length >0 ? 
       
          <div className="row">
          	  {products && products.map((product,index) => {
	        	return (
          <ProductCard product ={product} index={index} del={this.delEvent.bind(this,product.id,index)}/>
			  );
	   })}
    </div>
    : <h5 style={{ paddingLeft: '450px' }}>No Products Available</h5>
}
    </div>
   </Layout>

    );
  }
}
Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);