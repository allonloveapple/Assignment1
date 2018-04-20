"use strict";

function showLevel_1(n) {
	var level_1 = document.getElementsByClassName("show_sub");
	var i;
	for(i=0;i<level_1.length; i++ ){
		level_1[i].style.display  = "none";
	}
	level_1[n].style.display="block";
	}

function showCoffee(){
	var i;
	var showTea = document.getElementsByClassName("Showtea");
	for(i=0;i<showTea.length; i++ ){
		showTea[i].style.display  = "none";
	}
	var showCoffee = document.getElementsByClassName("ShowCoffee");
	for(i=0;i<showCoffee.length; i++ ){
		showCoffee[i].style.display  = "inline-block";
	}
}

function showTea(){
	var i;
	var showTea = document.getElementsByClassName("Showtea");
	for(i=0;i<showTea.length; i++ ){
		showTea[i].style.display  = "inline-block";
		showTea[i].style.left = "160px";
	}
	var showCoffee = document.getElementsByClassName("ShowCoffee");
	for(i=0;i<showCoffee.length; i++ ){
		showCoffee[i].style.display  = "none";
	}
}

function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("Top_right_frame").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","/Assignment1/Assignment1_php.php",true);
    xmlhttp.send();
}