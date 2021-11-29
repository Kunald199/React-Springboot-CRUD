import React,{Component} from 'react';
import './styles/add.css';
import CustomerService from '../services/CustomerService';

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
    nameError:false,
    emailError:false,
    jobError:false,
    idError:null,
    success:null,
    updatedId:null,
    customers:[]
    

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
e.preventDefault();
console.log(this.state.nameError);
CustomerService.getById(this.state.cid).then(res=>{
    console.log(this.state.nameError);
    this.setState({customers:res.data});

    if(this.state.cname===null){
        this.setState({cname:this.state.customers.cname});
    }
    if(this.state.cadd===null){
        this.setState({cadd:this.state.customers.cadd});
    }
    if(this.state.cemail===null){
        this.setState({cemail:this.state.customers.cemail});
    }
    if(this.state.cjob===null){
        this.setState({cjob:this.state.customers.cjob});
    }
    if(this.state.nameError===false && this.state.emailError===false && this.state.jobError===false){
    
        CustomerService.updateCustomer(this.state,this.state.cid).then(this.setState({success:true,updatedId:this.state.cid})).catch((err)=>{
            this.setState({idError:true,success:false});
            
            
           
        })
    }
    this.reset();
})


 
    

   
 }

 reset=()=>{
    document.getElementById("cid").value="";
    document.getElementById("cname").value="";
    document.getElementById("cjob").value="";
    document.getElementById("cemail").value="";
    document.getElementById("cadd").value="";

    this.setState({
        cid:null,
    
   
        cname:null,
        cadd:null,
        cjob:null,
        cemail:null,
        nameError:null,
        emailError:null,
        jobError:null,
        idError:null
    });
 }

    render(){
        
        return(
            <div className="center ">
                <h4>Update Customer Details</h4>
                <h6>Enter the Fields You Want to Update</h6>

    

                        <div className="align-child" >
                            <form onSubmit={this.updateCustomer}>
                            <div className="container">
                            <div className="input-field col s7">
                                <b style={{ color: "#1769aa" }}>ID</b>
                                <input style ={{width: '60%'}}  required type="number" id="cid" name="cid" onChange={this.changeHandlerId} placeholder="Enter Id"></input>
                               
                                </div>
                                <div className="center">
                                {this.state.idError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Enter valid Id</b></Alert></div>):(<div></div>)}
                                </div>
                                <div className="input-field col s7">
                                <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>
                                <input style ={{width: '60%'}} type="text" id="cname" name="cname" onChange={this.changeHandlerName} placeholder="Enter Name"></input>
                               
                                </div>
                                <div className="center">
                             {this.state.nameError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Name</b></Alert></div>):(<div></div>)}
                             </div>
                            <div className="input-field col s7">
                             <HomeIcon style={{ color: "#1769aa" }}></HomeIcon>
                                <input style ={{width: '60%'}}  type="text" id="cadd" name="cadd" onChange={this.changeHandlerAdd} placeholder="Enter Address"></input>
                                
                                </div>
                                <div className="input-field col s7">
                                   
                                   <WorkIcon style={{ color: "#1769aa" }}></WorkIcon>
                                <input style ={{width: '60%'}}  type="text" id="cjob" name="cjob" onChange={this.changeHandlerJob} placeholder="Enter Job"></input>
                                   
          
                                   </div>
                                   <div className="center">
                             {this.state.jobError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Job</b></Alert></div>):(<div></div>)}
                             </div>
                               
                                <div className="input-field col s7">
                                <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>
                             <input style ={{width: '60%'}}  type="email"id="cemail" name="cemail" onChange={this.changeHandlerEmail} placeholder="Enter Email"></input>
                                
       
                                </div>
                                <div className="center">
                             {this.state.emailError?(<div className="container"><Alert variant="outlined" severity="error"><b className="alertMsg">Please Enter Valid Email</b></Alert></div>):(<div></div>)}
                             </div>
                            
                              
                        </div>
                        
                        
                        <div className="center-align">
                            <br/>
                        <button className="btn waves-effect waves-light blue" type="submit" name="action">
                            Update
                        </button>

                        <div className="center">
                        <br/>
                        <br/>
                                {this.state.success?(<div className="container"><Alert variant="outlined" severity="success"><b>Record Successfully Updated for {this.state.updatedId}</b></Alert></div>):(<div></div>)}
                                </div>
                        </div>
                        </form>
                        </div>
                        
                        
                      
            </div>
        )
    }
}

export default AddCustomer;
