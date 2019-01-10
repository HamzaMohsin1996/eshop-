import React from 'react';
import FileBase64 from 'react-file-base64';
import {list,destroy,editDetails,editCategory} from '../services/category.services';
import { Link } from 'react-router';
import AddCategory from './AddCategory';
import { browserHistory } from 'react-router';
import Layout from './Layout';
  

class EditCategory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
   		category:[]
    }


  }
   
   componentWillMount() {
     this.getEditDetails();
        
    	    }	
    getEditDetails(){
      let categoryId = this.props.params.id;
       editDetails(categoryId)
       .then(response => {
          this.setState({
            category: response.data
        });
        })
		     
  }

  render()  {
    const {category} = this.state;
   return (
      <div>
      <AddCategory category={category} />
      </div>
      )
    }

}
export default  EditCategory;