import React,{Component} from 'react';
import './styles/add.css';
import CustomerService from '../services/CustomerService';

import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

class AddCustomer extends Component{
    
 constructor(props){
     super(props)
this.state={
   
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
 
 addCustomer=(e)=>{
     
    CustomerService.addCustomer(this.state)
    .then(response => {
        console.log(response)
    })
   
 }
    render(){
      
        return(
            
        
            <div class="center ">
                <h4>Insert Customer</h4>

    

                        <div class="align-child" >
                            <form onSubmit={this.addCustomer}>
                            <div class="container">
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
                            Add
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