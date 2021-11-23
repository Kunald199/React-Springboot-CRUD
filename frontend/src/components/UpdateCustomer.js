import React,{Component} from 'react';

import CustomerService from '../services/CustomerService';

import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
class AddCustomer extends Component{

 
state={
    cid:null,
    customers:{
   
    cname:null,
    cadd:null,
    cjob:null,
    cemail:null
    
    }
}

changeHandler=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
 
 updateCustomer=(e)=>{
 
    CustomerService.updateCustomer(this.state,this.state.cid)
    .then(response => {
        console.log(response)
    })
 }
    render(){
        return(
            <div class="center ">
                <h4>Update Customer Details</h4>

    

                        <div class="align-child" >
                            <form onSubmit={this.updateCustomer}>
                            <div class="container">
                            <div class="input-field col s7">
                                <b style={{ color: "#1769aa" }}>ID</b>
                                <input style ={{width: '60%'}} required type="number" name="cid" onChange={this.changeHandler} placeholder="Enter Id"></input>
                               
                                </div>
                                <div class="input-field col s7">
                                <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>
                                <input style ={{width: '60%'}} required type="text" name="cname" onChange={this.changeHandler} placeholder="Enter Name"></input>
                               
                                </div>
                            <div class="input-field col s7">
                             <HomeIcon style={{ color: "#1769aa" }}></HomeIcon>
                                <input style ={{width: '60%'}} required type="text" name="cadd" onChange={this.changeHandler} placeholder="Enter Address"></input>
                                
                                </div>
                                <div class="input-field col s7">
                                   
                                   <WorkIcon style={{ color: "#1769aa" }}></WorkIcon>
                                <input style ={{width: '60%'}} required type="text" name="cjob" onChange={this.changeHandler} placeholder="Enter Job"></input>
                                   
          
                                   </div>
                               
                                <div class="input-field col s7">
                                <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>
                             <input style ={{width: '60%'}} required type="email" name="cemail" onChange={this.changeHandler} placeholder="Enter Email"></input>
                                
       
                                </div>
                            
                              
                        </div>
                        
                        
                        <div class="center-align">
                        <button class="btn waves-effect waves-light blue" type="submit" name="action">
                            Update
                        </button>
                        </div>
                        </form>
                        </div>
                        
                        <div class="vertical-venter">
                      
            </div></div>
        )
    }
}

export default AddCustomer;