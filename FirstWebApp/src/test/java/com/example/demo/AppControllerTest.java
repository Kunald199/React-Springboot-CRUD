package com.example.demo;


import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.controller.AppController;
import com.example.model.Customers;
import com.example.repository.CustomerRepo;
import com.example.services.CustomerServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest(AppController.class)

public class AppControllerTest {
	@Autowired
	private MockMvc mockMvc;
	
@MockBean
CustomerServices cs;
	
	@MockBean
	private CustomerRepo repo;
	

	
	@Test
	public void getAllCustomersTest() throws Exception {
		List<Customers> cust=new ArrayList<>();
		Customers c1 = new Customers("Ramesh","ramesh@gmail.com","Mapabar Hill","Engineer");
		repo.save(c1);
		Customers c2 = new Customers("Suresh","suresh@gmail.com","Juhu","Scientist");
		repo.save(c2);
		Customers c3 = new Customers("Kamlesh","kamlesh@gmail.com","Thane East","Actor");
		repo.save(c3);
		cust.add(c1);
		cust.add(c2);
		cust.add(c3);
		when(repo.findAll()).thenReturn(cust);
		
		String url="/customers/allDetails";
		mockMvc.perform(get(url)).andExpect(status().isOk());
		assertEquals(3,repo.findAll().size());
		
	
		
		
		
	}
	
	@Test
	
	public void getCustomerByIdTest() throws Exception {
		Customers c = new Customers("Ramesh","ramesh@gmail.com","Mapabar Hill","Engineer");
		when(repo.save(c)).thenReturn(c);
	
		String url="/customers/get/";
		

		
		mockMvc.perform(get(url+c.getCid()))
		
		.andExpect(status().isOk());
		
		

		mockMvc.perform(get(url))
		
		.andExpect(status().isNotFound());
	

	
		
	}
	@Test
	public void insertCustomerTest() throws JsonProcessingException, Exception {
		Customers c = new Customers("Sachin Tendulkar","srt@gmail.com","Mumbai chaupati Juhu 2201","Retired Cricketer");
		
		ObjectMapper mapper = new ObjectMapper();
		when(repo.save(c)).thenReturn(c);
		String url="/customers/insert";
		mockMvc.perform(post(url).contentType("application/json")
				.content(mapper.writeValueAsString(c))
				).andExpect(status().isOk())
		.andExpect(jsonPath("$.cname",is(c.getCname())))
		.andExpect(jsonPath("$.cadd",is(c.getCadd())))
		.andExpect(jsonPath("$.cemail",is(c.getCemail())))
		.andExpect(jsonPath("$.cjob",is(c.getCjob())))
		.andExpect(content().json(mapper.writeValueAsString(c)))
		.andExpect(MockMvcResultMatchers.jsonPath("$.cname",is(c.getCname())));
		
		System.out.println(mapper.writeValueAsString(c));
		
	}
	
	@Test 
	public void deleteCustomerTest() throws Exception {
		Customers c = new Customers("Sachin Tendulkar","srt@gmail.com","Mumbai chaupati Juhu 2201","Retired Cricketer");
		
		
		when(repo.save(c)).thenReturn(c);
		
		String url="/customers/delete/";
		mockMvc.perform(delete(url+c.getCid()))
		.andExpect(status().isOk());
		
		
		
		
	

		
	}
	


	@Test
	public void updateEmployeeAPI() throws Exception 
	{
		ObjectMapper mapper = new ObjectMapper();
		Customers c1 = new Customers("Virat","srt@gmail.com","Dadar","Cricketer");
		repo.save(c1);
		Customers c = new Customers("Sachin Tendulkar","srt@gmail.com","Mumbai chaupati Juhu 2201","Retired Cricketer");
	  mockMvc.perform( MockMvcRequestBuilders
	      .put("/customers/update/{cid}", c1.getCid())
	      .content(mapper.writeValueAsString(c))
	      .contentType(MediaType.APPLICATION_JSON)
	      .accept(MediaType.APPLICATION_JSON))
	      .andExpect(status().isOk())
	      .andExpect(MockMvcResultMatchers.jsonPath("$.cname").value("Sachin Tendulkar"))
	      .andExpect(MockMvcResultMatchers.jsonPath("$.cadd").value("Mumbai chaupati Juhu 2201"))
	      .andExpect(MockMvcResultMatchers.jsonPath("$.cemail").value("srt@gmail.com"))
	      .andExpect(MockMvcResultMatchers.jsonPath("$.cjob").value("Retired Cricketer"));
	  
	}
	


}
