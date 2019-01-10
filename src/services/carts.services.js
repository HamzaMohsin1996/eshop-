import axios from 'axios';

export function list(){
     return axios.get ('http://localhost:3000/carts',{headers:{'Content-Type': 'application/json'}})
  	.then(function (response) {
    	return response.data 
    })
}
export function destroy(id){
	console.log(id)
      axios.delete('http://localhost:3000/carts/' + id )
      .catch(err => {
	  })
      .then(res=>{
    	return res
    })
}