import axios from 'axios';
import{browserHistory} from 'react-router';

export function list(){
	return axios.get('http://localhost:3000/products')
	   .then (function(response){
	   	return response.data
	   })
	   .catch(function (error) {
        console.log(error);
  });
}
export function destroy(id){
	  axios.delete('http://localhost:3000/products/'+ id)
      .catch(err => {
	  })
      .then(res=>{
    	return res
    })
}
export function create(product){
	return axios.post('http://localhost:3000/products' ,{ product })
}
export function editDetails(productId){
	return axios.get('http://localhost:3000/products/'+ productId + '/edit')
	.then(res  =>{
		return res
	})
}
export function editProduct(product,id){
   return axios.request({
            method:'put',
            url:`http://localhost:3000/products/${id}` ,
            data: product})
 }
 export function categorylist(){
 	return axios.get('http://localhost:3000/categories')
 	.then(function(response) {
 		return response.data
 	})
 }
 export function createCart(list){
 	return axios.post('http://localhost:3000/carts', {list})
 	.then(function(response){
 		return response
 	})
 }
