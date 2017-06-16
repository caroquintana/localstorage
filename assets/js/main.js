function guardarDatos(){
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.password = document.getElementById("password").value;
}

function recuperarDatos(){
	if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
		document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
	}else{
		document.getElementById("datos"). innerHTML = "No has introducido tu nombre y password";
	}
}