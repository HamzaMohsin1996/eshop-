import axios from 'axios';
import{browserHistory} from 'react-router';

export function list(){
		return axios.get('http://localhost:3000/categories')
		.then(function (response) {
    	return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}
export function destroy(id){
      axios.delete('http://localhost:3000/categories/'+ id)
      .catch(err => {
	  })
      .then(res=>{
    	return res
    })
}
export function create(category){
 return   axios.post('http://localhost:3000/categories', { category })
}
export function editDetails(categoryId) {
   return axios.get('http://localhost:3000/categories/'+  categoryId +'/edit'  )
   .then(response=>{
      return response
    })
  }
export function editCategory(category,id){
   return axios.request({
            method:'put',
            url:`http://localhost:3000/categories/${id}` ,
            data: category})
 }
 export function categoryProduct(categoryId){
  return axios.get('http://localhost:3000/categories/' + categoryId +'/category_products')
  .then(response=>{
      return response.data;
    })
  }
