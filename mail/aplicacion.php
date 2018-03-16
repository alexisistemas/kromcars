<?php

// Check request
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) OR empty($_SERVER['HTTP_X_REQUESTED_WITH']) OR strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
  exit('El acceso a este archivo no es v醠ido.');    
}

// Recuperar variables post
echo "<pre>"; print_r($_POST);

// Recuperar informaci髇 de campo de archivo
echo "<pre>"; print_r($_FILES);

/**
 * Return data
 */
$data = array(
	'response' => true,
	'message' => 'Listo!'
);
echo json_encode($data);


exit;






if(empty($_POST['name']) || empty($_POST['email']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
}
 //INFORMACION PERSONAL
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$inic = $_POST['inic'];
$fechanac = $_POST['fechanac'];
$ssid = $_POST['ssid'];
$phonehome = $_POST['phonehome'];
$phonecell = $_POST['phonecell'];
$driverl = $_POST['driverl'];
$low1 = $_POST['low1'];
$up1 = $_POST['up1'];
$email = $_POST['email'];
$radio1 = $_POST['radio1'];
$radio1 = $_POST['radio1'];
$address = $_POST['address'];
 //INFORMACION LABORAL
$namelab= $_POST['namelab'];
$cargolab= $_POST['cargolab'];
$tiempolab= $_POST['tiempolab'];
$phonelab= $_POST['phonelab'];
$addresslab= $_POST['addresslab'];
$ciudadlab= $_POST['ciudadlab'];
$estadolab= $_POST['estadolab'];
$ziplab= $_POST['ziplab'];
$ingresobrutolab= $_POST['ingresobrutolab'];
$otroingresolab= $_POST['otroingresolab'];
$fuentelab= $_POST['fuentelab'];
 //INTERCAMBIO
$marcai= $_POST['marcai'];
$moeloi= $_POST['moeloi'];
$anoi= $_POST['anoi'];
$millasi= $_POST['millasi'];
$salari= $_POST['salari'];
$pagomensuali= $_POST['pagomensuali'];
$radio3= $_POST['radio3'];
$radio4= $_POST['radio4'];
 //VEHÍCULO NUEVO
$marcavn= $_POST['marcavn'];
$modelovn= $_POST['modelovn'];
$asientosvn= $_POST['pagoinicialvn'];
$pagoinicialvn= $_POST['pagoinicialvn'];
$colorevn= $_POST['colorevn'];
$colorivn= $_POST['colorivn'];
$radio5= $_POST['radio5'];
$radio6= $_POST['radio6'];
//FIRMA
$fechaf= $_POST['fechaf'];
$check1= $_POST['check1'];
$check2= $_POST['check2'];
$check3= $_POST['check3'];
$check4= $_POST['check4'];
$check5= $_POST['check5'];
$check6= $_POST['check6'];
$check7= $_POST['check7'];
$check8= $_POST['check8'];
$check9= $_POST['check9'];
/*$message = $_POST['message'];

$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$subject = ($_POST['subject'] ? $_POST['subject'] : "Website Contact Form: $name");*/



// Create the email and send the message
$to = 'dev.testing@exomarketer.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Aplicacion";
$email_body = "Nueva solicitu a traves de la aplicación onlie.\n\n"."INFORMACION PERSONAL:\n\nName: $name\n\nLast Name:$lastname\n\nIniciales: $inic\n\nFecha de Nacimiento: $fechanac\n\nSeguro Social: $ssid\n\nTelefono Casa: $phonehome\n\nTelefono Celular: $phonecell\n\nLicencia de Conducir:$driverl\n\nRango de Precio: $low-$up\n\nEmail: $email\n\nTipo:$tipo1-$tipo2\n\nDirecci贸n: $address\n\nINFORMACION LABORAL:\n\nNombre del Empleador:$namelab\n\n
$cargolab\n\n
$tiempolab\n\n
$phonelab\n\n
$addresslab\n\n
$ciudadlab\n\n
$estadolab\n\n
$ziplab\n\n
$ingresobrutolab\n\n
$otroingresolab\n\n
$fuentelab\n\n
$marcai\n\n
$moeloi\n\n
$anoi\n\n
$millasi\n\n
$salari\n\n
$pagomensuali\n\n
$radio3\n\n
$radio4\n\n
$marcavn\n\n
$modelovn\n\n
$asientosvn\n\n
$pagoinicialvn\n\n
$colorevn\n\n
$colorivn\n\n
$radio5\n\n
$radio6\n\n
$fechaf\n\n
$check1\n\n
$check2\n\n
$check3\n\n
$check4\n\n
$check5\n\n
$check6\n\n
$check7\n\n
$check8\n\n
$check9\n\n";
$headers = "From: dev.testing@exomarketer.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
