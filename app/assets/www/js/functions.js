function calcularFecha () {
	var fecha = new Date();
	var day =  25 - fecha.getDate();
	return day;
}

function getURL () {
	var psuAccount = document.getElementById("account").value;
	var strA = 'http://wsr.registraduria.gov.co/servicios/censo.htm?nCedula=';
	var strB = '&buscar4=Buscar';
	var newUrl = strA+psuAccount+strB;
	window.location.href = newUrl;
}
