
import axios from 'axios';

const FETCH_ALL="http://localhost:8081/customers/allDetails"
const INSERT='http://localhost:8081/customers/insert'
const UPDATE='http://localhost:8081/customers/update/'
const BY_ID='http://localhost:8081/customers/get/'
const DELETE='http://localhost:8081/customers/delete/'

class CustomerService{

    getAllCustomers(){
        return axios.get(FETCH_ALL);
    }

   addCustomer(state){
    return axios.post(INSERT, state)

   }

   updateCustomer(state,cid){
    return axios.put(UPDATE+cid, state)

   }
getById(cid){
    return axios.get(BY_ID+cid);
}

deleteCustomer(cid){
    return axios.delete(DELETE+cid);
}
}

export default new CustomerService()