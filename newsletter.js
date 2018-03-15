$(function() {
 $("input").jqBootstrapValidation({
 preventSubmit: true,
 submitError: function($form, event, errors) {
 // additional error messages or events
 },
 submitSuccess: function($form, event) {
 event.preventDefault(); // prevent default submit behaviour
 // get values from FORM
 var email = $("input#suscrip").val();
 var mail = email; // For Success/Failure Message
 // Check for white space in name for Success/Fail message
 if (mail.indexOf(' ') >= 0) {
 mail = email.split(' ').slice(0, -1).join(' ');
 }
 $.ajax({
 url: "././mail/newsletter.php",
 type: "POST",
 dataType: 'json',
 data: {
 email: email,
 },
 cache: false,
 success: function(data) {
 if(data.error){
 // Fail message
 $('#success').html("<div class='alert alert-danger'>");
 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-danger').append("<strong>Lo Siento " + mail + ", Algo no salió bien. Por favor intentelo nuevamente.");
 $('#success > .alert-danger').append('</div>');
 //clear all fields
 $('#subscribeForm').trigger("reset");
 }
 else if(data.success){
 // Success message
 $('#success').html("<div class='alert alert-success'>");
 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
 $('#success > .alert-success').append("<strong>Su mensaje ha sido enviado. </strong>");
 $('#success > .alert-success').append('</div>');
 //clear all fields
 $('#subscribeForm').trigger("reset");
 }
 }
 })
 },
 filter: function() {
 return $(this).is(":visible");
 },
 });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
 $('#success').html('');
});
