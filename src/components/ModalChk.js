import React from 'react';
import {Modal,Button} from 'antd';
import FileBase64 from 'react-file-base64';
import {Link,withRouter  } from 'react-router';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {create,editCategory} from '../services/category.services';


class ModalChk extends React.Component  {
    state ={
      visible:false,
      id:'',
      title:'',
      description:'',
      image: null,

    }
    showModal = () =>{
        this.setState({
            visible:true
        });
    }
    handleOk = () =>{
        this.setState({
            visible:false
        });
    }
    handleCancel = () =>{
        this.setState({

            visible:false
        });
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
      )}
     else {
      formdata = editCategory(category,this.state.id).then(() =>
      browserHistory.push( "/category")
     )}
  } 

      getFiles(files){  
    this.setState({ image: files })
  }
    render(){
    return (
        <div>
        <Button type="inherit" onClick={this.showModal}>
            Add Category
        </Button>
        <Modal title="Add Category" 
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        >
          <form  className="submit" onSubmit={this.handleSubmit} >
        <div className="form-group">
           <input name="title" 
                value={this.state.title}
                placeholder="Title" 
                required
                className="form-control"
                 onChange={e => this.change('title',e)}/>

            <input name="description"
                className="form-control"
              required
                value={this.state.description}
                   placeholder="description" 
                 onChange={e => this.change('description',e)}/>

            <FileBase64 multiple={ false }
                className="form-control"
                  onDone={ this.getFiles.bind(this) } />
                 <br />
            <button className="btn btn-info" >Save Category!</button>

        </div>
      </form>
        </Modal>
            
        </div>
    )
  }
}

export default ModalChk;


