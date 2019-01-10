import React, {Component} from 'react';
import {Link} from 'react-router';
import {list,destroy} from '../services/carts.services';
import {Table,Button,Glyphicon} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from './Layout';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';






const styles = theme => ({
   progress: {
    margin: theme.spacing.unit * 35
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },

});

class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			carts: [],
			message:''
		  };
		}
		 componentDidMount(){

			this.getProductDetails();
		}
		 async getProductDetails(){
		 	this.setState({
			Loading:true
		});
			const cart = await list();
			this.setState({
				carts:cart.data,
				Loading:false
			});
		}
		async delEvent(id,index){
			var product = this.state.carts;
			const del =  await destroy(id);
			window.confirm("Are you Sure?");
			product.splice(index,1);
			this.setState({
				product:[]
			});
		}
		handleDelete(){
			alert('You click the chip');
		}

    render() {
    	const classes = this.props;
    	const carts = this.state.carts;
    	console.log(carts,"Checking of False");
        return (
            <Layout> 
            <div  >
            <div className="container">
       		{carts.length > 0 ? 
       			<Table responsive>
					    <thead>
					      <tr>
					        <th>Title</th>
					        <th>Description</th>
					        <th>Price</th>
					        <th>Quantity</th>
					        <th>Total bill:</th>
					        <th>Image</th>
					        <th>Delete</th>					        
					      </tr>
					    </thead>  
					    <tbody>
      {this.state.Loading && <CircularProgress className={classes.progress}  size={100} thickness={4.0} style={{marginLeft: '50%'}}/>}      					
					    {carts.map((item,index) => {

				if(item.cart.purchased === false) {
					    return(
					      <tr key={item.cart.id}>		
					        <td >{item.product.title}</td>
					        <td >{item.product.description}</td>
					        <td >{item.product.price}Pkr</td>
					        <td >{item.cart.quantity}</td>
					        <td >{item.cart.quantity*item.product.price}Pkr</td>
					        <td ><img src={item.product.image} height="100px" width="100px"/> </td>
					        <td ><Chip onDelete={this.delEvent.bind(this,item.cart.id,index)}
						           label="Delete"
						            color="secondary"
						            variant="outlined"
					                className={classes.chip}/></td>
					     </tr>
					     	);
					    	}
				})}

			 </tbody>
		</Table> :
		<h5 style={{ paddingLeft: '450px' }}>Your Cart is Empty</h5>
		 }
		<Link to="/product" ><Glyphicon glyph="glyphicon glyphicon-chevron-left" style={{ color: 'black' }} /> Back To Shop </Link>
			 <Link to="/checkout" style={{ paddingLeft: '800px' }} >Proceed To Checkout<Glyphicon glyph="glyphicon glyphicon-chevron-right" /> </Link>
		</div>
</div>
		</Layout>

        )
    }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Cart);