import React from 'react';
import {list,destroy} from '../services/category.services';
import {Link} from 'react-router';
import AddCategory from './AddCategory';
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
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
   progress: {
    margin: theme.spacing.unit * 35,
  },

});



class Category extends React.Component {
	constructor(){
		super();
		this.state = {
			categories : []

		};
	}
	async componentDidMount() {
		this.setState({
			Loading:true
		});
		const cat = await list();
		this.setState({
			categories: cat,
			Loading:false
		});	
	}
	async delEvent(id,index){
		var category =this.state.categories;
		const del = await destroy(id);
		window.confirm("Are you sure");
		category.splice(index,1);
		
		this.setState({
			category:[]
		});		
	}

	

	render()  { 
    	const { classes } =this.props;
		const categories = this.state.categories;
		return (
           <Layout>
			<div className="container-fluid">
			{this.state.Loading && <CircularProgress className={classes.progress} size={100} thickness={4.0} style={{marginLeft: '50%'}}/>}
			
			{categories.length > 0 ?   
			<div className="row">
			
			{categories.map((cat,index) => {
				return (	
					<div className="col-lg-4 col-md-6 mb-4" key={cat.id} id="Card">
					<Card className={classes.card } >
					<CardHeader			
					title=<strong>{cat.title}</strong>
					/>
					<Link to={'/CategoryProducts/'+ cat.id + '/category_products'}>
					<CardMedia
					className={classes.media}
					image={cat.image}
					/>
					</Link>
					<CardContent>
					<Typography component="p">
					<h4>Description:</h4> <strong>{cat.description}</strong>
					</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
					<IconButton aria-label="Edit" href={'/EditCategory/'+ cat.id } color="primary" >

					<EditIcon/>
					</IconButton>
					<IconButton aria-label="Delete"  onClick={this.delEvent.bind(this,cat.id,index)} color="primary" id="edit">
					<DeleteIcon />
					</IconButton>

					</CardActions>
					</Card> 
					</div>  

					);
			})}	
			</div>
			 : <h5 style={{ paddingLeft: '450px' }}>No Category Available</h5>
}
			</div> 
	     </Layout>

			);
	};
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);




