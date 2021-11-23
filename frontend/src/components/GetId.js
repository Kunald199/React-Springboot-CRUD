import React,{Component} from 'react';
import "./styles/id.css";

import CustomerService from '../services/CustomerService';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import "./styles/all.css";

import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

class GetId extends Component{

    state={
        cid:-1,
        customers:[]
    }
    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
        getRecord=(e)=>{
            e.preventDefault();
           CustomerService.getById(this.state.cid).then((res)=>{
               
               this.setState({customers:res.data});
           });
        }
        render(){
         
            return(
                <>
                <div></div>
                <div class="center">
     <h4> Get Customer by Id</h4>

     <form onSubmit={this.getRecord}>

     
     <div class="input-field col s7">
                                <b style={{ color: "#1769aa" }}>ID</b>
                                <input style ={{width: '60%'}} required type="number" name="cid" onChange={this.changeHandler} placeholder="Enter ID"></input>
                               
                                </div>
                        
                        <br/>

                        <button class="btn waves-effect waves-light blue" type="submit" name="action">
     Get Record
  </button>



</form>   
</div>                
<br/> 
 {
    <div className="toLeft">
    <div class="container">
    <Card sx={{ minHeight:150,minWidth: 275,maxWidth:275}} style={{ borderColor: "blue" }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <b>{this.state.customers.cid}</b>
      </Typography>
      <Typography variant="h5" component="div">
    
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>{this.state.customers.cname}
      
     <br/>
       <HomeIcon style={{ color: "#1769aa" }}></HomeIcon>{this.state.customers.cadd}
        <br/>
    
        <WorkIcon style={{ color: "#1769aa" }}></WorkIcon>{this.state.customers.cjob}
        <br />
        <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>{this.state.customers.cemail}
        <br />
        </Typography>
    
    </CardContent>
 
    </Card>
    <br/>
    </div></div>
   
             }
             
                 
             </>
               
             )
        }
}

export default GetId;