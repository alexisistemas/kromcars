<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['brand']) || empty($_POST['model']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
} 
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$brand = $_POST['brand'];
$model = $_POST['model'];
$year = $_POST['year'];
$low = $_POST['low'];
$up = $_POST['up'];
$typec = $_POST['typec'];

//$subject = ($_POST['subject'] ? $_POST['subject'] : "Website Contact Form: $name");



// Create the email and send the message
$to = 'dev.testing@exomarketer.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Búsqueda de Vehículo";
$email_body = "Ha recibido una nueva solicitud de busqueda de vehículo.\n\n"."A continuación los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nTipo:\n$typec\n\nMarca:\n$brand\n\nModelo:\n$model\n\nAño:\n$year\n\nRango de precio:\n$low - $up";
//$email_body = "Ha recibido una nueva solicitud de busqueda de vehículo.\n\n"."A continuación los detalles:\n\nNombre: $name";
$headers = "From: dev.testing@exomarketer.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
