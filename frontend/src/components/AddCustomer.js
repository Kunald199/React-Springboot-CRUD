import React,{Component} from 'react';
import './styles/add.css';
import CustomerService from '../services/CustomerService';

import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import Alert from '@mui/material/Alert';

class AddCustomer extends Component{
    
 constructor(props){
     super(props)
this.state={
   
    cname:null,
    cadd:null,
    cjob:null,
    cemail:null,
    error:false,
    nameError:null,
    emailError:null,
    jobError:null
  
}
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
 
 addCustomer=(e)=>{
     
    if(this.state.nameError===false && this.state.emailError===false && this.state.jobError===false){
        CustomerService.addCustomer(this.state)
        .then(response => {
            console.log(response)
        })
      
    }
     else{
         
         this.setState({error:true});
     }
  
   
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

    render(){
      
        return(
            
        
            <div className="center ">
                <h4>Insert Customer</h4>

    

                        <div className="align-child" >
                            <form onSubmit={this.addCustomer}>
                            <div className="container">
                                <div className="input-field col s7">
                                <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>
                                <input style ={{width: '60%'}} required type="text" name="cname" onChange={this.changeHandlerName} placeholder="Enter Name"></input>
                               
                                </div>
                             <div className="center">
                             {this.state.nameError?(<Alert variant="outlined" severity="error">Please Enter Valid Name</Alert>):(<div></div>)}
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
                             {this.state.jobError?(<Alert variant="outlined" severity="error">Please Enter Valid Job</Alert>):(<div></div>)}
                             </div>
                             
                                <div className="input-field col s7">
                                   
                                <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>
                             <input style ={{width: '60%'}} required type="text" name="cemail" onChange={this.changeHandlerEmail} placeholder="Enter Email"></input>
                                
       
                                </div>
                                <div className="center">
                             {this.state.emailError?(<Alert variant="outlined" severity="error">Please Enter Valid Email</Alert>):(<div></div>)}
                             </div>
                               
                            
                              
                        </div>
                        
                        
                        <div className="center-align">
                        <button className="btn waves-effect waves-light blue" type="submit" name="action">
                            Add
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
