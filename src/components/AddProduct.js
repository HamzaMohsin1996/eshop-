import React from 'react';
import axios from 'axios';
import {create,editProduct,categorylist} from '../services/product.services';
import FileBase64 from 'react-file-base64';
import {Link,withRouter  } from 'react-router';
import { browserHistory } from 'react-router';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import {signUpForm} from './Style';
import Layout from './Layout';



class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories:'',
      categoryId: '',
      id:'',
      title:'',
      price:'',
      description:'',
      image: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

    change= (key,e) => {
       this.setState({
          [key]:e.target.value
       });
    }

    componentWillReceiveProps(newProps){

      if(this.props.product != newProps.product){
                this.setState({
            id:newProps.product.id,
            title:newProps.product.title,
            price:newProps.product.price,
            description: newProps.product.description,
            image: newProps.product.image
          });
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      var formdata = new FormData();
      formdata.append('title', this.state.title);
      formdata.append('price', this.state.price);
      formdata.append('description', this.state.description);
      formdata.append('image', this.state.image);
      var product= {
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        image: this.state.image.base64,
        category_id:this.state.categoryId
      }
      if (this.state.id == ''){
    formdata = create(product).then(() =>
      browserHistory.push('/product')
      )
   
    this.setState({
      Loading:true
    });
  }

    else {
      formdata = editProduct(product,this.state.id).then(()=>
        browserHistory.push('/product')
        )}

  } 
  async componentDidMount(){
    const category = await categorylist();
    this.setState({
      categories:category
    })

   }


  getFiles(files){
    this.setState({ image: files })
  }


  categoryHandler =e =>{
     this.setState({
      categoryId: e.target.value,

     })
  }  
  render() {
    const {classes} = this.props;
    const {categories,categoryId} =this.state;  
    return (
      <div>
      <Layout>
      <form  className="submit" onSubmit={this.handleSubmit} >
        <div className="form-group">
         <div style={signUpForm}>
        <h4 style={{ paddingLeft: '250px' }}>Add Product:</h4>  
      {this.state.Loading && <LinearProgress/>}
          <h5>*Title</h5> <Input 
           name="title" 
                value={this.state.title}
                placeholder="Title" 
                required
                className="form-control"
                 onChange={e => this.change('title',e)}/>
          <h5>*Price</h5> <Input 
             type="number"
             name="price" 
                value={this.state.price}
                placeholder="Price" 
                required
                className="form-control"
                 onChange={e => this.change('price',e)}/>

           <h5>*Description</h5> <Input 
             name="description"
                className="form-control"
              required
                value={this.state.description}
                   placeholder="description" 
                 onChange={e => this.change('description',e)}/>

          <h5>*Select Category</h5>
              <Select 
                className="form-control m-input"
                id="dropOff-options"
                onChange={e => this.categoryHandler(e)}
                value={categoryId}
              >
                {categories &&
                  categories.map((cat, i) => (
                    <option key={i} value={cat.id} >
                      {cat.title}
                    </option>
                  ))}
              </Select>

                <FileBase64 multiple={ false }
                required
                className="form-control"
                  onDone={ this.getFiles.bind(this) } />      
            <br />

            <button className="btn btn-primary"> Save!</button>

        </div>
        </div>
      </form>
      </Layout>
      </div>
    );
  }
  }


export default withRouter(AddProduct);
      


