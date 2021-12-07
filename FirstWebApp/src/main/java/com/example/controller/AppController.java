package com.example.controller;











import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.model.Customers;
import com.example.repository.CustomerRepo;
import com.example.services.CustomerServices;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AppController {
	@Autowired
	CustomerRepo repo;
	@Autowired
	CustomerServices cs;
	
	// ###### From UI #####
	@RequestMapping("/")
	
	public String details() {
		return "welcome";
		//want the form to be displayed
		
	}
	//want form to be retrieved and data entered must be stored in h2
	@PostMapping("/")
	public String details(Customers customers) {
			repo.save(customers);
		return "welcome";
	}
	

    
    //Fetch record of customer from UI
	@RequestMapping("/getDetails")
	public String Viewdetails() {
			
		return "ViewDetail";
	}
	@PostMapping("/getDetails")
	public ModelAndView getDetails(@RequestParam int cid) { 
		ModelAndView mv = new ModelAndView("Retrieve");
		Customers customers = repo.findById(cid).orElse(null);	
		mv.addObject(customers);
		return mv;
	}
	
	@RequestMapping("/allDetails")
	public String allDetails() {
		return "RetrieveAll";
	}
	
	@PostMapping("/allDetails")
	
	public List<Customers> getAllDetails() {
		
		return repo.findAll();
	}
	//   ######################  POSTMAN ########################
    //Insert Customer from postman
    @PostMapping("/customers/insert")
    
    public ResponseEntity<Customers> createCustomer(@RequestBody Customers cust) {  //The json passed should bind to Customers object
        
       repo.save(cust);
        return ResponseEntity.ok().body(cust);
       
    }
	
	//Find all customers in database POSTMAN
	@GetMapping("/customers/allDetails")
	
	public ResponseEntity<List<Customers>> getCustomers() {
		return ResponseEntity.ok().body(cs.getAll());
	}
	
	//Find specific customer
	@RequestMapping("/customers/get/{cid}")
	    //want to get specific data
	
	public ResponseEntity<Optional<Customers>> getCustomersId(@PathVariable("cid")int cid) {
		try {
			return ResponseEntity.ok().body(cs.getById(cid));
			}
			catch(Exception e) {
				System.out.println(e);
			}
			return null;
	}
	
	//Deleting customer by Id POSTMAN
    @DeleteMapping("/customers/delete/{cid}")
   
    public List<Customers> deleteEmployee(@PathVariable("cid") int cid)
    {
       
      
    	   try {
    	        cs.deleteById(cid);
    	        return cs.getAll();
    	      }
    	      catch(Exception e) {
    	    	  System.out.println(e);
    	      }
    	      return null;
    }

    //Update customer POSTMAN

	@PutMapping("/customers/update/{cid}")
 
    public ResponseEntity<Customers> updateEmployee1 (@PathVariable("cid") int cid, @Valid @RequestBody Customers cust)
    {
        //code
    	cs.updateById(cid, cust);
        return (ResponseEntity<Customers>) ResponseEntity.ok().body(cust);
    }
		
	
    


}
