/* 
 * Mateo Shkurti
 * Student ID: 991570115
 * Syst10199- Web Programming
 */


function farenheit(){
	var value = document.getElementById("textbox").value;
	var f = (value*1.8)+32;
	document.getElementById("out").innerHTML=f.toFixed(2)+"&#176F";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function celcius(){
	var value = document.getElementById("textbox").value;
	var c = (value-32)*(5/9);
	document.getElementById("out").innerHTML=c.toFixed(2)+"&#176C";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function meters(){
	var value = document.getElementById("textbox").value;
	var m = value/3.281;
	document.getElementById("out").innerHTML=m.toFixed(2)+"m";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function feet(){
	var value = document.getElementById("textbox").value;
	var ft = value*3.281;
	document.getElementById("out").innerHTML=ft.toFixed(2)+"ft";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function centimeters(){
	var value = document.getElementById("textbox").value;
	var cm = value*2.54;
	document.getElementById("out").innerHTML=cm.toFixed(2)+"cm";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function inches(){
	var value = document.getElementById("textbox").value;
	var i = value/2.54;
	document.getElementById("out").innerHTML=i.toFixed(2)+"in";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function kilograms(){
	var value = document.getElementById("textbox").value;
	var k = value/2.205;
        document.getElementById("out").innerHTML=k.toFixed(2)+"kg";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function pounds(){
	var value = document.getElementById("textbox").value;
	var l = value*2.205;
	document.getElementById("out").innerHTML=l.toFixed(2)+"lbs";
        var e = document.getElementById("out");
        e.style.color = "red";
}

function reset(){
	location.reload();
        document.getElementById("textbox").focus();
        
}
document.getElementById("textbox").focus();



