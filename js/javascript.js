function myFunction() {
    //Get the value of input field with id="numb"
    var val = document.getElementById("mno").value;
    var num = document.getElementById("mno");
    //Get the element with id="demo"
    var elem = document.getElementById("demo");

    //If value is space or not a number
    if (val == " " || isNaN(val)) {
    	
    	alert("only numbers are allowed");

    } 
}
function matchPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('demo');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if(pass1.value == pass2.value){
    	pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"

    }else{
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  
function checkPass()
{
	var pass1 = document.getElementById('pass1').value;
	if(pass1.length <= 5){
		alert("atleast 5 characters are required");
		document.getElementById('pass1').focus();
        document.getElementById('pass1').value="";
        return false;
	}
}
function submit(){
	var uname=location.search.substr(location.search.indexOf("=")+1);
    document.getElementById('welcome').innerHTML="Hello" + uname;
}