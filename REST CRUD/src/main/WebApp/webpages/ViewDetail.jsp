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

div{   margin: auto;
  width: 50%;
  border: 3px white;
  padding: 10px;
  background-image: linear-gradient(red, yellow);
  text-align:center;
  
  }
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Details</title>
</head>
<body>
<div>
<h1> Enter Customer Id</h1>
<form action="getDetails" method="post">

<input type="number" name="cid">
<input type="submit" value="submit">

</form>
</div>
</body>
</html>