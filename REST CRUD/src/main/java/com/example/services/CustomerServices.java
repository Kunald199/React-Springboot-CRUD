package com.example.services;






import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.example.model.Customers;
import com.example.repository.CustomerRepo;



@Component
public class CustomerServices  {
 @Autowired
 private CustomerRepo repo;
 
 public List<Customers> getAll(){
	 return   repo.findAll();
 }
 
 public Optional<Customers> getById(int cid){
	return repo.findById(cid);
 }
 
 public boolean deleteById(int cid) {
	 Customers c = repo.findById(cid)
	            .orElse(null);

	        repo.delete(c);
	        return repo.findById(cid).isPresent();
 }
public ResponseEntity<Customers> updateById(int cid,Customers cust){
    Customers c = repo.findById(cid)
            .orElse(null);

        c.setCemail(cust.getCemail());
        c.setCname(cust.getCname());
        c.setCadd(cust.getCadd());
        c.setCjob(cust.getCjob());
        final Customers cu= repo.save(c);
        return ResponseEntity.ok().body(cu);
}
 
	

}