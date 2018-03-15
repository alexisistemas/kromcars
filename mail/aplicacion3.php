<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
}

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$inic = $_POST['inic'];
$fechanac = $_POST['fechanac'];
$ssid = $_POST['ssid'];
$phonehome = $_POST['phonehome'];
$phonecell = $_POST['phonecell'];
$driverl = $_POST['driverl'];
$low = $_POST['low'];
$up = $_POST['up'];
$email = $_POST['email'];
$tipo1 = $_POST['tipo1'];
$tipo2 = $_POST['tipo2'];
$address = $_POST['address'];

/*$message = $_POST['message'];

$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$subject = ($_POST['subject'] ? $_POST['subject'] : "Website Contact Form: $name");*/



// Create the email and send the message
$to = 'dev.testing@exomarketer.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Aplicacion";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nLast Name: $lastname\n\nIniciales: $inic\n\n
               Seguro Social: $ssid\n\nTelefono Casa: $phonehome\n\nTelefono Celular: $phonecell\n\nLicencia de Conducir: $driverl\n\n
			   Rango de Precio: $low-$up\n\nEmail: $email_address\n\nTipo:$tipo1-$tipo2\n\nDirección: $address";
$headers = "From: dev.testing@exomarketer.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
