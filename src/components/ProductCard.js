import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {createCart} from '../services/product.services';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Layout from './Layout';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class productCard extends React.Component {
	constructor(props){
		super(props);
			this.state = {
				product: {},
				quantity:'',
        productId:'',
				userId:13,
				purchased:true
			};
	    }
	    componentWillReceiveProps(newProps){
	    	this.setState ({
	 		product: newProps.product,
	 		quantity: newProps.quantity
	   	});
	    }
      componentDidMount()
     {
    	 	this.setState ({
    	 		product: this.props.product
  	 	});
	 }
	 change= (key,event) => {
       this.setState({
          [key]:event.target.value
       });
    }
    async cartEvent (productId){
	  	var list ={
	  		product_id:productId,
	  		quantity:this.state.quantity,
	  		user_id:this.state.userId,
	  		purchased:this.state.purchased	
	  	}
	  	const product = await createCart(list);
	   }
	    state = { expanded: false };

		  handleExpandClick = () => {
		    this.setState(state => ({ expanded: !state.expanded }));
		  };

    render() {
    	const { classes } =this.props;
    	const {product,index} =this.state;
        return (
<div className="col-lg-4 col-md-6 mb-4" key={product.id} id="Card">
     <Card className={classes.card } >
        <CardHeader
          title=<strong>{product.title}</strong>
        />
        <CardMedia
          className={classes.media}
          image={product.image}
        />
        <CardContent>
          <Typography component="p">
           <h4>Description:</h4> <strong>{product.description}</strong>
          </Typography>
          <Typography component="p">
           <h4>Price:</h4> <strong>{product.price} Rs</strong>
          </Typography>

          <input name="quantity"
			            type="number"
				        required
						value={this.state.quantity}
						placeholder="quantity"
						onChange={(event) => this.change("quantity", event)}/>
						   &nbsp;
			            <Button  onClick={this.cartEvent.bind(this,product.id)} color="primary" >Add to Cart</Button>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Edit" href={'/editproduct/' + product.id } color="primary"  >
		    
            <EditIcon/>
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.props.del} color="primary" id="edit">
            <DeleteIcon />
          </IconButton>
  
        </CardActions>
      </Card> 
   </div>         
        
        )
    }
}
productCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(productCard);

  