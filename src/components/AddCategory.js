import React from 'react';
import axios from 'axios';
import {create,editCategory} from '../services/category.services';
import FileBase64 from 'react-file-base64';
import {Link,withRouter  } from 'react-router';
import { browserHistory } from 'react-router';
import {Modal,Button} from 'antd';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Layout from './Layout';
import {signUpForm} from './Style';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


  

class AddCategory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      title:'',
      description:'',
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

   componentWillReceiveProps(newProps){

    if(this.props.category != newProps.category){
      this.setState({
        id: newProps.category.id,
        title: newProps.category.title,
        description: newProps.category.description,
        image: newProps.category.image
      });
    }
   }

    change= (key,e) => {
       this.setState({
          [key]:e.target.value
       });
    }

  handleSubmit = e => {
      e.preventDefault();
      var formdata = new FormData();
      formdata.append('title', this.state.title);
      formdata.append('description', this.state.description);
      formdata.append('image', this.state.image);

      var category= {
        title: this.state.title,
        description: this.state.description,
        image: this.state.image.base64,
      }
      if(this.state.id == ''){
     formdata = create(category).then(() =>
      browserHistory.push( "/category")
      )
      this.setState({
      Loading:true
    });
   }
     else {
      formdata = editCategory(category,this.state.id).then(() =>
      browserHistory.push( "/category")
     )}
  } 

  getFiles(files){  
    this.setState({ image: files })
  }

  render()  {
        const { classes } = this.props;
   return (
    
      <Layout>
      <div className="container" >

      <form   onSubmit={this.handleSubmit}  >
        <div className="form-group" >
        <div style={signUpForm}>
      <h4 style={{ paddingLeft: '250px' }}>Add Category:</h4>  
      {this.state.Loading && <LinearProgress/>}
          <h5>*Title</h5> <Input   
                value={this.state.title}
                placeholder="Title" 
                required
                className="form-control"
                 onChange={e => this.change('title',e)}
                 margin="normal"/> 

            <h5>*Description</h5><Input 
             name="description"
                className="form-control"
              required
                value={this.state.description}
                   placeholder="description" 
                 onChange={e => this.change('description',e)}/>

            <FileBase64 multiple={ false }
                className="form-control"
                  onDone={ this.getFiles.bind(this) } />
                 <br />
            <button className="btn btn-primary" >Save!</button>
        </div>
        </div>
      </form>
      </div>
      </Layout>
     
    );
  }
  }
  AddCategory.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRouter(AddCategory);