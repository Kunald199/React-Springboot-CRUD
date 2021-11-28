import React,{Component} from 'react';
import CustomerService from '../services/CustomerService';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles/all.css";

import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';



class ListAll extends Component{

state={
    customers:[]
}
   

    componentDidMount(){
       CustomerService.getAllCustomers().then((res)=>{
           
           this.setState({customers:res.data});
       });
    }
deleteCustomer(cid){
    CustomerService.deleteCustomer(cid).then((res)=>{
           
        this.setState({customers:res.data});
    });
}
   
    render(){
     
        return(
            <div className="CustomerList">
 <h4> Customer Records</h4>
 {this.state.customers.map(c=>{
     return(
       
         
<div key={c.cid} className="inCard" >
<Card  sx={{ minWidth: 275,maxWidth:300}} style={{ borderColor: "blue" }} >
<CardContent >
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   <b>{c.cid}</b>
  </Typography>
  <Typography variant="h5" component="div">

  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    <PersonIcon style={{ color: "#1769aa" }}></PersonIcon>{c.cname}
  
 <br/>
   <HomeIcon style={{ color: "#1769aa" }}></HomeIcon>{c.cadd}
    <br/>
    <WorkIcon style={{ color: "#1769aa" }}></WorkIcon>{c.cjob}
    <br />

    <EmailIcon style={{ color: "#1769aa" }}></EmailIcon>{c.cemail}
    <br />
    </Typography>

</CardContent>
<CardActions>
  
  <Button onClick={()=>{this.deleteCustomer(c.cid)}} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
</CardActions>
</Card>
<br/>
</div>


     )
 })}

      </div>
     
         )
    }
}

export default ListAll;