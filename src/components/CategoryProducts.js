import React, {Component} from 'react';
import ProductCard from './ProductCard';
import {categoryProduct} from '../services/category.services';
import {destroy} from '../services/product.services';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from './Layout';


const styles = theme => ({
   progress: {
    margin: theme.spacing.unit * 35,
  },

});



class CategoryProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
          products:[],
          Loading:true
        };
    }
   componentWillMount(){
           this.categoryProducts();
    }
   async  categoryProducts(){
     let categoryId = this.props.params.id;
     const categoryProducts = await categoryProduct(categoryId)
         this.setState({
            products: categoryProducts,
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
    render() {
        const {classes} = this.props;
        const Products = this.state.products;
        return (
         <Layout>

            {this.state.Loading && <CircularProgress className={classes.progress}  size={100} thickness={4.0} style={{marginLeft: '50%'}}/>}
         
         <div className="container-fluid">
         {Products.length>0 ?        
          <div className="row">
            {Products && Products.map((product,index) => {
                return (
          <ProductCard key={index} product ={product} index={index} del={this.delEvent.bind(this,product.id,index)}/>
              );
       })}

            </div>
                    : <h5 style={{ paddingLeft: '450px' }}>No Product Available</h5>
}
     </div>
   </Layout>

        )
    }
}
CategoryProducts.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(CategoryProducts);