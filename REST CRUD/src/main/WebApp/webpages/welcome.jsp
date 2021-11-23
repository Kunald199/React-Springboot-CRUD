<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


<style>

input {
	margin-top:220px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input:hover{
	  
	   border: 4px solid red;
}
.menu{text-align:center;}
.main{   margin: auto;
  width: 50%;
  border: 3px white;
  padding: 10px;
  background-image: linear-gradient(red, yellow);
  text-align:center;
  
  }
  
  a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid red;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
  color: white;
}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome to our Application</title>

<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="main" >
<b><h1>Welcome to our Application</h1></b>
<b><h2>Please Provide Your Details</h2></b>
<form method="post" action="/">
<b>Enter Customer id:</b>
<input type="number" name="cid">
<br>

<b>Enter Customer Name:</b>
<input type="text" name="cname">
<br>
<b>Enter Customer Address:</b>
<input type="text" name="cadd">
<br>
<b>Enter Customer Email:</b>
<input type="text" name="cemail">
<br>

<input type="submit">
</form>

</div>
<div class="menu">
<a href="/getDetails"> To find Specific customer</a>
<a href="/allDetails">All Customers</a>
</div>
</body>
</html>