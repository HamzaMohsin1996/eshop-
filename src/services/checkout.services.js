import axios from 'axios';
import{browserHistory} from 'react-router';

export function create(shipping_address){
 return   axios.post('http://localhost:3000/checkout', { shipping_address })
}
