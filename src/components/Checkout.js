import React, {Component} from 'react';
import Layout from './Layout';
import Input from '@material-ui/core/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import {signUpForm} from './Style';
import {create} from '../services/checkout.services';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';




class Checkout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName:'',
			lastName:'',
			phone:'',
			email:'',
			city:'',
			address:'',
			userId:13,
      id:''
		}
	}
	change= (key,e) => {
       this.setState({
          [key]:e.target.value
       });
    } 
    handleSubmit= e => {
      e.preventDefault();
    	 var shipping_address= {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email:this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city:this.state.city,
        user_id:this.state.userId
      }
      create(shipping_address).then(() =>
      browserHistory.push('/product')
      )
            this.setState({
            Loading:true
        });

    }

       render() {
        return (
        	<Layout>
             <div className="App Site">
             <form  className="submit" onSubmit={this.handleSubmit.bind(this)} >
        <div className="form-group">
         <div style={signUpForm}>
        <h4 style={{ paddingLeft: '250px' }}>Shipping Address:</h4>  
      {this.state.Loading && <LinearProgress/>}
           <h5>*FirstName</h5><Input 
           name="firstName" 
                value={this.state.firstName}
                placeholder="firstName" 
                required
                className="form-control"
                 onChange={e => this.change('firstName',e)}/>
         <h5>*LastName</h5>  <Input type="lastName"
             name="lastName" 
                value={this.state.lastName}
                placeholder="lastName" 
                required
                className="form-control"
                 onChange={e => this.change('lastName',e)}/>

           <h5> *Email</h5> <Input type="email"
             name="email"
                className="form-control"
              required
                value={this.state.email}
                   placeholder="email" 
                 onChange={e => this.change('email',e)}/>

             <h5>*CellNo# </h5> <Input type="number"
             name="phone"
                className="form-control"
              required
                value={this.state.phone}
                   placeholder="phone" 
                 onChange={e => this.change('phone',e)}/>
             <h5>*Address</h5> <Input
                 name="address" 
                value={this.state.address}
                placeholder="address" 
                required
                className="form-control"
                 onChange={e => this.change('address',e)}/>

              <h5> *City</h5> <Input
             name="city"
                className="form-control"
              required
                value={this.state.city}
                   placeholder="city" 
                 onChange={e => this.change('city',e)}/>     
            <br />

            <button className="btn btn-primary" > Save!</button>
            <Link className="btn btn-primary" to="/carts"> Back</Link>


        </div>
        </div>
      </form>
            </div>
            </Layout>
        )
    }
}
export default Checkout;