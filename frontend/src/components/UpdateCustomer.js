import React,{Component} from 'react';
import './styles/add.css';
import CustomerService from '../services/CustomerService';
import axios from 'axios';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

import Alert from '@mui/material/Alert';

class AddCustomer extends Component{

 
state={
    cid:null,
    
   
    cname:null,
    cadd:null,
    cjob:null,
    cemail:null,
    nameError:null,
    emailError:null,
    jobError:null,
    idError:null
    

}
changeHandlerName=(e)  =>{
    
    
    this.setState({
        [e.target.name]: e.target.value
    })
    this.validateName();

}

changeHandlerEmail=(e)  =>{
    
    
    this.setState({
        [e.target.name]: e.target.value
    })
    this.validateEmail();

}
changeHandlerJob=(e)  =>{
    
    
    this.setState({
        [e.target.name]: e.target.value
    })
    this.validateJob();

}
changeHandlerAdd=(e)  =>{
    
    
    this.setState({
        [e.target.name]: e.target.value
    })
   

}
validateName(){
    let regex= RegExp("^[a-zA-Z]{2,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$");
        if(regex.test(this.state.cname)){
           console.log("valid name")
            this.setState({nameError:false})
        }
        else{
           
            this.setState({nameError:true});
            
        }

}

validateEmail(){
    let regex=RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
    if(regex.test(this.state.cemail)){
        console.log("valid Email")
         this.setState({emailError:false})
     }
     else{
        
         this.setState({emailError:true});
       
     }
}



validateJob(){
    let regex= RegExp("^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$");
    if(regex.test(this.state.cjob)){
        console.log("valid Job")
         this.setState({jobError:false})
     }
     else{
        
         this.setState({jobError:true});
         
     }
}
changeHandlerId=(e)  =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
 
 updateCustomer=(e)=>{
  
  
        CustomerService.updateCustomer(this.state,this.state.cid);
 }
    render(){
        return(
            <div className="center ">
                <h4>Update Customer Details</h4>

    

                        <div className="align-child" >
                            <form onSubmit={this.updateCustomer}>
                            <div className="container">
                            <div className="input-field col s7">
                                <b style={{ color: "#1769aa" }}>ID</b>
                                <input style ={{width: '60%'}} required type="number" name="cid" onChange={this.changeHandlerId} placeholder="Enter Id"></input>
                               
                                </div>
                                <div className="input-field col s7">
                                <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>
                                <input style ={{width: '60%'}} required type="text" name="cname" onChange={this.changeHandlerName} placeholder="Enter Name"></input>
                               
                                </div>
                                <div className="center">
                             {this.state.nameError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Name</b></Alert></div>):(<div></div>)}
                             </div>
                            <div className="input-field col s7">
                             <HomeIcon style={{ color: "#1769aa" }}></HomeIcon>
                                <input style ={{width: '60%'}} required type="text" name="cadd" onChange={this.changeHandlerAdd} placeholder="Enter Address"></input>
                                
                                </div>
                                <div className="input-field col s7">
                                   
                                   <WorkIcon style={{ color: "#1769aa" }}></WorkIcon>
                                <input style ={{width: '60%'}} required type="text" name="cjob" onChange={this.changeHandlerJob} placeholder="Enter Job"></input>
                                   
          
                                   </div>
                                   <div className="center">
                             {this.state.jobError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Job</b></Alert></div>):(<div></div>)}
                             </div>
                               
                                <div className="input-field col s7">
                                <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>
                             <input style ={{width: '60%'}} required type="email" name="cemail" onChange={this.changeHandlerEmail} placeholder="Enter Email"></input>
                                
       
                                </div>
                                <div className="center">
                             {this.state.emailError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Email</b></Alert></div>):(<div></div>)}
                             </div>
                            
                              
                        </div>
                        
                        
                        <div className="center-align">
                        <button className="btn waves-effect waves-light blue" type="submit" name="action">
                            Update
                        </button>
                        </div>
                        </form>
                        </div>
                        
                        <div className="vertical-venter">
                      
            </div></div>
        )
    }
}

export default AddCustomer;
