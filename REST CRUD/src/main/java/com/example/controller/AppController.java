package com.example.controller;











import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins="http://localhost:3000/")
@Controller
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
    @ResponseBody
    public ResponseEntity<Customers> createCustomer(@RequestBody Customers cust) {  //The json passed should bind to Customers object
        
       repo.save(cust);
        return ResponseEntity.ok().body(cust);
       
    }
	
	//Find all customers in database POSTMAN
	@GetMapping("/customers/allDetails")
	@ResponseBody
	public List < Customers > getCustomers() {
		return cs.getAll();
	}
	
	//Find specific customer
	@RequestMapping("/customers/get/{cid}")
	    //want to get specific data
	@ResponseBody
	public Optional<Customers> getCustomersId(@PathVariable("cid")int cid) {
		return cs.getById(cid);
	}
	
	//Deleting customer by Id POSTMAN
    @DeleteMapping("/customers/delete/{cid}")
    @ResponseBody
    public List<Customers> deleteEmployee(@PathVariable("cid") int cid)
    {
       
      
        cs.deleteById(cid);
        return cs.getAll();
    }

    //Update customer POSTMAN
    @PutMapping("/customers/update/{cid}")
    @ResponseBody
    public ResponseEntity < Customers> updateEmployee(@PathVariable("cid") int cid,
        @RequestBody Customers cust)  {
    	
    	
    		return cs.updateById(cid, cust);
    }

}
