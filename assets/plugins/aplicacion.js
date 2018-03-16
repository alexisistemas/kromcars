$(function() {
    
    $("input,snapValues").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault();

            /**
             * Default var
             */
            var form = $("#aplicacionForm");
            var formData = new FormData(form[0]);

            $.ajax({
                beforeSend: function () {
                    // Disabled content
                    $('#btn_ajax_send_form').addClass('disabled');
                },
                url: "././mail/aplicacion.php",
                type: "POST",
                dataType: 'json',
                data: formData,
                cache: false,
            contentType: false, //this is requireded please see answers above
            processData: false,
                success: function(data) {
                    if (data.response) {
                        // Enable content
                        $('#btn_ajax_send_form').removeClass('disabled');
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", Something is not right. Please try again.");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#aplicacionForm').trigger("reset");
                    } else {
                        // Enable content
                        $('#btn_ajax_send_form').removeClass('disabled');
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                        $('#success > .alert-success').append('</div>');
                        //clear all fields
                        $('#aplicacionForm').trigger("reset");
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