$(function() {
    $('#btn-send').click(function() {
        $.ajax({
                url: "https://formspree.io/bogd_b@ukr.net",
                method: "POST",
                data: {
                    message: message.value
                },
                dataType: "json"
            })
            .done(function() {
                $('#form-wrapper').html('<h1>Thank you!</h1>');
            })
            .fail(function(jqXHR, textStatus) {
                $('#form-wrapper').html('<h1>Error!</h1><br>' + textStatus);
            });
    })
})